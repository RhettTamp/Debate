// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class: [
    {
        icon: '../../images/icon/share.png',
      name: '情感'
    },
      {
        icon: '../../images/icon/share.png',
        name: 'xx'
      }, {
        icon: '../../images/icon/share.png',
        name: 'xxx'
      }, {
        icon: '../../images/icon/share.png',
        name: 'xxxx'
      }, {
        icon: '../../images/icon/share.png',
        name: '情感'
      }, {
        icon: '../../images/icon/share.png',
        name: '情感'
      }, {
        icon: '../../images/icon/share.png',
        name: '情感'
      }, {
        icon: '../../images/icon/share.png',
        name: '情感'
      }
    
    ]
  },
  toWatch: function() {
    wx.navigateTo({
      url: 'watch/watch',
    })
  },
  classClick:function(e){
    console.log(e.currentTarget.id); 
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: 'classifyItem/classifyItem?id='+id,
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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