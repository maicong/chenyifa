// ========== 问卷状态控制 ==========

export const state = () => ({
  initAudios: [],
  addAudios: [],
  playID: null,
  downloadProgress: 0
})

export const actions = {}

export const mutations = {
  /**
   * 初始化歌曲
   */
  initAudios (state, audios) {
    state.initAudios = audios.slice()
  },
  /**
   * 增加歌曲
   */
  setAddAudios (state, audios) {
    state.addAudios = audios.slice()
  },
  /**
   * 设置播放歌曲ID
   */
  setPlayID (state, playID) {
    state.playID = playID
  },
  /**
   * 下载进度
   */
  setDownloadProgress (state, process) {
    state.downloadProgress = process
  }
}
