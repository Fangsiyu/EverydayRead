// pages/article/article_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '加载中...',
    author: '加载中...',
    createdTime:'加载中...',
    content: '加载中...加载中...加载中...加载中...加载中...加载中...加载中...加载中...加载中...加载中...加载中...加载中...'
  },
  //下一页
  toNextPage: function () {
    wx.showToast({
      title: '已经是最新的文章了',
      icon: 'success',
      duration: 1500,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    wx.showLoading({
      title: '加载中...',
      icon: 'loading'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '每日阅读One',
      path: '/pages/index/index',
      success: function (res) {
      }
    }
  }
})