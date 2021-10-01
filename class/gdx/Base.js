let baseClass = class Base {
    constructor(...args) {
        this.data = {
            loading: true,
            navBarHeight: 0,
        };
    }

    $init(originData) {
        Object.assign(this.data = this.data ? this.data : {}, originData);
    }

    /**
     * 生命周期函数--监听页面加载
     */
    onShow = function () {
        let self = this
        let backQuery = wx.getStorageSync('backQuery')
        if (backQuery) {
            self.setData(backQuery)
            wx.removeStorage({
                key: 'backQuery'
            })
        }
        if (self.bShow) self.bShow(backQuery)
    }

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad = function (param) {
        if (param) {
            this.setData(param)
        }
        if (this.bLoad) this.bLoad()
    }

    /**
     * 获取标题栏高度
     */
    navBarLoad = function (e) {
        this.setData({
            navBarHeight: e.detail.navBarHeight
        })
    }

    /**
     * 创建页面实例
     * @param pageObj
     */
    createApp = function (pageObj) {
        let mixins = pageObj.mixins
        delete pageObj.mixins
        pageObj.data = Object.assign({}, this.data, pageObj.data)
        let x = class c {}
        // x.prototype = this
        Object.setPrototypeOf(x.prototype, this);

        if (mixins && mixins.length > 0) {
            for(let i = 0; i < mixins.length; i++) {
                pageObj.data = Object.assign({}, pageObj.data, new mixins[i]().data)
                for (let key in new mixins[i]()) {
                    x.prototype[key] = new mixins[i]()[key]
                }
            }
        }

        for (let key in pageObj) {
            x.prototype[key] = pageObj[key]
        }
        return Page(new x())
    }

    /**
     * 加载组件
     * @param obj
     */
    use = function (obj) {
        for (let key in obj) {
            this[key] = obj[key]
        }
    }
}

import Utils from "./utils/utils";
import Axios from "./axios/axios";
import Router from "./router/router";
import Wx from "./utils/wx";

const assignObj = Object.assign(Utils, Wx, Axios, Router);
Object.setPrototypeOf(baseClass.prototype, assignObj);
export default baseClass
