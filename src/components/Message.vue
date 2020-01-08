<template lang="pug">
.c-message(
  :class="{ 'c-message--active': msgList.length }"
)
  transition(
    appear,
    name="c-message--transition",
    v-for="(msg, index) of msgList",
    :key="index"
  )
    .c-message__list(
      :class="`c-message__list--${msg.type}`",
      :style="{ zIndex: index + 1 }"
    ) {{ msg.content }}
</template>

<script>
// ========== 消息列表组件 ==========
export default {
  name: 'CMessage',
  computed: {
    msgList () {
      return this.$store.state.message.list
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
.c-message
  position fixed
  z-index 999
  top 56px
  right 10px
  display flex
  align-items flex-end
  flex-direction column
  opacity 0
  transition opacity .2s
  &--active
    opacity 1
  &__list
    font-size 14px
    font-weight 700
    max-width 320PX
    padding 10px 15px
    margin-bottom 10px
    opacity 1
    color #666
    background #fff
    box-shadow 3px 0 10px 0 alpha(#000, .2)
    word-wrap break-word
    word-break break-all
    transform translateY(0)
    transition opacity .2s, transform .25s
    -webkit-overflow-scrolling touch
    &::-webkit-scrollbar
      height 0
    &--warning
      color #ff7510
    &--error
      color #be2222
    &--ok
      color #037b50
  &--transition
    &-enter,
    &-leave-active
      opacity 0
      transform translateY(-50%)
    &-enter-to
      opacity 1
      transform translateY(0)
</style>
