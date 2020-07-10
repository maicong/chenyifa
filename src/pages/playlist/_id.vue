<template lang="pug">
.page.page-playlist
  .container
    .action
      .btn.btn-play(
        @click="playThisList()"
      ) 播放当前歌单
      .btn.btn-add(
        @click="add2Playlist('all')"
      ) 添加到播放列表
      .length(
        v-if="songs.length"
      ) {{ `（ 歌曲数: ${songs.length} ）` }}
    .songs
      .songs-item.songs-item--head
        .index 序号
        .label 标题
        .bitrate 比特率
        .duration 时长
      .songs-item(
        v-if="songs.length",
        v-for="(song, index) of songs",
        :class="{ 'songs-item--active': $store.state.playID === song.id }"
      )
        .index {{ index + 1 }}
        .label(
          @click="shiwchPlayID(song)"
        ) {{ getName(song.title) }}
        .bitrate {{ getBitrate(song.additional.song_audio.bitrate) }}kbps
        .duration {{ sec2minute(song.additional.song_audio.duration) }}
        .action
          .btn(
            @click="add2Playlist(song)"
          ) 添加
          //- .btn(
          //-   @click="download(song.id)"
          //- ) 下载
      .songs-item.songs-item--none(
        v-if="!songs.length"
      )
        .text {{ loadText }}
</template>

<script>
import _ from 'lodash'
export default {
  name: 'Playlist',
  head () {
    return {
      title: `歌单: ${this.id} - 陈一发儿`
    }
  },
  data () {
    return {
      id: this.$route.params.id,
      songs: [],
      audios: [],
      loadText: '加载中...'
    }
  },
  async asyncData ({ params, error }) {
    if (!params.id) {
      error({
        statusCode: 404,
        message: '啊咧！找不到这个歌单！'
      })
      return
    }
    return {
      id: params.id
    }
  },
  mounted () {
    this.getSongList()
    require('stickyfilljs').add(document.querySelector('.songs-item--head'))
  },
  methods: {
    getSongList () {
      const songs = require(`~/assets/json/songs-${this.id}.json`) || []
      if (!_.size(songs)) {
        this.loadText = '暂无歌曲信息'
        this.$msg('Emmmm，这个歌单好像是空的！')
        return
      }
      this.songs = songs
      this.getAudioList(songs)
    },
    /**
     * 获取播放列表
     */
    getAudioList (songs) {
      const audios = []
      const cover = require('~/static/icon_120.png')
      for (var s of songs) {
        audios.push({
          songid: s.id,
          name: s.title.replace(/([\s-]+)?陈一发儿/g, ''),
          artist: '陈一发儿',
          url: `${process.env.serverUrl}/AudioStation/stream.cgi?api=SYNO.AudioStation.Stream&method=stream&version=1&id=${s.id}&seek_position=0`,
          cover,
          lrc: '[00:00.00] 欢迎投递歌词到下面邮箱 [00:05.00] s2ng@qq.com',
          additional: s.additional
        })
      }
      const audioList = this.$storage.lsGet('__audioList')
      if (!_.size(audioList)) {
        this.$store.commit('initAudios', audios)
      }
      this.audios = audios
    },
    /**
     * 获取名称
     */
    getName (name) {
      return name.replace(/([\s-]+)?陈一发儿/g, '')
    },
    /**
     * 秒转分钟
     */
    sec2minute (t) {
      const hour = parseInt(t / 60 / 60 % 60)
      const min = parseInt(t / 60 % 60)
      const sec = parseInt(t % 60)
      let time = [hour, min, sec]
      if (!hour) {
        time = [min, sec]
      }
      return time.join(':').replace(/\b(\d)\b/g, '0$1')
    },
    /**
     * 获取比特率
     */
    getBitrate (bitrate) {
      return bitrate / 1000
    },
    /**
     * 切换歌曲
     */
    shiwchPlayID (song) {
      if (window._czc) {
        window._czc.push(['_trackEvent', '播放', this.id, song.title])
      }
      this.add2Playlist(song, false)
      this.$store.commit('setPlayID', song.id)
      this.$msg(`切换到单曲 < ${this.getName(song.title)} >`, 'ok')
    },
    /**
     * 播放当前歌曲
     */
    playThisList () {
      if (window._czc) {
        window._czc.push(['_trackEvent', '播放', this.id, '全部'])
      }
      this.$store.commit('initAudios', this.audios)
      this.$msg(`切换到歌单「 ${this.id} 」`, 'ok')
    },
    /**
     * 添加到播放列表
     */
    add2Playlist (song, showMsg = true) {
      if (song === 'all') {
        this.$store.commit('setAddAudios', this.audios)
        showMsg && this.$msg(`歌单「 ${this.id} 」已添加到播放列表`, 'ok')
      } else {
        const audio = _.find(this.audios, { songid: song.id })
        this.$store.commit('setAddAudios', [audio])
        showMsg && this.$msg(`单曲 < ${this.getName(song.title)} > 已添加到播放列表`, 'ok')
      }
    },
    /**
     * 下载歌曲
     */
    download (songid) {
      this.$msg('抱歉，下载功能还未完成！')
    }
  },
}
</script>
<style lang="stylus">
.page-playlist
  .container
    position relative
    &:after
      position absolute
      z-index -1
      content ""
      top 0
      left 0
      right 0
      bottom 0
      background alpha(#000, .5)
      filter blur(20px)
  .action
    display flex
    align-items center
    margin-top 20px
    @media (max-width: 640px)
      padding 0 10px
    .btn
      font-size 12px
      padding 6px 12px
      color #fff
      background #be2222
      border 1PX solid #be2222
      border-radius 3px
      cursor pointer
      transition background .2s, border-color .2s
      &:hover
        background #8b1818
        border-color #8b1818
      + .btn
        margin-left 10px
    .length
      flex 1
      color #fff
      text-align right
      text-shadow 1px 1px 3px alpha(#000, .8)
  .songs
    margin 20px auto 40px
    color alpha(#fff, .8)
    background alpha(#000, .3)
    &-item
      display flex
      align-items center
      position relative
      padding 10px
      border-top 1PX solid transparent
      border-bottom 1PX solid alpha(#fff, .3)
      transition color .2s, background .2s, border .2s, box-shadow .2s
      .index
        min-width 40px
        text-align center
      .label
        flex 5
        display flex
        align-items center
        justify-content space-between
        padding 0 20px
        cursor pointer
      .bitrate
        flex 1
        text-align center
      .duration
        flex .5
        text-align center
        padding 0 10px
      .action
        position absolute
        top 0
        left 0
        bottom 0
        padding 0 10px
        margin 0 auto
        opacity 0
        pointer-events none
        transition opacity .1s
        .btn
          font-size 12px
          font-weight normal
          padding 2px 8px
          transform scale(.9)
          + .btn
            margin-left 4px
      &:hover,
      &:active
        background alpha(#fff, .2)
        .action
          opacity 1
          pointer-events auto
      &--active
        font-weight 700
        color #fff
        background alpha(#fff, .3)
        border-top-color alpha(#fff, .5)
        border-bottom-color alpha(#fff, .5)
      &--head
        position sticky
        z-index 2
        top 0
        font-weight 700
        white-space nowrap
        background alpha(#000, .6)
        &:hover
          background alpha(#000, .6)
      &--none
        text-align center
        .text
          width 100%
</style>
