const App = getApp();
Component({
    properties: {
        title: {
            type: String,
            value: ''
        },
        backTitle: {
            type: String,
            value: ''
        },
        background: {
            type: String,
            value: '#fff'
        },
        isShowBack: {
            type: Boolean,
            value: false
        },
        delta: {
            type: Number,
            value: 1
        }
    },
    data: {
        capsuleTop: '', //胶囊距离屏幕顶部的距离
        capsuleHeight: '', //胶囊高度
        navbarHeight: '', //导航栏高度
        isShowBackGround: false,
    },
    lifetimes: {
        attached: function () {
            this.setData({
                capsuleTop: App.globalData.capsule.top,
                capsuleHeight: App.globalData.capsule.height,
                navbarHeight: (App.globalData.capsule.top - App.globalData.system.statusBarHeight) * 2 + App.globalData.capsule.height + App.globalData.system.statusBarHeight,
            })
            wx.setStorageSync("navbarHeight", this.data.navbarHeight)
        }
    },
    methods: {
        handleGoToBack() {
            wx.navigateBack({
                delta: 1
            })
        },

        /**
         *
         */
        changeBgc(e) {
            this.setData({isShowBackGround: e})
        },
    }

})