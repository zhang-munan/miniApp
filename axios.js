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
  // 手机号注册
  $customerBindOpenId: function(data = {}, opts = {}) {
    return axios.$json("customerBindOpenId", data, opts, this)
  },
  // 查询图片图
  $uploadOrderImage: function(data = {}, opts = {}) {
    return axios.$upload("uploadOrderImage", data, opts, this)
  },
  // 搜索职位列表
  $getPositionList: function(data = {}, opts = {}) {
    return axios.$json("app/get_post_list", data, opts, this)
  },
  // 搜索职位列表（投递者）
  $geUserPositionList: function(data = {}, opts = {}) {
    return axios.$json("app/get_user_post_list", data, opts, this)
  },
  // 搜索职位列表
  $getPositionDetail: function(data = {}, opts = {}) {
    return axios.$json("app/get_post_detail", data, opts, this)
  },
  // 添加职业
  $addPosition: function(data = {}, opts = {}) {
    return axios.$json("app/add_post", data, opts, this)
  },
  // 删除职业
  $deletePosition: function(data = {}, opts = {}) {
    return axios.$json("app/delete_post", data, opts, this)
  },
  // 修改职业
  $modifyPosition: function(data = {}, opts = {}) {
    return axios.$json("app/modify_post", data, opts, this)
  },
  // 添加简历
  $addResume: function(data = {}, opts = {}) {
    return axios.$json("app/add_resume", data, opts, this)
  },
  // 删除简历
  $deleteResume: function(data = {}, opts = {}) {
    return axios.$json("app/delete_resume", data, opts, this)
  },
  // 修改简历
  $modifyResume: function(data = {}, opts = {}) {
    return axios.$json("app/modify_resume", data, opts, this)
  },
  // 简历列表
  $getResumeList: function(data = {}, opts = {}) {
    return axios.$json("app/get_resume_list", data, opts, this)
  },
  // 简历详情
  $getResumeDetail: function(data = {}, opts = {}) {
    return axios.$json("app/get_resume_detail", data, opts, this)
  },
  // 添加邮箱
  $addEmail: function(data = {}, opts = {}) {
    return axios.$json("app/add_mail", data, opts, this)
  },
  // 删除邮箱
  $deleteEmail: function(data = {}, opts = {}) {
    return axios.$json("app/delete_mail", data, opts, this)
  },
  // 修改邮箱
  $updateEmail: function(data = {}, opts = {}) {
    return axios.$json("app/update_mail", data, opts, this)
  },
  // 查询邮箱列表
  $getEmailList: function(data = {}, opts = {}) {
    return axios.$json("app/get_mail_list", data, opts, this)
  },
  // 查询邮箱详情
  $getEmailDetail: function(data = {}, opts = {}) {
    return axios.$json("app/get_mail_detail", data, opts, this)
  },
  // 查询默认邮箱
  $getDefaultEmail: function(data = {}, opts = {}) {
    return axios.$json("app/get_mail_default", data, opts, this)
  },
  // 收藏职位列表
  $getCollectList: function(data = {}, opts = {}) {
    return axios.$json("app/get_collect_list", data, opts, this)
  },
  // 添加收藏
  $addCollect: function(data = {}, opts = {}) {
    return axios.$json("app/add_collect", data, opts, this)
  },
  // 取消收藏
  $deleteCollects: function(data = {}, opts = {}) {
    return axios.$json("app/delete_collect", data, opts, this)
  },
  // 查询公司列表
  $getCompanyList: function(data = {}, opts = {}) {
    return axios.$json("app/get_enterprise_list", data, opts, this)
  },
  // 查询公司详情
  $getCompanyDetail: function(data = {}, opts = {}) {
    return axios.$json("app/get_enterprise_detail", data, opts, this)
  },
  // 更新公司详情
  $updateCompany: function(data = {}, opts = {}) {
    return axios.$json("app/modify_enterprise", data, opts, this)
  },
  // 发红包
  $createRedPacket: function(data = {}, opts = {}) {
    return axios.$json("app/create_red_packet", data, opts, this)
  },
  // 收藏模板列表
  $getTemplatePostList: function(data = {}, opts = {}) {
    return axios.$json("app/get_template_post_list", data, opts, this)
  },
  // 职位模板详情
  $getTemplatePostDetail: function(data = {}, opts = {}) {
    return axios.$json("app/get_template_post_detail", data, opts, this)
  },
  // 更新用户详情
  $updateUser: function(data = {}, opts = {}) {
    return axios.$json("app/modify_user", data, opts, this)
  },
  // 获取已投递列表
  $getDeliverList: function(data = {}, opts = {}) {
    return axios.$json("app/get_deliver_list", data, opts, this)
  },
  // 添加批量分享
  $addShare: function(data = {}, opts = {}) {
    return axios.$json("app/add_share", data, opts, this)
  },
  // 获取批量分享数据
  $getShareList: function(data = {}, opts = {}) {
    return axios.$json("app/get_share_list", data, opts, this)
  },
  // 添加投递
  $addDeliver: function(data = {}, opts = {}) {
    return axios.$json("app/add_deliver", data, opts, this)
  },
  // 添加投递Images
  $addDeliverImages: function(data = {}, opts = {}) {
    return axios.$json("app/add_deliver_images", data, opts, this)
  },
  // 添加投递Images
  $getMyDeliverPostList: function(data = {}, opts = {}) {
    return axios.$json("app/get_my_deliver_post_list", data, opts, this)
  },
  // 我的红包列表
  $getRedPacketList: function(data = {}, opts = {}) {
    return axios.$json("app/get_red_packet_list", data, opts, this)
  },
  // 收到红包列表
  $getIncomeList: function(data = {}, opts = {}) {
    return axios.$json("app/get_income_list", data, opts, this)
  },
  // 发出红包列表
  $getExpendList: function(data = {}, opts = {}) {
    return axios.$json("app/get_expend_list", data, opts, this)
  },

}
