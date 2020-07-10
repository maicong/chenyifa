<template lang="pug">
.page.page-index
  .container.main
    .title 《 小橘猫爱唱歌 》
    .album(
      v-if="albumList && albumList.length"
    )
      .album-item(
        v-for="album of albumList",
        @click="goPlayList(album.name)"
      )
        .name {{ album.name }}
    .album.album--none(
      v-if="!albumList || !albumList.length"
    )
      .text 暂无歌单哦
</template>

<script>
import albumList from '~/assets/json/albums.json'
export default {
  name: 'Index',
  head () {
    return {
      title: '陈一发儿'
    }
  },
  data () {
    return {
      albumList: albumList || []
    }
  },
  methods: {
    goPlayList (name) {
      this.$router.push({
        name: 'playlist-id',
        params: {
          id: name
        }
      })
    }
  },
}
</script>
<style lang="stylus">
.page-index
  .main
    padding 40px 0
    box-sizing border-box
  .title
    position relative
    font-size 16px
    font-weight 700
    text-align center
    color #000
    text-shadow 1px 1px 3px #fff
    &:after
      position absolute
      content ""
      bottom -10px
      left 0
      right 0
      margin auto
      width 20%
      border-bottom 3px solid alpha(#fff, .7)
  .album
    display flex
    align-items center
    justify-content center
    flex-flow wrap row
    margin-top 40px
    position relative
    &:after
      position absolute
      z-index -1
      content ""
      top 0
      left 0
      right 0
      bottom 0
      background alpha(#000, .2)
      filter blur(15px)
    &-item
      flex 1 1 25%
      padding 50px 20px
      margin 20px
      text-align center
      color alpha(#fff, .7)
      background alpha(#000, .5)
      border-radius 5px
      border 1PX solid alpha(#000, .2)
      box-shadow 3px 0 20px 0 alpha(#000, .5)
      transition color .15s, background .15s, border .15s
      cursor pointer
      .name
        font-size 18px
        font-weight 700
      &:hover
        color #fff
        background alpha(#000, .6)
        border-color alpha(#000, .6)
    &--none
      font-size 14px
      padding 20px
      margin-top 40px
      text-align center
      color alpha(#fff, .7)
      .text
        font-size 18px
        font-weight 700
        width 30%
        padding 50px
        border-radius 5px
        background alpha(#000, .5)
        border 1PX solid alpha(#000, .2)
        box-shadow 2px 0 10px 0 alpha(#000, .25)
</style>
