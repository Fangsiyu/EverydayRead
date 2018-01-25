//app.js
App({
    onLaunch: function () {
        this.isGetUserMes();
    },
    //全局变量
    globalData: {
        userName:'天天阅读',
        userImg:'/pages/imgs/user.png',
        proServer: "http://everydayread.gproom.com",//正式环境地址
        testServer: "",//测试环境地址
        list: [{
            id: '1',
            title: '证券经纪人的浪漫故事1',
            imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154552.gif',
            content: '111早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
        },
        {
            id: '2',
            title: '证券经纪人的浪漫故事2',
            imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154555.gif',
            content: '222早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
        },
        {
            id: '3',
            title: '证券经纪人的浪漫故事3',
            imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154553.gif',
            content: '333早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
        },
        {
            id: '4',
            title: '证券经纪人的浪漫故事4',
            imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154554.gif',
            content: '444早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
        },
        {
            id: '5',
            title: '证券经纪人的浪漫故事5',
            imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154556.gif',
            content: '555早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
        },
        {
            id: '6',
            title: '证券经纪人的浪漫故事6',
            imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154526.gif',
            content: '666早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
        },
        {
            id: '7',
            title: '证券经纪人的浪漫故事7',
            imgUrl: 'http://ico.58pic.com/iconset01/Qetto-icons/gif/154558.gif',
            content: '777早上9点半，证券经纪人哈维·马克斯韦尔在年轻女速记员的陪同下，步履轻快地来到办公室...'
        }
        ]
    },
    //验证用户信息授权
    isGetUserMes: function () {
        //获取授权信息
        wx.getUserInfo({            
            success: res => {
                console.log("初次授权成功");
                wx.setStorage({  //用户信息存入缓存
                    key: 'dayUser',
                    data: res.userInfo,
                });
                console.log("初次用户信息存入缓存成功");
                wx.getStorage({
                    key: 'dayUser',
                    success: function (res) {                        
                        console.log(res.data.nickName)
                    },
                });
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
                                    wx.setStorage({  //用户信息存入缓存
                                        key: 'dayUser',
                                        data: res.userInfo,
                                    });
                                } else {
                                    wx.clearStorage();
                                    console.log("clean");
                                    console.log("二次授权失败，清理缓存");
                                }
                            }
                        })
                    }
                })
            }
        })
    },
})
