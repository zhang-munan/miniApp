const app = getApp()
import dataMixin from "../../../mixin/dataMixin"

app.globalData.gdx.createApp({
    mixins: [dataMixin],
    /**
     * 页面的初始数据
     */
    data: {
        navbarHeight: wx.getStorageSync("navbarHeight"),
        scrollTop: 0,
        navbar: null,
        exampleList: [
            {
                id: '1',
                title: 'React',
                introduction: '生命就像一盒巧克力，结果往往出人意料',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png'
            },
            {
                id: '2',
                title: 'Vue',
                introduction: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png'
            },
            {
                id: '3',
                title: 'Java',
                introduction: '宇宙要是太谦虚了，明明拥有了一切，但还是叫做太空',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png'
            },
            {
                id: '4',
                title: '微信小程序',
                introduction: '生命就像一盒巧克力，结果往往出人意料',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png'
            },
            {
                id: '5',
                title: 'uniApp',
                introduction: '生命就像一盒巧克力，结果往往出人意料',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png'
            },
            {
                id: '6',
                title: 'C语言',
                introduction: '生命就像一盒巧克力，结果往往出人意料',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png'
            },
            {
                id: '7',
                title: 'VB',
                introduction: '生命就像一盒巧克力，结果往往出人意料',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png'
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    load: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    show: function () {
        this.init()
    },

    /**
     * 初始化数据
     */
    init() {
        this.navbar = this.selectComponent('#navbar')
    },

    /**
     * 监听顶部距离
     * @param ev
     */
    bindScroll(e){
        if (e.detail.scrollTop > 28) {
            this.navbar.changeBgc(true)
        } else {
            this.navbar.changeBgc(false)
        }
    },
})
