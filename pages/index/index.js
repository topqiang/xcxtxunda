// pages/index/index.js
var app = getApp();
var utile = require('../../utile/request.js')
Page({
  data:{
    topimgs:[
      "http://m.txunda.com/Public/Wap/images/banner3.png",
      "http://m.txunda.com/Public/Wap/images/banner2.png",
      "http://m.txunda.com/Public/Wap/images/banner1.png"
    ],
    assess: [
      {
        "text":"不错不错，合作很愉快。沟通很融洽，我们这边进度有点慢，他们也耐心的等了。推荐，开发找他们没错。",
        "imgsrc" : "../../img/hu1.png",
        "name" : "viking2015",
        "comname" : "智慧餐饮"
      },
      {
        "text":"合作过程非常顺利，项目经理的服务态度、收到反馈后的处理时效都很棒，服务商很靠谱。希望接下来的一年维护前，能够一如既往的完美。天迅达值得信赖。期待下次合作！",
        "imgsrc" : "../../img/hu2.png",
        "name" : "ywen",
        "comname" : "达服网"
      },
      {
        "text":"特别满意，基本要求的事情都办的很好，出现错误，不烦，出现来回更该次数，不厌出现不懂的，他们非常乐于教你并给你很多建议，服务上非常认真，要找就找这样有实力的合作。",
        "imgsrc" : "../../img/hu3.png",
        "name" : "zhenlei",
        "comname" : "为了粉丝"
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var self = this;
    utile.request('https://xcx.txunda.com/Index/index',{},function(res){
      if(res.flag == 'success'){
        console.log(res.data)
        self.setData(res.data)
      }
    });
  },
  onShow:function(){
    // 页面显示
    console.log("show page")
  },
  goodTap:function(e){
    var p_id = e.currentTarget.dataset.id;
    if(p_id){
      wx.navigateTo({url: '../faqinfo/faqinfo?p_id='+p_id});
    }
  },
  newsTap:function(e){
    console.log(e)
    var news_id = e.currentTarget.dataset.id;
    if(news_id){
      wx.navigateTo({url: '../newsinfo/newsinfo?news_id='+news_id})
    }
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  callphone: function(){
    wx.makePhoneCall({
      phoneNumber: '022-60688296'
    })
  }
})