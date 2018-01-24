//index.js
var app = getApp();
Page({
  data: {
    message: '「让阅读成为一种习惯」',
    btnstart: '讀',
    userImg: '../imgs/user.png',
    userName: app.globalData,
    imgurl: '../imgs/logo.png'
  },
  onShareAppMessage: function () {
    // wx.showShareMenu();
    return {
      title: '每日阅读One',
      path: '/pages/index/index',
      success: function (res) {
      }
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.showLoading({
      title: '加载中...',
      icon: 'loading'
    });
  },
  onReady: function () {
    wx.hideLoading()
    // 页面渲染完成
  },
  toList: function (event) {
    wx.navigateTo({
      url: '../article_list/article_list'
    })
  },
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  },  
})