<template lang="pug">
.wrapper
  c-message
  c-header
  .c-body(
    ref="body"
  )
    nuxt
    c-footer
  keep-alive
    c-player
</template>

<script>
// ========== 默认页面 ==========
import CMessage from '~/components/Message'
import CHeader from '~/components/Header'
import CFooter from '~/components/Footer'
import CPlayer from '~/components/Player'

export default {
  name: 'LayoutDefault',
  components: {
    CMessage,
    CHeader,
    CFooter,
    CPlayer
  },
  watch: {
    '$cyfe.isOffline' (status) {
      if (status) {
        this.$msg('网络链接失败，请检查网络后重试', 'error')
      } else {
        this.$msg('网络已恢复正常', 'ok')
      }
    },
    '$route.name' () {
      if (this.$refs.body) {
        this.$refs.body.scrollTop = 0
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const bgImg = new Image()
      bgImg.src = require('~/assets/img/bg-ori.jpg')
      bgImg.onload = () => {
        document.body.style.backgroundImage = `url(${bgImg.src})`
      }
    })
  }
}
</script>
