<template lang="pug">
.c-footer
  .slogan 我陈一发儿最牛逼
  .copyright
    | &copy; 2019-2020 CHENYIFA.ORG
    a.link(
      @click="showHelp = true"
    ) 获取帮助
    nuxt-link.link(
      to="/changelog"
    ) 更新日志
    nuxt-link.link(
      to="/terms"
    ) 免责声明
  .help(
    :class="{ 'help--show': showHelp }"
  )
    .help-content
      .help-content-close(
        @click="showHelp = false"
      ) +
      p
        kbd H
        em 帮助
      //- p
      //-   kbd F
      //-   em 下载
      p
        kbd Enter
        em 播放、暂停
      p
        kbd W
        span 或
        kbd ↑
        em 上一首
      p
        kbd S
        span 或
        kbd ↓
        em 下一首
      p
        kbd A
        span 或
        kbd ←
        em 后退
      p
        kbd D
        span 或
        kbd →
        em 快进
</template>

<script>
// ========== 加载页脚组件 ==========
import Mousetrap from 'mousetrap'
export default {
  name: 'CFooter',
  data () {
    return {
      showHelp: false
    }
  },
  mounted () {
    const mousetrap = new Mousetrap()
    mousetrap.bind(['h'], () => {
      this.showHelp = !this.showHelp
    })
  },
  methods: {}
}
</script>

<style lang="stylus">
.c-footer
  padding 0 20px
  margin 20px 0
  .slogan
    font-size 16px
    text-align center
    color alpha(#000, .5)
    text-shadow 1px 1px 3px alpha(#fff, .2)
  .copyright
    font-size 12px
    text-align center
    color alpha(#fff, .75)
    margin-top 10px
    a
      cursor pointer
    .link
      margin-left 5px
      text-decoration underline
  .help
    position fixed
    z-index 998
    display flex
    align-items center
    justify-content center
    top 0
    bottom 0
    left 0
    right 0
    margin auto
    background alpha(#000, .4)
    opacity 0
    transform scale(0)
    transition opacity .2s
    &-content
      position relative
      font-size 14px
      width 300px
      padding 10px 15px
      background #fff
      border-radius 3px
      box-shadow 2px 2px 10px 0 alpha(#000, .5)
      transform scale(0)
      transition transform .2s
      p
        display flex
        align-items center
        margin 5px 0
        white-space pre-wrap
        span
          margin 0 5px
        em
          flex 1
          font-style normal
          font-weight 700
          text-align right
        kbd
          display inline-block
          font-size .85em
          font-weight 700
          line-height 1
          padding 2px 4px
          white-space nowrap
          color #333
          background-color #eee
          border 1px solid #b4b4b4
          border-radius 3px
          box-shadow 0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset
      &-close
        position absolute
        top -12px
        right -12px
        width 20px
        height 20px
        line-height 16px
        font-size 20px
        text-align center
        cursor pointer
        color #666
        background #fff
        box-shadow 2px 2px 10px 0 alpha(#000, .5)
        transform rotateZ(45deg) scale(1)
        transition transform .2s
        &:hover
          color #bc7943
          transform rotateZ(45deg) scale(1.2)
    &--show
      opacity 1
      transform scale(1)
      .help-content
        transform scale(1)
</style>
