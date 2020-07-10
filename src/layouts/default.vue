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
  beforeMount () {
    this.$msg('正在更新验证信息，期间歌曲可能无法播放...')
    const iframe = document.createElement('iframe')
    iframe.src = `${process.env.serverUrl}/auth.cgi?api=SYNO.API.Auth&version=3&method=login&account=cyfwlp&passwd=5267373&session=AudioStation&format=cookie`
    iframe.style.display = 'none'
    iframe.onload = () => {
      this.$msg('验证信息已更新，尽情听歌吧~~', 'ok')
    }
    iframe.onerror = () => {
      this.$msg('验证信息更新失败，歌曲无法播放，请刷新重试！', 'error')
    }
    document.body.appendChild(iframe)
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
