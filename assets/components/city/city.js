import CityData from "../../../class/gdx/utils/cityData";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /** 标题 */
    title: {
      value: null,
      type: String
    },
    /** 占位符 */
    placeholder: {
      value: "",
      type: String
    },
    /** 占位符 */
    border: {
      value: false,
      type: Boolean
    },
    must: {
      type: Boolean,
      value: false
    },
    threeLevel: {
      value: false,
      type: Boolean
    },
    value: {
      type: Array,
      value: [],
      observer: function(v, value2){
        if (v.length > 1) {
          let showValue = []
          // 在组件实例进入页面节点树时执行
          let prop = [], city = [], country = []

          let propObject = CityData["86"]
          let propIndex = 0
          for (let key in propObject) {
            prop.push({
              code: key,
              label: propObject[key]
            })
            if (v[0] === key) {
              showValue.push(propIndex)
              let cityObject = CityData[key]
              let cityIndex = 0
              for (let ckey in cityObject) {
                city.push({
                  code: ckey,
                  label: cityObject[ckey]
                })
                if (v[1] === ckey) {
                  showValue.push(cityIndex)
                  let countryObject = CityData[ckey]
                  let countryIndex = 0
                  for (let okey in countryObject) {
                    country.push({
                      code: okey,
                      label: countryObject[okey]
                    })
                    if (v[2] === okey) {
                      showValue.push(countryIndex)
                    }
                    countryIndex++
                  }
                }
                cityIndex ++
              }
            }
            propIndex ++
          }

          let cityValueLabel = prop[showValue[0]].label + "," + city[showValue[1]].label
          if (showValue.length > 2) {
            cityValueLabel = cityValueLabel + "," + country[showValue[2]].label
          }

          this.setData({
            cityData: this.data.threeLevel?[prop, city, country]:[prop, city],
            showCityValue: showValue,
            cityValueLabel: cityValueLabel
          })
        } else {
          this.initData()
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cityData: [[],[]],
    cityValue: [],
    showCityValue: [],
    cityValueLabel: ""
  },

  lifetimes: {
    attached: function() {
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {

    initData: function (data) {
      // 在组件实例进入页面节点树时执行
      let prop = [], city = [], country = []
      let propObject = CityData["86"]
      for (let key in propObject) {
        prop.push({
          code: key,
          label: propObject[key]
        })
      }
      let cityObject = CityData["110000"]
      for (let key in cityObject) {
        city.push({
          code: key,
          label: cityObject[key]
        })
      }
      let countryObject = CityData["110100"]
      for (let key in countryObject) {
        country.push({
          code: key,
          label: countryObject[key]
        })
      }
      this.setData({
        cityData: this.data.threeLevel?[prop, city, country]:[prop, city],
      })
    },

    bindcolumnchange: function (e) {
      let column = e.detail.column
      let value = e.detail.value

      let city = [], country = []
      switch (column) {
        case 0:
          let cityObject = CityData[this.data.cityData[0][value].code]
          for (let key in cityObject) {
            city.push({
              code: key,
              label: cityObject[key]
            })
            if (country.length <= 0) {
              let countryObject = CityData[key]
              for (let key in countryObject) {
                country.push({
                  code: key,
                  label: countryObject[key]
                })
              }
            }
          }
          this.setData({
            cityData: this.data.threeLevel?[this.data.cityData[0], city, country]:[this.data.cityData[0], city],
            showCityValue: [value, 0, 0]
          })
          break
        case 1:
          let countryObject = CityData[this.data.cityData[1][value].code]
          for (let key in countryObject) {
            country.push({
              code: key,
              label: countryObject[key]
            })
          }
          this.setData({
            cityData: this.data.threeLevel?[this.data.cityData[0], this.data.cityData[1], country]:[this.data.cityData[0], this.data.cityData[1]],
            showCityValue: [this.data.showCityValue[0], value, 0]
          })
          break
      }

    },
    bindchange: function (e) {
      let prop = this.data.cityData[0][e.detail.value[0]]
      let city = this.data.cityData[1][e.detail.value[1]]


      let cityValue = [], cityLabel = []
      if (prop) {
        cityValue.push(prop.code)
        cityLabel.push(prop.label)
      }
      if (city) {
        cityValue.push(city.code)
        cityLabel.push(city.label)
      }

      if (this.data.threeLevel) {
        let country = this.data.cityData[2][e.detail.value[2]]
        if (country) {
          cityValue.push(country.code)
          cityLabel.push(country.label)
        }
      }

      console.log("xxxxx")
      this.setData({
        cityValue: cityValue,
        showCityValue:  e.detail.value,
        cityValueLabel: cityLabel.toString()
      })
      this.triggerEvent('change', {
        value: this.data.cityValue
      });
    }
  }
})
