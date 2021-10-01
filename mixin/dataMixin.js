import CityData from "../class/gdx/utils/cityData";
export default class mixinClass {
    data = {
        dicData: {},
        // 工作类型
        workNatureList: [
            {id: 'unlimited', label: '不限'},
            {id: "full", label: "全职"},
            {id: "partTime", label: "兼职"},
            {id: "internship", label: "实习"},
            {id: "contract", label: "合同工"}
        ],
        // 工作年限
        workYearList: [
            {id: 'unlimited', label: '不限'},
            {id: "1nian", label: "1年以下"},
            {id: "3nian", label: "1-3年"},
            {id: "5nian", label: "3-5年"},
            {id: "10nian", label: "5-10年"},
            {id: "10yishang", label: "10年以上"},
            {id: "wujingyan", label: "无经验"},
        ],
        // 薪资
        salaryList: [
            {id: 'unlimited', label: '不限'},
            {id: 'customize', label: '自定义'},
            {id: '1000', label: '1K以下/月'},
            {id: '2000', label: '1K-2K/月'},
            {id: '4000', label: '2K-4K/月'},
            {id: '6000', label: '4K-6K/月'},
            {id: '10000', label: '8K-10K/月'},
            {id: '15000', label: '10K-15K/月'},
            {id: '25000', label: '25K以上/月'},
            {id: 'mianyi', label: '面议'},
        ],
        // 学历
        workEducationList: [
            {id: 'unlimited', label: '不限'},
            {id: "junior", label: "初中及以下"},
            {id: "high", label: "高中"},
        ],
        //性别
        genderList: [
            {id: 'unlimited', label: '不限'},
            {id: 'nan', label: '男'},
            {id: 'nv', label: '女'},
        ],
        // 公司福利
        companyWelfare: [
            {id: "wu", label: "五险一金"},
            {id: "jiao", label: "交通补贴"},
            {id: "canyin", label: "餐饮补贴"},
            {id: "jixiao", label: "绩效奖金"},
            {id: "nianzhong", label: "年终奖金"},
        ],
        //国籍
        cityList:[
            {id: "buxian", label: "不限"},
            {id: "china", label: "中国"},
            {id: "afuhan", label: "阿富汗"},
            {id: "xuliya", label: "叙利亚"},
        ],
        //民族
        nationalList:[
            {id: "unlimited", label: "不限"},
            {id: "hanzu", label: "汉族"},
            {id: "weiwuerzu", label: "维吾尔族"},
            {id: "huizu", label: "回族"},
        ],
        //婚姻状况
        maritalStatusList:[
            {id: "unlimited", label: "不限"},
            {id: "weihun", label: "未婚"},
            {id: "yihun", label: "已婚"},
            {id: "secret", label: "保密"},
        ],
        //政治面貌
        politicalList:[
            {id: "unlimited", label: "不限"},
            {id: "china", label: "中国共产党"},
            {id: "qita", label: "其他党派"},
            {id: "wudang", label: "无党派民主人士"},
            {id: "qunzhong", label: "群众"},
            {id: "gongqing", label: "共青团员"},
        ],
        //户口所在地
        nativePlaceList:[
            {id: "unlimited", label: "不限"},
            {id: "beijing", label: "北京"},
            {id: "shanghai", label: "上海"},
            {id: "tianjin", label: "天津"},
        ],
        //证件类型
        documentTypeList:[
            {id: "unlimited", label: "不限"},
            {id: "shsenfen", label: "身份证"},
            {id: "huzhao", label: "护照"},
            {id: "junguan", label: "军官证"},
        ],
        //最高学位
        highestDegreeList:[
            {id: "unlimited", label: "不限"},
            {id: "xueshi", label: "学士"},
            {id: "shuoshi", label: "硕士"},
            {id: "MBA", label: "MBA"},
            {id: "boshi", label: "博士"},
        ],
        //专业
        professionalList:[
            {id: "unlimited", label: "不限"},
            {id: "gongong", label: "公共卫生学"},
            {id: "huli", label: "护理学类"},
            {id: "waiyu", label: "外国语言文学累"},
        ],
        //企业规模
        enterpriseScaleList:[
            {id: "unlimited", label: "不限"},
            {id: "20", label: "20人以下"},
            {id: "50", label: "21-50人"},
            {id: "100", label: "51-100人"},
        ],
        //企业性质
        enterpriseNatureList:[
            {id: "unlimited", label: "不限"},
            {id: "waishang", label: "外商独资"},
            {id: "hezi", label: "合资"},
            {id: "shangshi", label: "上市公司"},
        ],
        //行业类别
        industryCategoriesList:[
            {id: "unlimited", label: "不限"},
            {id: "zhuanye", label: "专业服务(咨询/财会/人力资源/法律等)"},
            {id: "zhongjie", label: "中介服务"},
            {id: "zhiyao", label: "制药与生物工程"},
        ],
        //期望职能
        hopeWorkList:[
            {id: "unlimited", label: "不限"},
            {id: "jisuanji", label: "计算机/互联网/通信/电子"},
            {id: "xiaoshou", label: "销售/客服/技术支持"},
            {id: "kuaiji", label: "会计/金融/银行/保险"},
        ],
        //入职时间
        inductionTimeList:[
            {id: "buxian", label: "不限"},
            {id: "oneweek", label: "一周"},
            {id: "twoweek", label: "两周"},
            {id: "threeweek", label: "三周"},
        ],
        //期望年薪
        hopeAnnualSalaryList:[
            {id: "buxian", label: "不限"},
            {id: "1", label: "<20,000"},
            {id: "2", label: "20,000-50,000"},
            {id: "3", label: "50,000-100,000"},
        ],
        //语种
        languagesList:[
            {id: "buxian", label: "不限"},
            {id: "1", label: "英语"},
            {id: "2", label: "韩语"},
            {id: "3", label: "日语"},
        ],
        //能力Ability
        abilityList:[
            {id: "buxian", label: "不限"},
            {id: "normal", label: "普通"},
            {id: "good", label: "良好"},
            {id: "Proficient", label: "精通"},
        ],
        // 公司规模
        workScaleList:[
            {id: "buxian", label: "不限"},
            {id: "50", label: "50人以下"},
            {id: "150", label: "50-150人"},
            {id: "500", label: "150-500人"},
            {id: "1000", label: "500-1000人"},
            {id: "5000", label: "1000-5000人"},
            {id: "10000", label: "5000-10000人"},
            {id: "10000up", label: "10000以上"},
        ],
        // 所属行业
        workIndustryList: [
            {id: "buxian", label: "不限"},
            {id: "1", label: "中介服务"},
            {id: "2", label: "制药与生物工程"},
            {id: "3", label: "医疗与保健"},
            {id: "4", label: "医疗设备与器械"},
            {id: "5", label: "办公设备及用品"},
            {id: "6", label: "快速消费品"},
            {id: "7", label: "耐用消费品"},
            {id: "8", label: "玩具/礼物/工艺品/收藏品"},
        ],
        // 专业
        professionList: [
            {id: "buxian", label: "不限"},
            {id: "1", label: "公共卫生学"},
            {id: "2", label: "护理学类"},
            {id: "3", label: "外国语言文学类"},
            {id: "4", label: "地矿类"},
            {id: "5", label: "新闻传播学类"},
            {id: "6", label: "政治学类"},
            {id: "7", label: "工商管理学类"},
            {id: "8", label: "法医学类"},
            {id: "9", label: "海洋工程"},
            {id: "10", label: "地理科学类"},
            {id: "11", label: "抵制学类"},
        ],
        // 招聘类型
        recruitmentList: [
            {id: "0", label: "不限"},
            {id: "1", label: "校园招聘"},
            {id: "2", label: "社会招聘"},
            {id: "3", label: "实习生"},
            {id: "4", label: "海外招聘"}
        ]
    }

