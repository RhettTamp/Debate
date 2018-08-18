//app.js
App({
  
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

   
   

    // 登录换取seession
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
        wx.request({
          // url: 'http://119.29.196.108:3001/hello',
          // url: 'http://123.207.87.34/session',

          data: {
            code: res.code
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function(res) {
            console.log(res)
          },

        })



        
      }
    })

  },
  
  getUserInfo(cb) {
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登陆接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log('登陆接口' + res.userInfo)
              this.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(this.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null

  }
})