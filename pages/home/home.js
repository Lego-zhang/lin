// pages/home/home.js
import {Theme} from "../../model/Theme";
import {Banner} from "../../model/Banner";
import {Category} from "../../model/Category";
import {Activity} from "../../model/Activity1";
import {SpuPaging} from "../../model/spu-paging";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA: null,
    bannerB: null,
    bannerG: null,
    grid: [],
    activityD: null,
    themeESpu: [],
    themeF: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.initAllData()
    this.initBottomSpuList()
  },
  async initAllData() {
    const theme = new Theme();

    await theme.getThemes();

    const themeA = await theme.getHomeLocationA();
    const themeE = await theme.getHomeLocationE();
    let themeESpu = [];
    const themeF = await theme.getHomeLocationF();
    const themeH = await theme.getHomeLocationH();

    const bannerB = await Banner.getHomeLocationB();
    const bannerG = await Banner.getHomeLocationG();

    const grid = await Category.getHomeLocationC();
    const activityD = await Activity.getHomeLocationD();

    if (themeE.online) {
      const data = await Theme.getHomeLocationESpu();
      console.log(data)
      if (data) {
        themeESpu = data.spu_list.slice(0, 8)
      }
    }


    this.setData({
      themeA,
      themeE,
      themeESpu,
      themeF,
      themeH,
      bannerB,
      bannerG,
      grid,
      activityD
    })
  },
  async initBottomSpuList() {
    const paging = await SpuPaging.getLatestPaging()
    const data = await paging.getMoreData()
    if (!data){
      return
    }
    console.log(data)
    wx.lin.renderWaterFlow(data.items)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏¬
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
});
