// 路由设置
export default {

    /**
     * 跳转到项目详情画面
     * @param e
     */
    toProDetailPage(e) {
        this.navigateTo('/pages/detail/proDetail/proDetail', { id: e.currentTarget.dataset.id });
    },
}
