//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    videoPath: null,
    poster: null
  },
  onShow: function(){
    if (app.globalData.videoItem){
      this.setData({
        videoPath: app.globalData.videoItem.videoPath,
        poster: app.globalData.videoItem.cover
      })
    }

    console.log('videoPath:', this.data.videoPath)
    console.log('poster:', this.data.poster)
  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
