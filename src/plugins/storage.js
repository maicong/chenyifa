// ========== 本地缓存 ==========

import Vue from 'vue'
import _ from 'lodash'

export default ({ app }, inject) => {
  const ls = window.localStorage
  const ss = window.sessionStorage

  // 反转字符串
  function reverse (str) {
    return str
      .split('')
      .reverse()
      .join('')
  }

  // 解析 JSON
  function parse (data) {
    return app.$util.softJSON(data, 'parse')
  }

  // 转换数据为 JSON
  function stringify (data) {
    return app.$util.softJSON(data, 'stringify')
  }

  // 解析 JSON，转码版
  function secureParse (data, secure = false) {
    if (secure) {
      return parse(reverse(data))
    }
    return parse(data)
  }

  // 转换数据为 JSON，编码版
  function secureStringify (data, secure = false) {
    if (secure) {
      return reverse(stringify(data))
    }
    return stringify(data)
  }

  inject(
    'storage',
    new Vue({
      methods: {
        // 获取 localStorage
        lsGet (key, secure = false) {
          let data = ls.getItem(key) || ''
          if (data) {
            data = secureParse(data, secure)
          }
          return data || null
        },
        // 添加 localStorage
        lsSet (key, val, secure = false) {
          return ls.setItem(key, secureStringify(val, secure))
        },
        // 删除 localStorage
        lsDel (key) {
          if (_.isArray(key)) {
            _.forEach(key, k => {
              key[k] = ls.removeItem(k)
            })
            return key
          } else {
            return ls.removeItem(key)
          }
        },
        // 清空 localStorage
        lsClear () {
          return ls.clear()
        },
        // 获取 sessionStorage
        ssGet (key, secure = false) {
          let data = ss.getItem(key) || ''
          if (data) {
            data = secureParse(data, secure)
          }
          return data || null
        },
        // 添加 sessionStorage
        ssSet (key, val, secure = false) {
          return ss.setItem(key, secureStringify(val, secure))
        },
        // 删除 sessionStorage
        ssDel (key) {
          if (_.isArray(key)) {
            _.forEach(key, k => {
              key[k] = ss.removeItem(k)
            })
            return key
          } else {
            return ss.removeItem(key)
          }
        },
        // 清空 sessionStorage
        ssClear () {
          return ss.clear()
        }
      }
    })
  )
}
