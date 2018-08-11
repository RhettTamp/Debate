var util = require('../../utils/util.js')
const app = getApp();
Page({
  data: {
    userInfo: [],
    currentTab: 0,
    friendsData: [{
        openId: 'oOMX50Ar7hO5avGk0QMtMIV43E4Y',
        nickName: 'bouc',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKrPUCcIM6yLm8ANHYxGjicnsBcXVF5zzicLv8HmjNyZzcwT1Btmlic6Xj3GnlXHLkKNU4d5V9AmKcWg/132',
        score: 0
      },
      {
        openId: 'oOMX50Ar7hO5avGk0QMtMIV43E4Y',
        nickName: 'test',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Uv7icRK28GZ7cne8kfrJxFs3Ew6K509uyXOlIAuCqwSgWbO8mND3NQEIGjLEuvicyle3IsgK2gcXGHquuEluoia6g/132',
        city: '广州'
      }
    ],
    globalData: [{
        openId: 'oOMX50Ar7hO5avGk0QMtMIV43E4Y',
        nickName: 'bouc',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKrPUCcIM6yLm8ANHYxGjicnsBcXVF5zzicLv8HmjNyZzcwT1Btmlic6Xj3GnlXHLkKNU4d5V9AmKcWg/132',
        score: 0
      },
      {
        openId: 'oOMX50Ar7hO5avGk0QMtMIV43E4Y',
        nickName: 'bouc',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKrPUCcIM6yLm8ANHYxGjicnsBcXVF5zzicLv8HmjNyZzcwT1Btmlic6Xj3GnlXHLkKNU4d5V9AmKcWg/132',
        city: '广州'
      }
    ],
    loadNumber: 1 //全球排名数据加载次数
  },
  onLoad: function() {
    wx.getUserInfo({
      success: (res) => {
        console.log(res.userInfo)
       
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
    
    console.log(this.data.userInfo)
  },
  onShow() {

  },
  onReachBottom: function() { //下拉加载


  },

  swichNav(e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current,
    })
  },
})