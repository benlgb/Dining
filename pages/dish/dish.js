// pages/dish/dish.js
Page({
  data:{
    time: "12:00",
    start: "11:00",
    end: "13:00"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  timeChange: function(e) {
    this.setData({
      time: e.detail.value
    });
  },
  submit: function() {
    wx.reLaunch({
      url: "/pages/item-status/item-status"
    });
  }
});