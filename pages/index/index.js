//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    num: 88,
    userInfo: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数

  toFight: function() {
    wx.navigateTo({
      url: '../fight/fight'
    })
  },
  toFriend: function() {
    wx.navigateTo({
      url: '../friend/friend'
    })
  },
  toSearch: function() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  toMatch: function() {
    wx.navigateTo({
      url: '../match/match',
    })

  },
  toRank: function() {
    wx.navigateTo({
      url: '../rank/rank',
    })
  },
  toRecommend: function() {
    wx.navigateTo({
      url: '../recommend/recommend',
    })
  },
  onReady: function() {


  },

  onLoad: function() {
    var num = this.data.num.toString()
   

    console.log('test')
    if (app.globalData.userInfo) {

      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })

    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})