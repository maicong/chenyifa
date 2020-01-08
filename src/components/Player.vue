<template lang="pug">
.c-player
  .aplayer(
    ref="aplayer",
    v-show="ap"
  )
</template>

<script>
// ========== 加载页脚组件 ==========
import _ from 'lodash'
import APlayer from 'aplayer'
import Mousetrap from 'mousetrap'
export default {
  name: 'CPlayer',
  data () {
    return {
      ap: null,
      waitTime: 0,
      waitTimer: null,
      isBindKeyboard: false,
      isPhone: false
    }
  },
  watch: {
    '$store.state.initAudios' (audios, oldAudios) {
      if (!_.isEqual(audios, oldAudios)) {
        this.initPlayer(audios.slice())
      }
    },
    '$store.state.addAudios' (audios) {
      const list = this.ap.list.audios
      const newList = _.uniqBy([...list, ...audios], 'songid')
      const diff = _.differenceBy(newList, list, 'songid')
      this.ap.list.add(diff)
      this.listenRemove()
    },
    '$store.state.playID' (songid, oldSongid) {
      if (!_.includes([oldSongid, this.current.songid], songid)) {
        this.switchSongid(songid)
      }
    }
  },
  mounted () {
    const audioList = this.$storage.lsGet('__audioList')
    this.isPhone = /(Phone|iPod|iPad|Android|Mobile)/.test(navigator.userAgent)
    this.initPlayer(audioList)
  },
  computed: {
    current () {
      return this.ap.list.audios[this.ap.list.index]
    }
  },
  methods: {
    /**
     * 初始化播放器
     */
    initPlayer (audios = []) {
      const apEl = this.$refs.aplayer
      const lastSongid = this.$storage.lsGet('__lastSongid') || null

      if (!_.size(audios)) {
        this.$storage.lsDel('__lastSongid')
        return
      }

      this.ap = new APlayer({
        container: apEl,
        audio: audios,
        mini: false,
        autoplay: !this.isPhone,
        lrcType: this.isPhone ? 0.7 : 1,
        volume: 0.85,
        loop: 'all',
        order: 'list',
        preload: 'auto',
        listMaxHeight: '265px',
        storageName: '__playerSetting'
      })

      this.switchSongid(lastSongid)
      this.listenRemove()
      apEl.classList.remove('aplayer-arrow')
      document.querySelector('.aplayer-list').classList.add('aplayer-list-hide')

      this.ap.on('waiting', () => {
        if (this.waitTimer) {
          this.clearTimer()
        }
        this.waitTimer = setInterval(() => {
          if (this.waitTime > 3 && !_.size(this.$store.state.message.list)) {
            this.$msg('歌曲加载过慢，请让她缓存一会儿')
          }
          this.waitTime++
        }, 1000)
      })

      this.ap.on('canplay', () => {
        this.clearTimer()
        if (!this.ap.pause && !this.isPhone) {
          this.ap.play()
        }
      })

      this.ap.on('play', () => {
        this.$store.commit('setPlayID', this.current.songid)
        this.$storage.lsSet('__lastSongid', this.current.songid)
      })

      this.ap.on('ended', () => {
        this.ap.skipForward()
      })

      this.ap.on('timeupdate', () => {
        if (this.current) {
          document.title = `正在播放: < ${this.current.name} - 陈一发儿 > - 歌单「 ${this.current.additional.song_tag.album} 」 `
        }
      })

      this.ap.on('listswitch', ({ index }) => {
        this.clearTimer()
        const lrcEl = document.querySelector('.aplayer-lrc-contents')
        lrcEl.style = `transform:translateY(0)`
        if (this.current) {
          this.$storage.lsSet('__lastSongid', this.current.songid)
        }
      })

      this.ap.on('noticeshow', err => {
        this.clearTimer()
        this.$msg(err.text, 'error')
      })

      this.bindKeyboard()
    },
    /**
     * 清除定时
     */
    clearTimer () {
      this.waitTime = 0
      clearInterval(this.waitTimer)
    },
    /**
     * 切换歌曲
     */
    switchSongid (songid) {
      if (songid) {
        if (!this.ap) return
        const index = _.findIndex(this.ap.list.audios, {
          songid: songid
        })
        if (index > -1) {
          this.ap.seek(0)
          this.ap.list.switch(index)
        }
      }
    },
    /**
     * 监听歌曲移除
     */
    listenRemove () {
      const apListIndex = document.querySelectorAll('.aplayer-list-index')
      _.forEach(Array.from(apListIndex), el => {
        el.onclick = e => {
          const index = _.toNumber(el.textContent)
          this.ap.list.remove(index - 1)
          this.$storage.lsSet('__audioList', this.ap.list.audios)
          e.stopPropagation()
        }
      })
      this.$storage.lsSet('__audioList', this.ap.list.audios)
    },
    /**
     * 绑定快捷键
     */
    bindKeyboard () {
      if (!this.ap || this.isBindKeyboard) return

      const mousetrap = new Mousetrap()

      mousetrap.bind('enter', () => {
        this.ap.toggle()
      })
      mousetrap.bind(['up', 'w'], () => {
        this.ap.skipBack()
      })
      mousetrap.bind(['down', 's'], () => {
        this.ap.skipForward()
      })
      mousetrap.bind(['left', 'a'], () => {
        if (this.ap.audio.currentTime === 0) return
        this.ap.seek(this.ap.audio.currentTime - 1)
      })
      mousetrap.bind(['right', 'd'], () => {
        if (this.ap.audio.currentTime === this.ap.audio.duration) return
        this.ap.seek(this.ap.audio.currentTime + 1)
      })

      this.isBindKeyboard = true
    }
  }
}
</script>

