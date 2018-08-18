Page({

  /**
   * 页面的初始数据
   */
  data: {
    randomTitle: [
      '懒是不是人之光？',
      '学校该不该对网络限制？',
      '大学生应先考研再工作，还是先工作再考研?'
    ],
    random: 0,
    selfTitle: '',
   

  },
  toZheng: function() {
    wx.navigateTo({
      url: 'match_animation/match_animation?d=zheng',
    })
  },
  toFan: function () {
    wx.navigateTo({
      url: 'match_animation/match_animation?d=fan',
    })
  },
  change: function() {
    var that = this;
    var current = that.data.random;
    var length = that.data.randomTitle.length - 1;

    if (current != length) {
      this.setData({
        random: current + 1
      })
    } else {
      this.setData({
        random: 0
      })
    }


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    if (options.title) {
      this.setData({
        selfTitle: options.title,
        random:0
      })
    } 

      this.setData({
        random: Math.floor(Math.random() * this.data.randomTitle.length)
      })
    
    console.log(this.data.selfTitle)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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