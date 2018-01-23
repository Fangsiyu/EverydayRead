//app.js
App({
    onLaunch: function () {
        //登录
        wx.login({
            success: function (res) {
                console.log(res);
                //获取用户信息
                wx.getUserInfo({
                    success: function (res) {
                        console.table(res);
                        var userInfo = res.userInfo
                        var nickName = userInfo.nickName
                        var avatarUrl = userInfo.avatarUrl
                        var gender = userInfo.gender //性别 0：未知、1：男、2：女
                        var province = userInfo.province
                        var city = userInfo.city
                        var country = userInfo.country
                    }
                })
            }
        });
    },
    //全局变量
    globalData: {
        userInfo: "你是谁？",
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
    }
})