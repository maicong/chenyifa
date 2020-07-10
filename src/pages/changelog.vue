<template lang="pug">
.page.page-changelog
  .container
    .main
      .title 更新日志
      .list
        .list-item(
          v-for="item of list"
        )
          kbd.time {{ item.time }}
          .name  {{ item.name }}
</template>
<script>
export default {
  name: 'Changelog',
  head () {
    return {
      title: '更新日志 - 陈一发儿'
    }
  },
  data () {
    return {
      list: [
        {
          time: '2020.07.10',
          name: 'v2.1 优化数据调用形式'
        },
        {
          time: '2019.12.02',
          name: 'v2.0 由 DS audio 提供完整歌单数据，新版试运行'
        },
        {
          time: '2019.11.30',
          name: 'v1.1 周末爆肝制作新版'
        },
        {
          time: '2019.02.20',
          name: 'v1.1 收录更多歌曲，发布第二版'
        },
        {
          time: '2019.02.01',
          name: 'v1.0 更换域名为 chenyifa.org'
        },
        {
          time: '2019.01.10',
          name: 'v1.0 共享给朋友，线上第一版发布'
        },
        {
          time: '2018.11.07',
          name: 'v0.1 为了方便听歌，调取网上歌单并本地化'
        }
      ]
    }
  }
}
</script>
<style lang="stylus">
.page-changelog
  .main
    padding 40px 20px
    box-sizing border-box
  .title
    font-size 18px
    text-align center
    color #000
    text-shadow 1px 1px 3px #fff
  .list
    position relative
    max-width 640px
    margin 30px auto 0
    color alpha(#fff, .8)
    &:after
      position absolute
      z-index -1
      content ""
      top 0
      left 0
      right 0
      bottom 0
      background alpha(#000, .5)
      filter blur(15px)
    &-item
      display flex
      align-items center
      padding 30px
      border-bottom 1PX solid alpha(#000, .5)
      .time
        font-weight 700
      .name
        margin-left 20px
</style>
