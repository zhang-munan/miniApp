const app = getApp()
app.globalData.gdx.createApp({
    data: {
        identity: wx.getStorageSync("isAdmin"),
    },

    /**
     * 页面出现在前台时执行
     */
    show() {},

    /**
     * 页面创建时执行
     */
    load () {},

    /**
     * 授权用户信息
     * @param e
     */
    getUserInfo: function(e) {
        // let self = this
        // if (wx.getUserProfile) {
        //     wx.getUserProfile({
        //         desc: '仅作展示',
        //         success(res) {
        //             self.$updateUser(res.userInfo, {loading: true}).then(res => {
        //                 self.onLoad()
        //             })
        //         }
        //     })
        // }
    }
})
