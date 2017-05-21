// pages/qbd/qbd.js
Page({
  data:{
    school: "",
    dinings: []
  },
  onLoad:function(options){
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://diningx.cn/dining/index.php/home/canteen/getUniversityCanteen',
      data: {
        type: 201,
        university_id: 1
      },
      method: 'POST',
      success: function(res){
        // success
        var data = res.data;
        if (data.re === "0") {
          this.data.dinings = data.msg.canteens;
          this.data.school = data.msg.university_name;
          this.setData({
            dinings: this.data.dinings,
            school: this.data.school
          });
          wx.setNavigationBarTitle({
            title: this.data.school
          });
        }
      }.bind(this),
      fail: function(res) {
        // fail
        wx.showModal({
          title: "错误",
          content: "访问服务器失败"
        });
      },
      complete: function(res) {
        // complete
        wx.hideNavigationBarLoading()
      }
    });
  }
});