    getDataListByKey = function (key) {
        let data = this.data
        let keys = key.split(".")
        keys.forEach(k => {
            if (data) data = data[k]
        })
        return data || []
    }

    /**
     * 生命周期函数--监听页面加载
     */
    getDataLabelById = function (key, id) {
        let dataList = this.getDataListByKey(key)
        if (dataList) {
            let find = dataList.find(item => {
                return item.id === id
            })
            if (find) return find.label
        }
        return ""
    }

    /**
     * 根据索引值获取对应id
     */
    getIdByIndex = function (key, index) {
        let dataList = this.getDataListByKey(key)
        if (dataList) {
            let find = dataList.find((item, position) => {
                return index === position
            })
            if (find) return find.id
        }
        return ''
    }
    /**
     * 根据索引值获取对应label
     */
    getLabelByIndex = function (key, index) {
        let dataList = this.getDataListByKey(key)
        if (dataList) {
            let find = dataList.find((item, position) => {
                return index === position
            })
            if (find) return find.label
        }
        return ''
    }
    /**
     * 根据id获取对应value
     */
    getLabelById = function (key, id) {
        let dataList = this.getDataListByKey(key)
        if (dataList) {
            let index = dataList.findIndex(item => {
                return item.id === id
            })
            if (index > -1) return dataList[index].label
        }
        return ''
    }

    /**
     * 根据id值获取对应索引
     */
    getIndexById = function (key, id) {
        let dataList = this.getDataListByKey(key)
        if (dataList) {
            let index = dataList.findIndex(item => {
                return item.id === id
            })
            if (index > -1) return index
        }
        return null
    }

    /**
     * 查询字典数据
     * @param keys
     */
    getDictionaryList = function (keys) {
        let self = this
        self.$getChildDictionaryListByKeys({
            keys: keys
        }).then(res => {
            let dicData = {}
            keys.forEach(key => {
                let dataList = res[key] || []
                dataList.forEach(item => {
                    item.id = item.key
                    item.label = item.name
                    delete item.key
                    delete item.name
                })
                dicData[key] = [{id: null, label: "不限"}].concat(dataList)
            })
            self.setData({
                dicData: dicData
            })
        })
    }

    /**
     * 根据code获取城市名称
     * @param code
     */
    getPlaceNameByCode = function (code) {
        let propObject = CityData["86"]
        for (let key in propObject) {
            if (code === key) {
                return propObject[key]
            }
        }
        return '不限'
    }

    /**
     * 根据code数组获取城市名称
     * @param code
     */
    getPlaceNameByCodeList = function (codeList) {
        let propObject = CityData["86"]
        let city = null
        for (let key in propObject) {
            if (codeList[0] === key) {
                city = propObject[key]
                let cityObject = CityData[key]
                for (let cityKey in cityObject) {
                    if (codeList[1] === cityKey) {
                        city += "-" + cityObject[cityKey]
                        let areaObject = CityData[cityKey]
                        if (areaObject) {
                            for (let areaKey in areaObject) {
                                if (codeList[2] === areaKey) {
                                    city += "-" + areaObject[areaKey]
                                }
                            }
                        }

                    }
                }
            }
        }
        return city
    }
}
