// pages/article_list/article_list.js
var app = getApp();
Page({
    data: {
        list: [],
        pageMore: false
    },
    //点击跳转详情
    toArticleDetail: function (event) {
        wx.navigateTo({
            url: '../article_list/article_detail/article_detail?id=' + event.currentTarget.dataset.id + '&title=' + event.currentTarget.dataset.title + '&createdTime=' + event.currentTarget.dataset.createdTime + '&content=' + event.currentTarget.dataset.content,
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
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        wx.showLoading({
            title: '加载中...',
            icon: 'loading'
        });
        console.log(this);
        getList(this);
        wx.hideLoading();
        console.log(this.data.list);
    },
    onReady: function () {
        // wx.hideLoading()
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
        if (!this.data.pageMore) {
            getList(this);
        } else {
            this.setData({
                pageMore: true
            });
            wx.showToast({
                title: '没有更多文章了',
            });
        }
    }
})
var offset = 1, limit = 10, oldList=[]; //设置页码，每页数量
var getList = function (that) {   //获取文章列表
if(!that.data.pageMore){ //判断还有没有数据来决定请求与否
    wx.request({
        url: app.globalData.proServer + '/api/articles?offset=' + offset + '&limit=' + limit,
        success: res => {
            if (res.statusCode == 200) {
                if (res.data.code == '000000') {
                    oldList = that.data.list;
                    for (var i = 0; i < res.data.data.totals; i++) {
                        // console.log(res.data.data.data[i]);
                            oldList.push(res.data.data.data[i]);
                    };
                    that.setData({
                        list: oldList
                    });
                    // 判断是否还有数据
                    if (res.data.data.totals == limit) {
                        offset++;
                    } else {
                        that.setData({
                            pageMore: true
                        })
                    }
                } else {
                    wx.showModal({
                        title: '友情提醒',
                        content: res.data.message,
                    })
                }
            } else {
                wx.showToast({
                    title: '服务器出问题啦',
                })
            }
        },
        fail: res => {
            wx.showToast({
                title: '服务器出问题啦',
            })
        }
    })
}else{
    wx.showToast({
        title: '没有更多文章',
    })
}
    
}

// 时间戳转换日期
var changeDate = function(time){
    
}