<template lang="pug">
.page.page-error
  .container
    .content
      p {{ transError(error.message) }}
</template>

<script>
// ========== 错误页面 ==========
import _ from 'lodash'

export default {
  props: {
    error: {
      type: Object
    }
  },
  head () {
    return {
      title: '您访问的内容不存在！'
    }
  },
  methods: {
    /**
     * 转换文本
     */
    transError (err = '未定义的错误') {
      const transList = {
        'This page could not be found': '抱歉，您要访问的内容不存在',
        'Unknown middleware': '未知的中间件'
      }
      _.forEach(transList, (val, key) => {
        err = err.replace(key, val)
      })
      return err.replace(
        /Loading chunk (\d+) failed/,
        '模块加载失败，请稍后刷新重试'
      )
    }
  }
}
</script>

<style lang="stylus">
.page-error
  .container
    padding 20px
    box-sizing border-box
  .content
    font-size 20px
    max-width 640px
    padding 40px
    margin 30px auto 0
    text-align center
    color #fff
    background alpha(#000, .5)
    box-sizing border-box
</style>
