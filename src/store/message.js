// ========== 消息队列 ==========

import _ from 'lodash'

export const state = () => ({
  list: [],
  last: null
})

export const actions = {
  /**
   * 增加消息列表
   */
  setMessage ({ commit }, message) {
    commit('setMessage', message)
    setTimeout(() => {
      commit('removeMessage')
    }, 5000)
  }
}

export const mutations = {
  /**
   * 设置消息
   */
  setMessage (state, message) {
    let msg = {
      type: 'warning',
      content: ''
    }
    if (_.isString(message)) {
      msg.content = message
    } else {
      msg = _.assign({}, msg, message)
    }
    state.last = msg
    state.list.push(msg)
  },
  /**
   * 移除最早的消息
   */
  removeMessage (state) {
    state.list.shift()
  }
}
