//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: null
  },
  onLoad: function () {
    this.getProList();
  },
  toDetail: function (e) { 
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var title = proList[index].proName;
    wx.setStorageSync('title', title);
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },
  getProList: function () {
    var self = this;
    wx.request({
      url: 'http://guozhaoxi.top/wx/data.json',
      method: 'get',
      success: function (res) {
        console.log(res);
        self.setData({
          proList: res.data
        })
      }
    })
  },
  tell: function () {
    wx.makePhoneCall({
      phoneNumber: '1762923819' //仅为示例，并非真实的电话号码
    })
  }, 
  copy: function () {
    wx.setClipboardData({
      data: '复制内容123',
      success: function (res) {
        wx.showModal({
          title: '复制成功',
          content: '已复制',
        })
      }
    })
  }
})
