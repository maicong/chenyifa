// ========== 中间件：判断用户信息 ==========
export default function ({ route }) {
  if (process.browser) {
    if (window._czc) {
      window._czc.push(['_trackPageview', route.fullPath, '/'])
    }
  }
}
