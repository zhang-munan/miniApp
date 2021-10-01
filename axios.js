import Axios from "./class/gdx/axios/axios";
const axios = new Axios();

/**
 * 请求拦截器
 * @param config
 * @returns {Promise<unknown>}
 */
axios.interceptors.request = async function (config) {
  const app = getApp()
  return new Promise(async (resolve, reject) => {
    try {
      let token = wx.getStorageSync('token');
        if (token) config.header.vt = token;
        resolve(config)
    } catch(e) {
        reject(e);
    }
  })
}

/**
 * 响应拦截器
 * @param res
 * @returns {Promise<unknown>}
 */
axios.interceptors.response.success = function(res) {
  return new Promise((resolve, reject) => {
    if (res._opts.upload){
      res.data.data = JSON.parse(res.data.data)
    }
    if (!res.data.data.res){
      if (!res._opts.hiddenError){
        wx.showToast({
          title: res.data.data.errMessage,
          icon: 'none',
          duration: 2000
        });
      }
      reject(res.data.data);
    } else {
      resolve(res);
    }
  })
}

/**
 * 响应失败
 * @param res
 * @returns {*}
 */
axios.interceptors.response.error = function(res) {
  if (res._opts.hiddenError){
    return res;
  }
  wx.showToast({
    title: res.error.errMsg,
    icon: 'none',
    duration: 2000
  });
  return res;
}

export default {
  // 登录
  $wechatLogin: function(data = {}, opts = {}) {
    return axios.$json("app/wechat_login", data, opts, this)
  },
  // 绑定手机号
  $bindPhoneNumber: function(data = {}, opts = {}) {
    return axios.$json("app/bind_phone", data, opts, this)
  },
  // 查询企业模板列表
  $getTempCompanyList: function(data = {}, opts = {}) {
    return axios.$json("app/get_template_enterprise_list", data, opts, this)
  },
  // 查询字典
  $getChildDictionaryListByKeys: function(data = {}, opts = {}) {
    return axios.$json("setting/dict/get_options", data, opts, this)
  },
  // 查询session信息
  $getSession: function(data = {}, opts = {}) {
    return axios.$json("getSession", data, opts, this)
  },

}
