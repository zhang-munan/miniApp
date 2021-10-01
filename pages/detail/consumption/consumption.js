const app = getApp()
app.globalData.gdx.createApp({
  data: {
    navbarHeight: wx.getStorageSync("navbarHeight"),
  },

  /**
   * 页面创建时执行
   */
  load () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  show: function () {
    this.init()
  },

  /**
   * 初始化数据
   */
  init() {
    this.navbar = this.selectComponent('#navbar')
    this.navbar.changeBgc(true)
  },

  bindCopyContent(e){
    wx.setClipboardData({
      data: e.currentTarget.dataset.number,
      success: function (res) {
        wx.showToast({
          title: '内容已复制',
          icon: 'none'
        })
      }
    })
  },

})