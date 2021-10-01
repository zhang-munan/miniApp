// 路由设置
export default {
  /**
   * 页面跳转（navigateTo）
   * @param path
   * @param query
   */
  navigateTo: function (path, query = {}) {
    let args = "";
    if (Object.keys(query).length) {
      args = '?';
      for (let i in query) {
        if (query.hasOwnProperty(i)) {
          args += i + '=' + query[i] + '&';
        }
      }
      args = args.substring(0, args.length - 1);
    }
    wx.navigateTo({
      url: `${path + args}`
    });
  },

  /**
   * 返回上一页
   * @param query
   */
  navigateBack:function (query) {
    if (query) wx.setStorageSync('backQuery', query);
    wx.navigateBack();
  },
}
