//index.js
Page({
  data: {
    message: '「让阅读成为一种习惯」',
    btnstart:'讀',
    imgurl:'../imgs/logo.png'
  },
  toList:function(event){
    wx.navigateTo({
      url:'../article_list/article_list'
    })
  }
})