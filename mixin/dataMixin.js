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
