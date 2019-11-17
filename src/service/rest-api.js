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
      if (paramsType === 'params') {
        // param参数类型
        return axios.get(url, {
          params: data.params,
          headers: {
            token: token
          }
        });
      }
      if (paramsType === 'orderPath') {
        //  按顺序拼接
        let orderPath = data.orderPath;
        for (let key in orderPath) {
          url += `/${orderPath[key]}`
        }
        return axios.get(url, {
          headers: {
            token: token
          }
        });
      }
      if (paramsType === 'locationPath') {
        //  指定位置拼接
        let locationPath = data.locationPath;
        for (let key in locationPath) {
          let reg = new RegExp(key, 'g');
          url = url.replace(reg, locationPath[key])
        }
        // console.log(url)
        return axios.get(url, {
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
      if (paramsType === 'body') {
        return axios.post(
          url,
          data.body, {
            headers: {
              token: token
            }
          }
        );
      }
      // debugger
      if (paramsType === 'formData') {
        console.log(333)
        return axios.post(
          url,
          data.fromData, {
            headers: {
              token: token,
              "Content-Type": 'multipart/form-data'
            }
          }
        );
      }
    }
  };
};

export const api = key => {
  return createAxios(BASE_URL, apis[key]);
};

Vue.prototype.$api = api;