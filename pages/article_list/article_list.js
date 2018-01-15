// pages/article_list/article_list.js
var app = getApp();
Page({
  data: {
    list: app.globalData.list
  },
  //点击跳转详情
  toArticleDetail: function (event) {
    console.log(event.currentTarget.dataset);
    console.log(app.globalData.articleTitle); 
    app.globalData.articleId = event.currentTarget.dataset.id;
    app.globalData.articleTitle = event.currentTarget.dataset.title;
    console.log(app.globalData.articleTitle);
    wx.navigateTo({
      url: '../article_list/article_detail/article_detail?id' + event.currentTarget.dataset.id,
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
    wx.showLoading({
        title: '加载中...',
    },1000)
    getList(this);
    // setTimeout(function () {      
    //   wx.hideLoading();
    //   wx.stopPullDownRefresh();
    // }, 1500)
    // setTimeout(function () {
    //   wx.showLoading({
    //     title: '加载成功',
    //     icon: 'success'
    //   })
    // }, 1500)
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
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  //底部加载新文章
  onReachBottom:function(){
    if(pageNum < 6){
      getList(this);
    } else {
      app.globalData.pageMore = true;
      console.log(app.globalData.pageMore);
      wx.showToast({
        title: '没有更多文章了',
      })
    }
  }
})
var pageNum = 1;
var getList = function(that){
    for (var i = 0; i < app.globalData.list.length; i++) {
      that.data.list.push(app.globalData.list[i]);
    };
    that.setData({
      list: that.data.list
    });
    setTimeout(function () {
      wx.hideLoading();
    }, 1000);
    pageNum++;
    console.log(pageNum);
}