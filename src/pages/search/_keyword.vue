<template lang="pug">
.page.page-search
  .container
    .search-bar
      input.search-bar__value(
        type="text",
        placeholder="请输入关键词搜索",
        v-model="keyword",
        @keyup.enter="onSearch()"
      )
      button.search-bar__btn(
        :disabled="isSearch",
        @click="onSearch()"
      ) {{ loadText }}
    .search-status(
      v-show="statusList.length"
    )
      .search-status__item(
        v-for="status of statusList",
        v-html="status"
      )
    .action(
      v-if="songs.length"
    )
      .btn.btn-play(
        @click="playThisList()"
      ) 播放当前歌单
      .btn.btn-add(
        @click="add2Playlist('all')"
      ) 添加到播放列表
      .length(
        v-if="songs.length"
      ) {{ `（已显示 ${songs.length} 首）` }}
    .songs(
      v-if="songs.length"
    )
      .songs-item.songs-item--head
        .index 序号
        .label 标题
        .album 歌单
        .size 大小
      .songs-item(
        v-for="(song, index) of songs",
        :class="{ 'songs-item--active': $store.state.playID === song.path }"
      )
        .index {{ index + 1 }}
        .label(
          @click="shiwchPlayID(song)"
        ) {{ song.name }}
        .album {{ song.album }}
        .size {{ song.size }}
        .action
          .btn(
            @click="add2Playlist(song)"
          ) 添加
          //- .btn(
          //-   @click="download(song.url)"
          //- ) 下载
      .songs-item.songs-item--more(
        v-if="chunkList.length > 1"
        @click="showMore()"
      ) 加载更多
</template>

<script>
import _ from 'lodash'
export default {
  name: 'Search',
  head () {
    return {
      title: `搜索: ${this.keyword} - 陈一发儿`
    }
  },
  data () {
    return {
      keyword: this.$route.params.keyword,
      statusList: [],
      songs: [],
      audios: [],
      chunkList: [],
      isSearch: false,
      loadText: '搜索'
    }
  },
  methods: {
    /**
     * 搜索歌曲
     */
    async onSearch () {
      if (!this.keyword) {
        this.$msg('请输入关键词搜索')
        return
      }

      if (this.isSearch) return

      this.isSearch = true
      this.loadText = '搜索中'
      this.statusList = []

      let albumList = require('~/assets/json/albums.json') || []
      if (!_.size(albumList)) {
        if (window._czc) {
          window._czc.push(['_trackEvent', '搜索', this.keyword, '歌单为空'])
        }
        this.$msg('搜索失败，歌单为空')
        this.isSearch = false
        this.loadText = '搜索'
        return
      }
      let searchList = []
      for (const album of albumList) {
        const songList = require(`~/assets/json/songs-${album.name}.json`) || []
        const filterList = _.filter(songList.map(v => _.assign({
          album: album.name,
        }, v)), song => {
          return song.name.indexOf(this.keyword) > -1
        })
        // this.statusList.push(`歌单「${album.name}」，找到 ${filterList.length} 首`)
        searchList = [...searchList, ...filterList]
      }

      if (window._czc) {
        window._czc.push(['_trackEvent', '搜索', this.keyword, _.size(searchList)])
      }

      if (!_.size(searchList)) {
        this.statusList.push('<strong>暂无搜索结果，换个关键词试试</strong>')
        this.isSearch = false
        this.loadText = '搜索'
        return
      }
      this.statusList.push(`<strong>找到 ${_.size(searchList)} 首相关歌曲</strong>`)
      this.chunkList = _.chunk(searchList, 500)
      this.songs = this.chunkList.shift()
      this.audios = this.getAudioList(this.songs)

      const audioList = this.$storage.lsGet('__audioList')
      if (!_.size(audioList)) {
        this.$store.commit('initAudios', this.audios)
      }

      this.isSearch = false
      this.loadText = '搜索'
    },
    /**
     * 显示更多
     */
    showMore () {
      if (this.chunkList.length) {
        const songs = this.chunkList.shift()
        this.songs = [...this.songs, ...songs]
        this.audios = [...this.audios, ...this.getAudioList(songs)]
      }
    },
    /**
     * 获取播放列表
     */
    getAudioList (songs) {
      const audios = []
      const cover = require('~/static/icon_120.png')
      for (var s of songs) {
        audios.push(Object.assign({
          cover,
          artist: '陈一发儿',
          url: `${process.env.serverUrl}${s.path}`,
          lrc: '[00:00.00] 欢迎投递歌词到下面邮箱 [00:05.00] s2ng@qq.com',
        }, s))
      }
      return audios
    },
    /**
     * 切换歌曲
     */
    shiwchPlayID (song) {
      this.add2Playlist(song, false)
      this.$store.commit('setPlayID', song.path)
      this.$msg(`切换到单曲 < ${song.name}>`, 'ok')
    },
    /**
     * 播放当前歌曲
     */
    playThisList () {
      this.$store.commit('initAudios', this.audios)
      this.$msg(`切换到当前 ${this.songs.length} 首歌曲`, 'ok')
    },
    /**
     * 添加到播放列表
     */
    add2Playlist (song, showMsg = true) {
      if (song === 'all') {
        this.$store.commit('setAddAudios', this.audios)
        showMsg && this.$msg(`当前 ${this.songs.length} 首歌曲已添加到播放列表`, 'ok')
      } else {
        const audio = _.find(this.audios, { path: song.path })
        this.$store.commit('setAddAudios', [audio])
        showMsg && this.$msg(`单曲 < ${song.name} > 已添加到播放列表`, 'ok')
      }
    },
    /**
     * 下载歌曲
     */
    download (url) {
      this.$msg('抱歉，下载功能还未完成！')
    }
  },
}
</script>
<style lang="stylus">
.page-search
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
  .search-bar
    display flex
    align-items stretch
    padding 30px
    margin 50px auto 0
    color alpha(#fff, .8)
    background alpha(#000, .2)
    box-sizing border-box
    &__value
      flex 1
      font-size 16px
      height 36px
      line-height 36px
      padding 0 10px
      color #333
      border 1PX solid #be2222
      border-radius 3px 0 0 3px
    &__btn
      font-size 16px
      min-width 120px
      padding 0 24px
      color #fff
      background #be2222
      border 1PX solid #be2222
      border-radius 0 3px 3px 0
      cursor pointer
      transition background .2s, border-color .2s
      &:hover
        background #8b1818
        border-color #8b1818
  .search-status
    padding 15px 30px
    margin 20px auto 0
    color alpha(#fff, .8)
    box-sizing border-box
    &__item
      padding 5px 0
      text-align center
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
      .album
        flex 1
        text-align center
      .size
        flex .5
        padding 0 10px
        text-align center
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
      &--more
        justify-content center
        cursor pointer
</style>
