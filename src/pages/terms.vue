<template lang="pug">
.page.page-terms
  .container
    .main
      .title 免责声明
      .terms
        .terms-item
          .name 关于歌手
          .content 歌手是对于歌曲和其他声乐作品演唱者的称呼，也作为职业名使用。在中国大陆则被定义为演员类的歌唱演员。那些符合关注度和知名度的歌手又被称作“歌星”。达到一定艺术造诣和成就者则尊称为“歌唱家（歌唱艺术家）”或乐队的“声乐家（声乐艺术家）”。根据唱法，歌手又分为美声、民族、流行等四大演唱派系。
        .terms-item
          .name 关于粉丝
          .content 粉丝是指对于各类组织、人物、产品、艺术品、信念或流行趋势抱有极度、无法抑制的喜爱与支持的人。独特事物的爱好者一般会设立自己的爱好者区域。他们会开办爱好者俱乐部、举办粉丝会、创办爱好者杂志、写粉丝信或参与类似的活动。
        .terms-item
          .name 关于本站
          .content 本站为粉丝自发搭建的针对某歌手的个人性质听歌网站，一切音频资源均来自互联网，视访问压力不定期关停，并不保证 24 小时在线。本站承诺不收费，不提供音频售卖服务，如有疑问请联系 s2ng@qq.com，但最终解释权归本站所有。
        .terms-item
          .name 关于下载
          .content
            | 如需下载，请前往 &nbsp;
            a(
              href="https://67373.loadream.com/",
              target="_blank"
            ) 67373.loadream.com
        .terms-item
          .name 特别鸣谢
          .content
            a(
              href="https://www.loadream.com/",
              target="_blank"
            ) 童话镇
            a(
              href="https://www.loadream.com/loadream-1088-1-1.html",
              target="_blank"
            ) DS audio
            a(
              href="https://huati.weibo.com/1362650",
              target="_blank"
            ) #陈一发儿超话#
            a(
              href="https://www.weibo.com/u/1693163742",
              target="_blank"
            ) @萝菽菽
            a(
              href="https://www.youtube.com/channel/UC5ibEE0btMSv_D9A6ZllY4A",
              target="_blank"
            ) 最愛陈一发儿
</template>
<script>
export default {
  name: 'Terms',
  head () {
    return {
      title: '免责声明 - 陈一发儿'
    }
  }
}
</script>
<style lang="stylus">
.page-terms
  .main
    padding 40px 20px
    box-sizing border-box
  .title
    font-size 18px
    text-align center
    color #000
    text-shadow 1px 1px 3px #fff
  .terms
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
      margin 0
      border-bottom 1PX solid alpha(#000, .5)
      .name
        font-weight 700
        color #fff
      .content
        flex 1
        margin-left 20px
        a
          text-decoration underline
          &:hover
            color #fff
          + a
            margin-left 10px
</style>
