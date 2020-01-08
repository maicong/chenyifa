// ========== 消息 ==========

export default ({ store }, inject) => {
  inject('msg', (content, type = 'warning') => {
    store.dispatch('message/setMessage', {
      type,
      content
    })
  })
}
