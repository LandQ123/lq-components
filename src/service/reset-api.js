import Vue from 'vue';
import axios from 'axios';
import config from '@/config';
import apis from '@/service/api-urls';
import { sessionStore } from '@/utils';
const TIMEOUT = 10000; // 接口10秒超时
// console.log(config.envConfig)
const NODE_ENV = (process.env.NODE_ENV || 'development').trim();
const BASE_URL = NODE_ENV === 'development' ? config.envConfig.apiOrigin : '';

axios.defaults.timeout = TIMEOUT;
// 添加请求拦截
axios.interceptors.request.use(
    function(config) {
        // 请求之前处理
        return config;
    },
    function(error) {
        // 请求发生错误处理
        return Promise.reject(error);
    },
);
// 添加响应拦截
axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        return Promise.reject(error);
    },
);

let createAxios = (baseURL, url) => {
    function commonJoinPath(data, url) {
        if (Object.keys(data).length) {
            for (let key in data) {
                url += `/${data[key]}`;
            }
        }
        return url;
    }
    function commonJoinQuery(data, url) {
        for (let key in data) {
            url +=
                url.indexOf('?') < 0
                    ? `?${key}=${data[key]}`
                    : `&${key}=${data[key]}`;
        }
        return url;
    }
    return {
        /*
         * axios get 请求
         * @param {Object} data - 需要的传参，选传，默认值为空对象
         * @param {Object} config - 其他配置项，选传，默认值为空对象
         * */
        get(requestType, data = {}, config = {}) {
            let token = sessionStore.get('userInfo')
                ? sessionStore.get('userInfo').token
                : '12222';
            // console.log(data, baseURL)
            function commonGetPath(url, token) {
                url += `?_t=${Date.now()}`; // 加时间戳，防止ie取缓存
                return axios.get(url, {
                    headers: {
                        token: token,
                    },
                });
            }
            function commonGetBlob(url, token) {
                url += `?_t=${Date.now()}`; // 加时间戳，防止ie取缓存
                return axios({
                    method: 'get',
                    url: url,
                    responseType: 'blob',
                    headers: {
                        token: token,
                    },
                });
            }
            if (requestType === 'normal' || !requestType) {
                // param参数类型
                url += requestType ? '' : `?_t=${Date.now()}`; // 加时间戳，防止ie取缓存
                data = requestType
                    ? Object.assign({}, data, {
                          _t: Date.now(),
                      })
                    : data;
                return axios.get(url, {
                    params: data,
                    headers: {
                        token: token,
                    },
                });
            }
            if (requestType === 'orderPath') {
                // 按顺序拼接到url上
                url = commonJoinPath(data, url);
                return commonGetPath(url, token);
            }
            if (requestType === 'locationPath') {
                //  指定位置拼接到url上
                if (Object.keys(data).length) {
                    for (let key in data) {
                        let reg = new RegExp(key, 'g');
                        url = url.replace(reg, data[key]);
                    }
                }
                // console.log(url)
                return commonGetPath(url, token);
            }
            if (requestType === 'blob') {
                //  返回值为blob数据流
                return commonGetBlob(url, token);
            }
            if (requestType === 'pathBlob') {
                //  返回值为blob数据流
                url = commonJoinPath(data, url);
                return commonGetBlob(url, token);
            }
            if (requestType === 'queryBlob') {
                //  返回值为blob数据流
                url = commonJoinQuery(data, url);
                return commonGetBlob(url, token);
            }
        },
        /*
         * axios post 请求
         * @param {Object} data - 需要的传参，选传，默认值为空对象
         * @param {Object} config - 其他配置项，选传，默认值为空对象
         * */
        post(requestType, data = {}, config = {}) {
            let token = sessionStore.get('userInfo')
                ? sessionStore.get('userInfo').token
                : '2222';
            console.log(requestType);
            function commonPostBody(url, data, token) {
                return axios.post(url, data, {
                    headers: {
                        token: token,
                    },
                });
            }
            function commonPostFormData(url, formData, token) {
                return axios.post(url, formData, {
                    headers: {
                        token: token,
                        'content-type': 'application/x-www-form-urlencoded',
                    },
                });
            }
            function commonPostBlob(url, data, token) {
                return axios({
                    method: 'post',
                    url: url,
                    data: data,
                    responseType: 'blob',
                    headers: {
                        token: token,
                    },
                });
            }
            if (requestType === 'postNormal' || !requestType) {
                return commonPostBody(url, data, token);
            }
            // 除了本身的body为json格式，部分参数以/形式拼接到url上
            if (requestType === 'postPath') {
                url = commonJoinPath(config, url);
                return commonPostBody(url, data, token);
            }
            // 除了本身的body为json格式，部分参数以?a=xx&b=yy形式拼接到url上
            if (requestType === 'postQuery') {
                url = commonJoinQuery(config, url);
                return commonPostBody(url, data, token);
            }
            // 只有formdata参数
            if (requestType === 'formData') {
                return commonPostFormData(url, data, token);
            }
            // 除了formdata参数，部分参数以/形式拼接到url上
            if (requestType === 'postFormDataPath') {
                url = commonJoinPath(config, url);
                return commonPostFormData(url, data, token);
            }
            // 除了formdata参数，部分参数以?a=xx&b=yy形式拼接到url上
            if (requestType === 'postFormDataQuery') {
                url = commonJoinQuery(config, url);
                return commonPostFormData(url, data, token);
            }
            // 返回值为blob
            if (requestType === 'postBlob') {
                console.log(data);
                return commonPostBlob(url, data, token);
            }
            if (requestType === 'postBlobPath') {
                url = commonJoinPath(config, url);
                return commonPostBlob(url, data, token);
            }
            if (requestType === 'postBlobQuery') {
                url = commonJoinQuery(config, url);
                return commonPostBlob(url, data, token);
            }
        },
    };
};

export const api = (key) => {
    return createAxios(BASE_URL, apis[key]);
};

Vue.prototype.$api = api;
