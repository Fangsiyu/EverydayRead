// pages/article_list/article_list.js
Page({
  data: {
    list:[
      {
        id:'1',
        title: '证券经纪人的浪漫故事1',
        imgUrl: '../imgs/logo.png',
        content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
      },
      {
        id: '2',
        title: '证券经纪人的浪漫故事2',
        imgUrl: '../imgs/logo.png',
        content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
      },
      {
        id: '3',
        title: '证券经纪人的浪漫故事3',
        imgUrl: '../imgs/logo.png',
        content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
      },
      {
        id: '4',
        title: '证券经纪人的浪漫故事4',
        imgUrl: '../imgs/logo.png',
        content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
      },
      {
        id: '5',
        title: '证券经纪人的浪漫故事5',
        imgUrl: '../imgs/logo.png',
        content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
      },
      {
        id: '6',
        title: '证券经纪人的浪漫故事6',
        imgUrl: '../imgs/logo.png',
        content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
      },
      {
        id: '7',
        title: '证券经纪人的浪漫故事7',
        imgUrl: '../imgs/logo.png',
        content: '早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
      }
    ]
    
  },
  toArticleDetail: function (event) {
    wx.navigateTo({
      url: '../article_list/article_detail/article_detail?id' + event.currentTarget.id,
    })
  },
  onPullDownRefresh: function () {
    wx.enablePullDownRefresh();
  },
  onShareAppMessage: function () {
    return {
      title: '每日阅读One',
      path: '/pages/index/index',
      success: function (res) {
      }
    }
  },
  onPullDownRefresh: function () {
    setTimeout(function () {
      wx.hideLoading();
      wx.stopPullDownRefresh();
    }, 1500)
    setTimeout(function () {
      wx.showLoading({
        title: '加载成功',
        icon: 'success'
      })
    }, 800)
  },
  
  
  
  
  // getMore: function () {
  //   wx.showLoading({
  //     title: '加载中...',
  //     icon:'loading'
  //   })
  //   setTimeout(function () {
  //     wx.hideLoading()
  //   }, 1500)
  // },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // wx.showLoading({
    //   title: '加载中...',
    //   icon: 'loading'
    // })
  },
  onReady: function () {
    wx.hideLoading()
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})