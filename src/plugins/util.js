// ========== 效用工具 ==========

import _ from 'lodash'
import { format } from 'date-fns'
import Vue from 'vue'

export default ({ app }, inject) => {
  const Util = {
    /**
     * 补零
     */
    addZero (number) {
      if (!_.isInteger(number)) {
        return number
      }
      return _.toNumber(number) < 10 ? `0${number}` : number
    },
    /**
    * 格式化时间
    */
    formatTime (timestamp, formatStr) {
      return format(timestamp, formatStr)
    },
    /**
     * px 转 rem
     */
    px2rem (px, unit = 12) {
      return `${(_.toNumber(px) / unit).toFixed(5)}rem`
    },
    /**
     * 转换为数字
     */
    toNumber (val) {
      return _.toNumber(val)
    },
    /**
     * 安全的 JSON
     */
    softJSON (str, type) {
      try {
        return JSON[type](str)
      } catch (e) {
        return str
      }
    }
  }

  // 注册 Vue filter
  _.forEach(_.keys(Util), k => Vue.filter(k, Util[k]))

  inject('util', new Vue({
    methods: Util
  }))
}
