import gdxPage from "./class/bll/Page"
import axios from "./axios"
import router from "./router"
import utils from "./utils/utils"

let gdx = new gdxPage()
gdx.use(router)
gdx.use(axios)
gdx.use(utils)

App({
    onLaunch: function () {
        //在app.js中全局获取一次系统和胶囊信息
        //获取系统信息
        wx.getSystemInfo({
            success: res => {
                this.globalData.system = res
            }
        })
        //获取胶囊信息
        this.globalData.capsule = wx.getMenuButtonBoundingClientRect()
    },
    globalData: {
        gdx: gdx,
        userInfo: null,
        system: '',
        capsule: ''
    },
})
