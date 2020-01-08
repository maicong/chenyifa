// ========== API ==========

import _ from 'lodash'
import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
import { stringify } from 'qs'

export default ({ app, store, error, env }, inject) => {
  /**
   * 添加参数
   */
  function extendToken (params, token) {
    return token
      ? _.extend({}, params, {
        _t: _.now()
      })
      : params
  }

  /**
   * 判断 response 状态
   */
  function checkStatus (response) {
    if (!response) {
      return {
        error: '接口异常，请求失败',
        code: 500,
        data: ''
      }
    }

    console.groupCollapsed('[API]', response.config.method, response.config.url)
    console.dir(response.data, { depth: 1 })
    console.groupEnd()

    if (!_.includes([200, 304], response.status)) {
      return {
        error: response.statusText || '数据异常，解析失败',
        code: response.status || 400,
        data: ''
      }
    }
    return response.data
  }

  /**
   * 判断 data 状态
   */
  function checkCode (res) {
    if (res.success && res.data) {
      return res.data
    } else {
      if (res.error) {
        // 浏览器端
        if (process.browser) {
          app.$msg(JSON.stringify(res.error), 'error')
        } else {
          // 服务端
          error({
            statusCode: 500,
            message: JSON.stringify(res.error)
          })
        }
      }
    }
  }

  const http = axios.create({
    timeout: 30000,
    withCredentials: true,
    adapter: cacheAdapterEnhancer(axios.defaults.adapter),
    // onDownloadProgress (evt) {
    //   if (evt.total) {
    //     const progress = Math.round(evt.loaded / evt.total * 100)
    //     store.commit('setDownloadProgress', progress)
    //   }
    // }
  })

  /**
   * 接口注入：发起请求时
   */
  http.interceptors.request.use(
    config => config,
    error => {
      console.error('[API] [请求失败] ', error)
    }
  )

  /**
   * 接口注入：取得数据时
   */
  http.interceptors.response.use(
    config => config,
    error => {
      console.error('[API] [响应失败] ', error)
    }
  )

  inject('api', {
    /**
     * Get 请求
     *
     * @method get
     * @param  {String}       url             请求地址的 pathname
     * @param  {Object,Null}  [params=null]   GET 参数
     * @param  {Boolean}      [token=true]    是否需要添加 token 信息
     * @return {Promise}                      [Promise] -> [Any]
     */
    get (url, params = null, token = true) {
      return http({
        method: 'get',
        url: `${process.env.serverUrl}${url}`,
        params: extendToken(params, token)
      })
        .then(checkStatus)
        .then(checkCode)
    },
    /**
     * Post 请求
     *
     * @method post
     * @param  {String}       url              请求地址的 pathname
     * @param  {Object,Null}  [payload=null]   POST 参数
     * @param  {Boolean}      [token=true]     是否需要添加 token 信息
     * @return {Promise}                       Promise] -> [Any]
     */
    post (url, payload = null, token = true, params = {}) {
      url = `${process.env.serverUrl}${url}?`
      if (token) {
        url += stringify(extendToken(params, token))
      }
      return http({
        method: 'post',
        url: url,
        data: payload,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      })
        .then(checkStatus)
        .then(checkCode)
    },
    /**
     * 处理多个请求
     *
     * @method all
     * @param  {Array}        [requests=[]]   请求地址的 pathname
     * @return {Promise}                      [Promise] -> [Array]
     */
    all (requests = []) {
      return http.all(requests).then(http.spread((...res) => res))
    },
    /**
     * 默认
     */
    axios: http
  })
}
