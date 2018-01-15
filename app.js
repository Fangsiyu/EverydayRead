//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: "你是谁？",
    articleId: "0",
    articleTitle: "",
    pageMore: "flase",
    list: [{
      id: '1',
      title: '证券经纪人的浪漫故事1',
      imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154552.gif',
      content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
    },
    {
      id: '2',
      title: '证券经纪人的浪漫故事2',
      imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154555.gif',
      content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
    },
    {
      id: '3',
      title: '证券经纪人的浪漫故事3',
      imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154553.gif',
      content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
    },
    {
      id: '4',
      title: '证券经纪人的浪漫故事4',
      imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154554.gif',
      content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
    },
    {
      id: '5',
      title: '证券经纪人的浪漫故事5',
      imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154556.gif',
      content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
    },
    {
      id: '6',
      title: '证券经纪人的浪漫故事6',
      imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154526.gif',
      content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
    },
    {
      id: '7',
      title: '证券经纪人的浪漫故事7',
      imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154558.gif',
      content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
    }
    ]
  }
})