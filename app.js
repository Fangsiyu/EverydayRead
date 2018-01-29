//app.js
App({
    onLaunch: function () {
        //获取授权信息
        wx.getUserInfo({
            success: res => {
                console.log("初次授权成功");
                this.globalData.userInfo = res.userInfo; //存储到全局变量里面
                console.log(this.globalData.userInfo);
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res);
                }
            },
            fail: res => {
                console.log("初次授权失败");
                wx.showModal({
                    title: '友情提醒',
                    content: '请先授权，以展示头像信息等',
                    showCancel: false,
                    confirmText: '好的',
                    success: res => {
                        wx.openSetting({
                            success: res => {
                                console.log(res);
                                if (res.authSetting['scope.userInfo']) { //授权成功
                                    console.log("二次授权成功");
                                    wx.getUserInfo({
                                        success: res => {
                                            this.globalData.userInfo = res.userInfo; //存储到全局变量里面
                                            console.log(res);
                                        }
                                    })
                                    if (this.userInfoReadyCallback) {
                                        this.userInfoReadyCallback(res);
                                        console.log(res);
                                    }
                                } else {
                                    console.log("二次授权失败");
                                }
                            }
                        })
                    }
                })
            }
        })
    },
    //全局变量
    globalData: {
        userInfo: {},
        appName: '天天阅读',
        userImg: '/pages/imgs/user.png',
        proServer: "https://www.gproom.com",//正式环境地址
        testServer: "",//测试环境地址
        list:[],
    },
})
