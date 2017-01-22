// pages/faqinfo/faqinfo.js
var utile = require('../../utile/request.js');
Page({
  data:{},
  onLoad:function(option){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(option);
    var self = this;
    utile.request('https://xcx.txunda.com/Index/findCase1/p_id/'+option.p_id,{},function(res){
      console.log(res);
      if(res.flag == 'success'){
        console.log(res.data);
        self.setData(res.data);
      }
    });
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
  preview:function(e){
    var cur = e.currentTarget.dataset.src;
    var newarr = [];
    console.log(cur);
    for(var index in this.data.pic_arr){
      var curobj = this.data.pic_arr[index];
      newarr.push(curobj.src);
    }
    wx.previewImage({
      current: cur, // 当前显示图片的http链接
      urls: newarr // 需要预览的图片http链接列表
    });
  },
  goodTap:function(e){
    var p_id = e.currentTarget.dataset.id;
    if(p_id){
      wx.redirectTo({url: '../faqinfo/faqinfo?p_id='+p_id});
    }
  },
  callphone: function(){
    wx.makePhoneCall({
      phoneNumber: '022-60688296'
    })
  }
})