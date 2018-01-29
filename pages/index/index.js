//index.js
var app = getApp();
Page({
    data: {
        message: '「让阅读成为一种习惯」',
        btnstart: '讀',
        userInfo: {},
        appName: app.globalData.appName,
        userImg: app.globalData.userImg,
    },
    onShareAppMessage: function () {
        // wx.showShareMenu();
        return {
            title: '每日阅读One',
            path: '/pages/index/index',
        }
    },
    onLoad: function (options) {
        // app.isGetUserMes();
        // 页面初始化 options为页面跳转所带来的参数
        wx.showLoading({
            title: '加载中...',
            icon: 'loading'
        });
        // 防止网络慢，从新获取
        wx.getUserInfo({
            success: res => {
                this.setData({
                    userInfo: res.userInfo
                })
            }
        })
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        // app.userInfoReadyCallback = res => {
        //     this.setData({
        //         userInfo: res.userInfo
        //     })
        // }
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
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh()
    },
})