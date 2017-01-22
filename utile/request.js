function request(url,data,success,fail,complete){
    wx.request({
        url: url, //仅为示例，并非真实的接口地址
        data: data,
        method: 'POST',
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            success(res.data)
        },
        fail: function(res){
            if(typeof fail == 'function'){
                fail(res);
            }
        },
        complete: function(res){
            if(typeof complete == 'function'){
                complete(res);
            }
        }
    })
}
module.exports = {
    "request":request
}