<style lang="stylus">
.c-player
  .aplayer
    margin 0
    overflow unset
  .aplayer-body
    padding-right 30%
    background alpha(#fff, .9)
    border-top 1px solid #d09e77
    box-shadow 0 -3px 5px 0 alpha(#000, .2)
  .aplayer-pic
    width 66px !important
    height 66px !important
  .aplayer-music
    display flex
    align-items center
    width 50%
    line-height 20px
  .aplayer-id
    font-size 12px
    color #333
  .aplayer-title
    display block
    font-size 12px !important
    font-weight bold
    margin-left 6px
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
  .aplayer-author
    flex 1
    display block
    font-weight bold
    margin 0 5px 0 3px
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
  .aplayer-link
    font-size 12px
    font-weight normal
    min-width 30px
    color #333
    text-align right
    cursor pointer
  .aplayer-link:hover,
  .aplayer-link:active
    color #bc7943
  .aplayer-list-cur
    background-color #da8e4b !important
  .aplayer-list-index
    display inline-block
    width 12px
    text-align right
  .aplayer-list
    position fixed
    z-index 222
    bottom 0
    left 70%
    right 0
    display block
    background alpha(#fff, .9)
    border-left 1px solid #d09e77
    box-shadow inset 3px 3px 5px 0 #e0e0e0
    &.aplayer-list-hide
      max-height 66px !important
    ol li:hover
      background alpha(#000, .2)
      .aplayer-list-index
        position relative
        &:after
          position absolute
          content "移除"
          top 0
          left -100%
          font-size 12px
          padding 0 6px
          color #fff
          background #be2222
          border-radius 3px
          white-space nowrap
          cursor pointer
          transform scale(.8)
  .aplayer-info
    display flex
    flex-direction column
    justify-content center
    height 66px !important
    padding 0 15px !important
    margin-left 0 !important
    border-bottom 0 !important
  .aplayer-notice
    display none
  .aplayer-lrc
    display none !important
    // position absolute !important
    // right 0
    // top 0
    // bottom 0
    // width 30%
    // height 100% !important
    // margin auto !important
    // border-left 1px solid #d09e77
    // box-shadow inset 3px 3px 5px 0 #e0e0e0
    // p
    //   color #b3682a !important
  .aplayer-lrc-contents
    position absolute
    left 0
    top 0
    bottom 0
    margin auto
    height 12px
    p
      padding 0 10px !important
  .aplayer-lrc-current
    font-weight bold
  .aplayer-lrc:before,
  .aplayer-lrc:after
    height 10px !important
  .aplayer-played
    background #ffb583 !important
  .aplayer-thumb
    background #be2222 !important
    transform scale(0.5) !important
  .aplayer-bar
    background #e6e6e6
    &-wrap:hover
      .aplayer-thumb
        transform scale(1) !important
  .aplayer-volume-bar
    background #ffb583 !important
  .aplayer-volume
    background #be2222 !important
  .aplayer-icon
    &-back,
    &-play,
    &-forward
      display inline-block
      position absolute
      top -30px
      width 20px
      height 20px
    &-back
      right 50px
    &-play
      right 25px
    &-forward
      right 0
  .aplayer-volume-bar
    right 10px
    width 10px
    .aplayer-volume
      width 10px
  @media (max-width: 640px)
    .aplayer-body
      padding-right 35%
    .aplayer-lrc
      width 35%
    .aplayer-list
      left 65%
    .aplayer-list-author
      display none
  @media (max-width: 480px)
    .aplayer-info
      padding 0 10px !important
</style>
