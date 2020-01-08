// ========== Cookie ==========

import Vue from 'vue'
import _ from 'lodash'
import cookieParse from 'cookie-parse'
import jsCookie from 'js-cookie'

export default ({ req, app }, inject) => {
  inject(
    'cookie',
    new Vue({
      methods: {
        get (key) {
          let cookie
          if (process.client) {
            cookie = jsCookie.get(key)
          } else {
            const headersCookie = _.get(req.headers, 'cookie')
            if (headersCookie) {
              cookie = cookieParse.parse(headersCookie)
              cookie = key ? _.get(cookie, key) : cookie
            }
          }
          return app.$util.softJSON(cookie, 'parse')
        },
        // 添加 cookie
        set (key, value, options) {
          if (process.client) {
            return jsCookie.set(key, app.$util.softJSON(value, 'stringify'), options)
          } else {
            throw new TypeError('Not supported cookie.set from the server-side')
          }
        },
        // 删除 cookie
        del (...args) {
          if (process.client) {
            return jsCookie.remove(...args)
          } else {
            throw new TypeError('Not supported cookie.del from the server-side')
          }
        },
        // 清空 cookie
        clear () {
          _.forEach(_.keys(this.get()), k => {
            this.del(k)
          })
        }
      }
    })
  )
}
