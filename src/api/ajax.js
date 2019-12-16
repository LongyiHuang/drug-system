/**
  * ajax请求函数模块
  */
import axios from 'axios'
import { showFullScreenLoading, tryHideFullScreenLoading } from '../common/loading' // loading
import { afterLogout, showMessage } from '../common/utils'
import qs from 'qs';
import router from '@/router';
const API_VERSION = '/v1'
const BASE_URL = `/vdms${API_VERSION}`;

// 创建axios实例
const ajax = axios.create({
  baseURL: BASE_URL,
  timeout: 10000 // 请求超时时间
});

const codeMessage = {
  666: '登录超时，请重新登录',
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '服务端开小差了，请稍后',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '登录已失效,请重新登录',
  404: '服务端开小差了，请稍后。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务端开小差了，请稍后',
  502: '服务端开小差了，请稍后',
  503: '服务端开小差了，请稍后',
  504: '服务端开小差了，请稍后'
};


// 请求拦截器
ajax.interceptors.request.use(config => {
  if (config.showLoading) {
    showFullScreenLoading()
  }
  config.headers['Content-Type'] = 'application/json;charset=utf-8'
  return config;
}, error => { // 请求错误处理
  return Promise.reject(error)
});


// 回复拦截器
ajax.interceptors.response.use(
  response => { // 成功请求到数据
    if (response.config.showLoading) {
      tryHideFullScreenLoading()
    }

    if (response.status === 200) {
      if (response.headers['content-type'].indexOf('application/json') > -1 && response.data.status === 1) {
        return response.data
      } else if (response.headers['content-type'].indexOf('application/x-zip-compressed') > -1) {
        downloadFile(response);
      } else {
        showMessage(response.data.message || '网络异常', 'error')
        return Promise.reject(response)
      }
    } else {
      showMessage('网络异常', 'error')
      return Promise.reject(response);
    }
  },
  error => { // 响应错误处理
    tryHideFullScreenLoading()
    const errorStatus = error.response.status;
    showMessage(codeMessage[errorStatus] ? codeMessage[errorStatus] : '发生未知错误', 'error')
    if (errorStatus === 403) {
	    afterLogout();
	    router.replace('/login')
    }
    return Promise.reject(error)
  }
);

/**
 * 下载文件
 * @param response
 */
const downloadFile = (response) => {
  const blob = response.data;
	const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = (e) => {
	  const a = document.createElement('a');
    a.style.display = 'none';
    a.download = 'fileName';
    a.href = e.target.result;
    a.setAttribute('download', 'generator.zip');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

export default {
  BASE_URL,
  /**
   * 请求方法
   * @param url
   * @param method 方法名
   * @param params 参数
   * @param config 配置
   * @returns {Promise<any>}
   */
  request (url, method = 'get', params = {}, config = {}) {
    let ajaxConfig = {
      method: method,
      url,
      ...config
    }
    if (method === 'get' || method === 'GET') {
      ajaxConfig = {
        ...ajaxConfig,
        params: params,
        paramsSerializer: function (params) {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        }
      }
    } else {
      ajaxConfig = {
        ...ajaxConfig,
        data: params
      }
    }
    return new Promise((resolve, reject) => {
      ajax(ajaxConfig).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}


