// pages/news/news.js
var app = getApp();
var util = require("../../utile/request.js");
Page({
  data:{p:0},
  onLoad:function(options){
    var self = this;
    util.request("https://xcx.txunda.com/News/cate",{},function(res){
      if(res.flag == "success"){
        console.log(res.data);
        self.setData(res.data);
      }
    });
  },
  newsTap:function(e){
    console.log(e)
    var news_id = e.currentTarget.dataset.id;
    if(news_id){
      wx.navigateTo({url: '../newsinfo/newsinfo?news_id='+news_id})
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
  onReachBottom: function() {
    // Do something when page reach bottom.
    var self = this;
    if(this.data.bottom){
      return;
    }
    wx.showToast({
      title: '数据加载中...',
      icon: 'loading',
      duration: 10000
    });
     util.request("https://xcx.txunda.com/News/catePage/p/"+(this.data.p+1),{},function(res){
       wx.hideToast();
      if(res.flag == "success"){
        console.log(res.data);
        var news_list = self.data.news_list;
        self.setData({p : self.data.p+1,news_list : news_list.concat(res.data.news_list)});          
      }else{
          wx.showToast({
            title: '已经无数据了',
            icon: 'success',
            duration: 1000
          });
          self.setData({bottom:true});
      }
    });
  },
  onUnload:function(){
    // 页面关闭
  }
})