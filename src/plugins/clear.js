export default ({ app }) => {
  if (process.browser) {
    const clearTime = '2020-07-10 10:55:16'
    const lastClear = app.$cookie.get('__lastClear')
    if (!lastClear || lastClear !== clearTime) {
      app.$storage.lsClear()
      app.$storage.ssClear()
      app.$cookie.clear()
      app.$cookie.set('__lastClear', clearTime)
    }
  }
}
