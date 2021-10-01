const app = getApp()
import BaseClass from "../gdx/Base"
let pageClass = class PageClass extends BaseClass {
    constructor(...args) {
        super(...args);
        super.$init({
            mustLogin: false,
            userInfo: null,
            pageIndex: 0,
            pageEnd: false,
            bottomLoading: false,
            masterInfo: {}
        })
    }

    $init(originData) {
        Object.assign(this.data = this.data ? this.data : {}, originData);
    }

    /**
     * 生命周期函数--监听页面加载
     */
    bShow = function (backQuery) {
        if (this.show) this.show(backQuery)
    }

    /**
     * 生命周期函数--监听页面加载
     */
    bLoad = function (param) {
        let self = this

        // var userInfo = wx.getStorageSync('userInfo') || {};
        // if (userInfo && userInfo.sessionId) {
        //     app.globalData.userInfo = userInfo
        //     self.$getSession({
        //         reload: true
        //     }, {hiddenError: true}).then(function (res) {
        //         if (res.result) {
        //             self.setStoreageInfo(res);
        //             if (self.load) self.load()
        //         } else {
        //             self.login()
        //         }
        //     }).catch(function (e) {
        //         self.login()
        //     });
        // } else {
        //     self.login()
        // }
        // if (self.load) self.load()
        self.beforeLogin(param)
    }

    /**
     * 登录
     */
    beforeLogin = function (param) {
        // let self = this
        // wx.login({
        //     success: function (opt) {
        //         if (opt.code) {
        //             self.$wechatLogin({
        //                 code: opt.code
        //             }).then(function (res) {
        //                 self.setStoreageInfo(res);
        //                 if (self.load) self.load(param)
        //             })
        //         } else {
        //             wx.showToast({
        //                 title: "获取登录凭证失败！",
        //                 icon: 'none',
        //                 duration: 2000
        //             });
        //         }
        //     },
        //     fail: function (res) {
        //         wx.showToast({
        //             title: "获取登录凭证接口调用失败！",
        //             icon: 'none',
        //             duration: 2000
        //         });
        //     }
        // });
    }

    /**
     * 绑定手机号
     * @param e
     */
    bindPhoneNumber = function (e) {
        let self = this
        self.$bindPhoneNumber({
            encryptedData: e.detail.encryptedData,
            iv: e.detail.iv,
            sessionKey: self.data.sessionKey
        }).then(function (res) {
            self.setData({
                "userInfo.phone": res.phone,
            })
            wx.showToast({
                title: "绑定成功！",
                icon: 'none',
                duration: 2000
            });
        })
    }

    /**
     * 保存系统全局数据
     * @param info
     * @private
     */
    setStoreageInfo = function (info) {
        let userInfo = null;
        if (info) {
            userInfo = {
                id: info.id,
                phone: info.phone,
                nickName: info.nickName,
                avatarUrl: info.avatarUrl
            }
            wx.setStorageSync('userInfo', userInfo);
            if (info.openId) wx.setStorageSync('openId', info.openId);
            if (info.unionId) wx.setStorageSync('unionId', info.unionId);
            if (info.token) wx.setStorageSync('token', info.token);
            if (info.sessionKey) wx.setStorageSync('sessionKey', info.sessionKey);
            wx.setStorageSync('isAdmin', false);
            this.setData({
                userInfo: userInfo,
                sessionKey: info?info.sessionKey:null
            })
        }
    }
}

export default pageClass
