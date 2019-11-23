import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import config from '@/config';
import apis from '@/service/api-urls';
import {
  sessionStore
} from '@/utils';
import auth from '@/service/auth';
let loadingInstance;
let timerId = {};
const TIMEOUT = 10000; // 接口10秒超时
// console.log(config.envConfig)
const NODE_ENV = (process.env.NODE_ENV || 'development').trim();
const BASE_URL = NODE_ENV === 'development' ? config.envConfig.apiOrigin : '';

axios.defaults.timeout = TIMEOUT;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers['Content-Type'] =
//   'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.transformRequest = [
//   data => {
//     // Do whatever you want to transform the data
//     return qs.stringify(data);
//   }
// ];
// 添加请求拦截
axios.interceptors.request.use(
  function (config) {
    // 请求之前处理
    return config;
  },
  function (error) {
    // 请求发生错误处理
    return Promise.reject(error);
  }
);
// 添加响应拦截
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

let createAxios = (baseURL, url) => {
  function commonPostFormData(url, formData, token) {
    return axios.post(
      url,
      formData, {
        headers: {
          token: token,
          "content-type": 'application/x-www-form-urlencoded'
        }
      }
    );
  }

  function commonPostBody(url, data, token) {
    return axios.post(
      url,
      data, {
        headers: {
          token: token
        }
      }
    );
  }

  function commonGetPath(url, token) {
    url += `?_t=${Date.now()}` // 加时间戳，防止ie取缓存
    return axios.get(url, {
      headers: {
        token: token
      }
    });
  }
  return {
    /*
     * axios get 请求
     * @param {Object} data - 需要的传参，选传，默认值为空对象
     * @param {Object} config - 其他配置项，选传，默认值为空对象
     * */
    get(paramsType, data = {}, config = {}) {
      let token = sessionStore.get('userInfo') ?
        sessionStore.get('userInfo').token :
        '12222';
      // console.log(data, baseURL)
      if (paramsType === 'params' || !paramsType) {
        // param参数类型
        url += paramsType ? '' : `?_t=${Date.now()}` // 加时间戳，防止ie取缓存
        data = paramsType ? Object.assign({}, data, {
          _t: Date.now()
        }) : data
        return axios.get(url, {
          params: data,
          headers: {
            token: token
          }
        });
      }
      if (paramsType === 'orderPath') {
        // 按顺序拼接到url上
        if (Object.keys(data).length) {
          for (let key in data) {
            url += `/${data[key]}`
          }
        }
        return commonGetPath(url, token);
      }
      if (paramsType === 'locationPath') {
        //  指定位置拼接到url上
        if (Object.keys(data).length) {
          for (let key in data) {
            let reg = new RegExp(key, 'g');
            url = url.replace(reg, data[key])
          }
        }
        // console.log(url)
        return commonGetPath(url, token);
      }
      if (paramsType === 'getBlob') {
        //  返回值为blob数据流
        if (Object.keys(data).length) {
          for (let key in data) {
            url += `/${data[key]}`
          }
        }
        url += `?_t=${Date.now()}` // 加时间戳，防止ie取缓存
        return axios.get(url, {
          responseType: 'blob',
          headers: {
            token: token
          }
        });
      }
    },
    /*
     * axios post 请求
     * @param {Object} data - 需要的传参，选传，默认值为空对象
     * @param {Object} config - 其他配置项，选传，默认值为空对象
     * */
    post(paramsType, data = {}, config = {}) {
      let token = sessionStore.get('userInfo') ?
        sessionStore.get('userInfo').token :
        '2222';
      console.log(paramsType)
      if (paramsType === 'body' || !paramsType) {
        return commonPostBody(url, data, token)
      }
      // 除了本身的body为json格式，部分参数以/形式拼接到url上
      if (paramsType === 'bodyPath') {
        if (Object.keys(config).length) {
          for (let key in config) {
            url += `/${config[key]}`
          }
        }
        return commonPostBody(url, data, token)
      }
      // 除了本身的body为json格式，部分参数以?a=xx&b=yy形式拼接到url上
      if (paramsType === 'bodyQuery') {
        if (Object.keys(config).length) {
          for (let key in config) {
            url += url.indexOf('?') < 0 ? `?${key}=${config[key]}` : `&${key}=${config[key]}`
          }
        }
        return commonPostBody(url, data, token)
      }
      // 只有formdata参数
      if (paramsType === 'formData') {
        return commonPostFormData(url, data, token);
      }
      // 除了formdata参数，部分参数以/形式拼接到url上
      if (paramsType === 'formDataAndPath') {
        if (Object.keys(config).length) {
          for (let key in config) {
            url += `/${config[key]}`
          }
        }
        return commonPostFormData(url, data, token);
      }
      // 除了formdata参数，部分参数以?a=xx&b=yy形式拼接到url上
      if (paramsType === 'formDataAndQuery') {
        if (Object.keys(config).length) {
          for (let key in config) {
            url += url.indexOf('?') < 0 ? `?${key}=${config[key]}` : `&${key}=${config[key]}`
          }
        }
        return commonPostFormData(url, data, token);
      }
    }
  };
};

export const api = key => {
  return createAxios(BASE_URL, apis[key]);
};

Vue.prototype.$api = api;