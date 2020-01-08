export default ({ app }) => {
  if (process.browser) {
    const clearTime = '2019-12-20 15:28:26'
    const lastClear = app.$cookie.get('__lastClear')
    if (!lastClear || lastClear !== clearTime) {
      app.$storage.lsClear()
      app.$storage.ssClear()
      app.$cookie.clear()
      app.$cookie.set('__lastClear', clearTime)
    }
  }
}
