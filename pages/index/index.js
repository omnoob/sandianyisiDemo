//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    videoList: [],
    // 服务器获取的数据结构
    // videoList:[
    //   {
    //     videoPath: 'xxx',
    //     cover: 'xxx',
    //     radar: 'xxx',
    //     messageList:[
    //       {
    //         user:"xxx",
    //         msg:"XXXX"
    //       }
    //     ]
    //   }
    // ]
    focus: false,
    index: null,
    inputValue: null,
    lenghOrTouch: true,
    msgIndex: 0
  },
  // 加载模拟数据
  onLoad: function() {
    // 假设 切换到 我的 页面 就发送请求获得相关数据
    this.setData({
      videoList: [{
          videoPath: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          cover: 'https://vdposter.bdstatic.com/1230b37e53009493afbd43d895b29c40.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100',
          radar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1753427022,1284388417&fm=26&gp=0.jpg',
          messageList: [{
            user: "老师0",
            msg: "小明很用心0"
          }]
        },
        {
          videoPath: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          cover: 'https://vdposter.bdstatic.com/1230b37e53009493afbd43d895b29c40.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100',
          radar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1753427022,1284388417&fm=26&gp=0.jpg',
          messageList: [{
            user: "老师1",
            msg: "小明很用心1"
          }]
        },
        {
          videoPath: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          cover: 'https://vdposter.bdstatic.com/1230b37e53009493afbd43d895b29c40.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100',
          radar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1753427022,1284388417&fm=26&gp=0.jpg',
          messageList: [{
            user: "老师2",
            msg: "小明很用心2"
          }]
        },
      ]
    })
    console.log(this.data.videoList)
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  // 将点击的视频地址存入globalData，跳转到 作品 页面 播放。
  palyVideo: function(e) {
    console.log(e.currentTarget.id)
    let index = e.currentTarget.id
    app.globalData.videoItem = this.data.videoList[index]
    console.log(app.globalData.videoItem)
    wx.switchTab({
      url: '/pages/logs/logs'
    })
  },
  // 聚焦输入框，记录点击的index
  inputMsg: function(e) {
    this.setData({
      focus: true,
      index: e.currentTarget.id

    })
    console.log('点击的index:',e.currentTarget.id)
    // this.data.index = e.currentTarget.id
  },
  // 完成输入，插入输入内容
  confirm: function(e) {
    console.log(e.detail.value)
    let msg = e.detail.value
    let user = "某用户"
    let newList = this.data.videoList
    // console.log('newList:', newList)
    // console.log('newList[this.data.index]:', newList[this.data.index])
    // console.log('newList[this.data.index].messageList:', newList[this.data.index].messageList)
    newList[this.data.index].messageList.push({
      user: user,
      msg: msg
    })
    let flag =null
    console.log(newList[this.data.index].messageList.length)
    if (newList[this.data.index].messageList.length>2){
      flag = false
    }else{
      flag = true
    }
    this.setData({
      videoList: newList,
      inputValue: null,
      lenghOrTouch: flag
    })
  },
  changeMsgBoard: function(e){
    console.log(e.currentTarget.id)
    // this.data.msgIndex = e.currentTarget.id
    this.setData({
      lenghOrTouch: !this.data.lenghOrTouch,
      msgIndex: e.currentTarget.id
    })
  }
})