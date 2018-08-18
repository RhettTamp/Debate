const app = getApp()
function countdown(that) {
  var second = that.data.second
  
  var time = setTimeout(function () {
    that.setData({
      second: second +1
          });
    countdown(that);
  }
    , 1000)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    d: '',
    userinfo: {},
    second: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    countdown(this)

    wx.setNavigationBarTitle({
      title: '匹配对战',
    })
    this.setData({
      userinfo: app.globalData.userInfo
    })
    var d = ''
    options.d == 'fan' ? d = '反方' : d = '正方'
    this.setData({
      d: d
    })
   
   
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

    wx.connectSocket({
      url: 'ws://119.29.196.108:3001',

    })
    wx.onSocketOpen(function () {
      console.log('websocket连接已打开')
      wx.sendSocketMessage({
        data: 'helloccc',
      })
    })
    wx.onSocketMessage(function (res) {
      console.log(res.data)
      if (res.data == 'start') {
        console.log('准备跳转')
        wx.navigateTo({
          url: '../pk/pk',
        })
        wx.onSocketClose(function (res) {
          console.log('ws关闭')
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})