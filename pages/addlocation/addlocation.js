// pages/addlocation/addlocation.js
Page({
  data:{
    schools: [
      "广东外语外贸大学",
      "广东工业大学"
    ],
    schoolIndex: 0
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
  changeSchool: function(e) {
    console.log(e.detail.value);
    this.setData({
      schoolIndex: e.detail.value
    });
  },
  finish: function() {
    wx.reLaunch({
      url: "/pages/dish/dish"
    });
  }
});