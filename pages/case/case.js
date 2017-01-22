// pages/case/case.js
var app = getApp();
var utile = require('../../utile/request.js')
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var self = this;
    utile.request('https://xcx.txunda.com/Index/selectCase',{},function(res){
      if(res.flag == 'success'){
        console.log(res.data);
        self.setData(res.data);
      }
    });
  },
  goodTap:function(e){
    var p_id = e.currentTarget.dataset.id;
    if(p_id){
      wx.navigateTo({url: '../faqinfo/faqinfo?p_id='+p_id});
    }
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
  }
})