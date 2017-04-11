// pages/article_list/article_list.js
Page({
  data: {},
  toArticleDetail: function (event) {
    wx.navigateTo({
      url: '../article/article',
      success: function (res) {
        // success
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
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
  getMore: function () {
    wx.showLoading({
      title: '加载中...',
      icon:'loading'
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1500)
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