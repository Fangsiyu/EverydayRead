// pages/article/article.js
Page({
  data: {},
  onShareAppMessage: function () {
    return {
      title: '每日阅读One',
      path: '/pages/index/index',
      success: function (res) {
      }
    }
  },
  toNextPage: function () {
    wx.showToast({
      title: '已经是最新的文章了',
      icon: 'success',
      duration: 1500,
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.showLoading({
      title: '加载中...',
      icon: 'loading'
    })
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