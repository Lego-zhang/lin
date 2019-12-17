//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    demo: [{
      image: 'https://www.youbaobao.xyz/book/res/img/EarthSciences/978-981-10-3713-9_CoverFigure.jpg',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    }, {
      image: 'https://www.youbaobao.xyz/book/res/img/EarthSciences/978-981-10-3713-9_CoverFigure.jpg',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    },
      {
      image: 'https://www.youbaobao.xyz/book/res/img/EarthSciences/978-981-10-3713-9_CoverFigure.jpg',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.lin.renderWaterFlow(this.data.demo, true, () => {
      console.log('渲染成功')
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
