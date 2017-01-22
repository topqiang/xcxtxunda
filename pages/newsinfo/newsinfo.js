// pages/newsinfo/newsinfo.js
var utile = require('../../utile/request.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    utile.request('https://xcx.txunda.com/News/article1/news_id/'+options.news_id,{},function(res){
      console.log(res);
      this.setData(res.data);
      WxParse.wxParse('article', 'html', res.data.news_info.content, this,20);
    }.bind(this));
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  newsTap:function(e){
    console.log(e)
    var news_id = e.currentTarget.dataset.id;
    if(news_id){
      wx.redirectTo({url: '../newsinfo/newsinfo?news_id='+news_id})
    }
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})