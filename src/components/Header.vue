<template lang="pug">
.c-header
  .container
    .c-header__back(
      v-if="$route.name !== 'index'",
      @click="$router.back()"
    ) &laquo; 返回
    .c-header__nav
      nuxt-link.link(
        to="/"
      ) {{ getTitle() }}
    nuxt-link.c-header__search(
      v-if="$route.name !== 'search-keyword'",
      to="/search"
    ) 搜索 &raquo;
</template>
<script>
export default {
  data () {
    return {
      head: this.$route.params.title || '陈一发儿'
    }
  },
  methods: {
    getTitle () {
      switch (this.$route.name) {
        case 'playlist-id':
          const id = this.$route.params.id
          return id ? `歌单: ${id}` : '歌单不存在'
        case 'search-keyword':
          const keyword = this.$route.params.keyword
          return keyword ? `搜索: ${keyword}` : '搜索'
        default:
          return '陈一发儿'
      }
    }
  }
}
</script>
<style lang="stylus">
.c-header
  height 46px
  line-height 46px
  background #be2222
  color #fff
  .container
    position relative
  &__back,
  &__search
    position absolute
    width 60px
    top 0
    bottom 0
    padding 0 10px
    cursor pointer
    transition transform .2s
  &__back
    left 0
    &:hover
      transform translateX(5px)
  &__search
    right 0
    text-align right
    &:hover
      transform translateX(-5px)
  &__nav
    padding 0 60px
    font-size 18px
    text-align center
    .link
      position relative
      display inline-block
      min-width 6em
      padding 0 10px
      &:before
        position absolute
        z-index 2
        top 0
        left 0
        width 100%
        content "回到首页"
        font-size 16px
        opacity 0
        background #be2222
        transition opacity .2s
      &:hover,
      &:active
        &:before
          opacity 1
      &.link-exact-active
        &:before
          display none
</style>
