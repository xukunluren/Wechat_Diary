const app = getApp()    
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  textTap:function(){
        wx.navigateTo({
          url: '../textEdit/textEdit'
        })
  },
  imageTap :function(){
    wx.navigateTo({
      url: '../pictureEdit/pictureEdit'
    })
  },
  audioTap:function(){
    wx.navigateTo({
      url: '../audioEdit/audioEdit'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var speed = res.speed
        var accuracy = res.accuracy
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        app.globalData.latitude = res.latitude;
        app.globalData.longitude = res.longitude;
        console.log("---------------")
        console.log(app.globalData.latitude)
        console.log(app.globalData.longitude)
        console.log(res.latitude)
        console.log(res.longitude)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 引入SDK核心类
    var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');

    // 实例化API核心类
    var demo = new QQMapWX({
      key: 'Q3QBZ-VHVC4-CJ4U5-DZMSI-PJ7IJ-TZFOG' // 必填
    });
    var _this = this;
    // 调用接口
    demo.reverseGeocoder({
      location: {
        latitude: app.globalData.latitude,
        longitude: app.globalData.longitude
        // latitude: 39.984060,
        // longitude: 116.307520
      },
      success: function (res) {
        console.log(res);
        app.globalData.address = res.result.address_component.city
        console.log(_this.data.address)
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})