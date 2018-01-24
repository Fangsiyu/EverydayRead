// pages/article_list/article_list.js
var app = getApp();
Page({
    data: {
        list: app.globalData.list,
        pageMore: false
    },
    //点击跳转详情
    toArticleDetail: function (event) {
        wx.navigateTo({
            url: '../article_list/article_detail/article_detail?id=' + event.currentTarget.dataset.id + '&title=' + event.currentTarget.dataset.title + '&imgUrl=' + event.currentTarget.dataset.url + '&content=' + event.currentTarget.dataset.content,
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
        }, 1000)
        getList(this);
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
    onReachBottom: function () {
        if (pageNum < 6) {
            getList(this);
        } else {
            this.setData({
                pageMore: true
            });
            wx.showToast({
                title: '没有更多文章了',
            })
        }
    }
})
var pageNum = 1;
var getList = function (that) {
    for (var i = 0; i < app.globalData.list.length; i++) {
        that.data.list.push(app.globalData.list[i]);
    };
    //添加新数据
    that.setData({
        list: that.data.list
    });
    //隐藏加载框
    setTimeout(function () {
        wx.hideLoading();
    }, 1000);
    pageNum++;
    console.log(pageNum);
}