// 路由设置
export default {

    /**
     * 跳转到项目详情画面
     * @param e
     */
    toProDetailPage(e) {
        this.navigateTo('/pages/detail/proDetail/proDetail', { id: e.currentTarget.dataset.id });
    },

    /**
     * 跳转到项目详情画面
     * @param e
     */
    toConsumptionPage(e) {
        this.navigateTo('/pages/detail/consumption/consumption', { id: e.currentTarget.dataset.id });
    },

    // /**
    //  * 跳转职位详情
    //  * @param e
    //  */
    // toHomeDetail: function(e){
    //   let data = e.currentTarget.dataset.data
    //   this.navigateTo('/pages/tab/home/home', data);
    // },
    //
    // /**
    //  * 职业详情
    //  * @param e
    //  */
    // toJobDetailPage(e) {
    //   this.navigateTo('/pages/position/detail/detail', { id: e.currentTarget.dataset.id,ishistory:e.currentTarget.dataset.ishistory })
    // },
    // /**
    //  * 职业详情
    //  * @param e
    //  */
    // toSharerDetailsPage(e) {
    //   let paramId = e
    //   if (e.currentTarget) {
    //     paramId = e.currentTarget.dataset.id
    //   }
    //   this.navigateTo('/pages/position/sharerDetails/sharerDetails', { id: paramId })
    // },
    // /**
    //  * 职位分享页面
    //  * @param e
    //  */
    // toJobSharingPage(e) {
    //   this.navigateTo('/pages/position/detail/detail', { id: '' })
    // },
    //
    // /**
    //  * 我的钱包
    //  * @param e
    //  */
    // toWalletListPage(e) {
    //   this.navigateTo('/pages/mine/wallet/wallet')
    // },
    //
    // /**
    //  * 已分享职位
    //  * @param e
    //  */
    // toSharedListPage(e) {
    //   this.navigateTo('/pages/mine/shared/shared')
    // },
    //
    // /**
    //  * 已投递职位
    //  * @param e
    //  */
    // toDeliveredListPage(e) {
    //   this.navigateTo('/pages/mine/delivered/delivered')
    // },
    //
    // /**
    //  * 收藏职位
    //  * @param e
    //  */
    // toCollectListPage(e) {
    //   this.navigateTo('/pages/mine/collect/collect')
    // },
    //
    // /**
    //  * 我的邮箱
    //  * @param e
    //  */
    // toMyEmailPage(e) {
    //   this.navigateTo('/pages/mine/email/email')
    // },
    //
    // /**
    //  * 我的简历/公司列表
    //  * @param e
    //  */
    // toResumeListPage(e) {
    //   this.navigateTo('/pages/mine/resume/resume')
    // },
    //
    // /**
    //  * 我的简历/公司列表
    //  * @param e
    //  */
    // toCompanyListPage(e) {
    //   this.navigateTo('/pages/mine/company/company')
    // },
    //
    // /**
    //  * 添加/修改邮箱
    //  * @param e
    //  */
    // toAddEmailPage(e) {
    //   this.navigateTo('/pages/mine/addEmail/addEmail', { id: e.currentTarget.dataset.id||'' })
    // },
    //
    // /**
    //  * 编辑公司信息
    //  * @param e
    //  */
    // toEditCompanyPage(e) {
    //   let paramId = e
    //   if (e.currentTarget) {
    //     paramId = e.currentTarget.dataset.id
    //   }
    //   this.navigateTo('/pages/mine/editCompany/editCompany', { id: paramId })
    // },
    // /**
    //  * 公司信息
    //  * @param e
    //  */
    // toCompanyInfoPage(e) {
    //   let paramId = e
    //   if (e.currentTarget) {
    //     paramId = e.currentTarget.dataset.id
    //   }
    //   this.navigateTo('/pages/mine/companyDetail/companyDetail', { id: paramId })
    // },
    //
    // /**
    //  * 选择匹配职位
    //  * @param e
    //  */
    // bindSearchJob(e) {
    //   this.navigateTo('/pages/workShare/jobLists/jobLists', e.currentTarget.dataset.param)
    // },
    //
    // /**
    //  * 编辑培训经历
    //  */
    // toEditPosition(e) {
    //   this.navigateTo('/pages/workShare/editPosition/editPosition', {
    //     id: e.currentTarget.dataset.id,
    //     type: e.currentTarget.dataset.type,
    //     companyname: e.currentTarget.dataset.companyname,
    //     companyid: e.currentTarget.dataset.companyid,
    //     jobId: e.currentTarget.dataset.jobid,
    //   })
    // },
    //
    // /**
    //  * 添加红利
    //  * @param e
    //  */
    // toSelectWelfarePage(e) {
    //   let param = e.currentTarget.dataset.param
    //   console.log("参数:", param)
    //   this.navigateTo('/pages/workShare/welfare/welfare', param)
    // },
    //
    // /**
    //  * 添加红利
    //  * @param e
    //  */
    // toSendRedPacket(e) {
    //   let postId = e.currentTarget.dataset.id
    //   this.navigateTo('/pages/workShare/redPacket/redPacket', {postId: postId})
    // },
    //
    // /**
    //  * 人气排行榜
    //  * @param e
    //  */
    // toHotListPage(e) {
    //   this.navigateTo('/pages/workShare/hotList/hotList')
    // },
    //
    // /**
    //  * 搜索
    //  */
    // toSearchPositionPage(){
    //   this.navigateTo('/pages/search/position/search')
    // },
    //
    // /**
    //  * 搜索
    //  */
    // toSearchCompanyPage(){
    //   this.navigateTo('/pages/search/company/search')
    // },
    //
    // /**
    //  * 粘贴上传
    //  */
    // toPasteUploadPage(e){
    //   this.navigateTo('/pages/position/pasteUpload/pasteUpload', {postId: e})
    // },
    //
    // /**
    //  * 图片简历上传
    //  */
    // toImageUploadPage(e){
    //   this.navigateTo('/pages/position/imageUpload/imageUpload', {postId: e})
    // },
    //
    // /**
    //  * 我要推荐
    //  */
    // toRecommendPage(){
    //   this.navigateTo('/pages/position/recommend/recommend')
    // },
    //
    // /**
    //  * 批量上传
    //  */
    // toSharePositionPage(){
    //   this.navigateTo('/pages/position/sharePosition/sharePosition')
    // },
    //
    // /**
    //  * 选择分享职位
    //  */
    // toBatchSharingPage(e){
    //   this.navigateTo('/pages/position/batchSharing/batchSharing',{ id: e })
    // },
    //
    // /**
    //  * 生成海报
    //  */
    // toPosterPage(data){
    //   this.navigateTo('/pages/position/poster/poster',data);
    // },
    // /**
    //  * 已有简历
    //  */
    // toHaveResumePage(e){
    //   this.navigateTo('/pages/mine/resumDetail/haveResume/haveResume', {postId: e})
    // },
    // /**
    //  * 简历编辑页
    //  * @param query
    //  */
    // toResumeHome:function (param) {
    //   this.navigateTo('/pages/mine/resumDetail/resumeHome/resumeHome', param);
    // },
    // /**
    //  * 简历查看页
    //  * @param query
    //  */
    // toResumeInfo:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/resumeInfo/resumeInfo', data);
    // },
    // /**
    //  * 基本信息
    //  * @param query
    //  */
    // toBasicInfo:function (e) {
    //   let data = e.currentTarget.dataset.data
    //   this.navigateTo('/pages/mine/resumDetail/basicInfo/basicInfo', data);
    // },
    // /**
    //  * 工作经历
    //  * @param query
    //  */
    // toWorkExperience:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/workExperience/workExperience', data);
    // },
    // /**
    //  * 工作经历List
    //  * @param query
    //  */
    // toWorkExperienceList:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/workExperienceList/workExperienceList', data);
    // },
    // /**
    //  * 教育经历
    //  * @param query
    //  */
    // toEducationExperience:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/educationExperience/educationExperience', data);
    // },
    // /**
    //  * 教育经历List
    //  * @param query
    //  */
    // toEducationExperienceList:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/educationExperienceList/educationExperienceList', data);
    // },
    // /**
    //  * 求职意向
    //  * @param query
    //  */
    // toObjective:function (e) {
    //   let data = e.currentTarget.dataset.data
    //   this.navigateTo('/pages/mine/resumDetail/objective/objective', data);
    // },
    // /**
    //  * 项目经历
    //  * @param query
    //  */
    // toExperienceProject:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/experienceProject/experienceProject', data);
    // },
    // /**
    //  * 项目经历List
    //  * @param query
    //  */
    // toExperienceProjectList:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/experienceProjectList/experienceProjectList', data);
    // },
    // /**
    //  * 培训经历
    //  * @param query
    //  */
    // toTrainedExperience:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/trainedExperience/trainedExperience', data);
    // },
    // /**
    //  * 培训经历List
    //  * @param query
    //  */
    // toTrainedExperienceList:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/trainedExperienceList/trainedExperienceList', data);
    // },
    // /**
    //  * 语言能力
    //  * @param query
    //  */
    // toLanguageAbility:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/languageAbility/languageAbility', data);
    // },
    // /**
    //  * 语言能力List
    //  * @param query
    //  */
    // toLanguageAbilityList:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/languageAbilityList/languageAbilityList', data);
    // },
    // /**
    //  * 证书
    //  * @param query
    //  */
    // toCertificate:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/certificate/certificate', data);
    // },
    // /**
    //  * 证书List
    //  * @param query
    //  */
    // toCertificateList:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/certificateList/certificateList', data);
    // },
    // /**
    //  * 专业技能
    //  * @param query
    //  */
    // toProfessionalSkills:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/professionalSkills/professionalSkills', data);
    // },
    // /**
    //  * 专业技能List
    //  * @param query
    //  */
    // toProfessionalSkillsList:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/professionalSkillsList/professionalSkillsList', data);
    // },
    // /**
    //  * 附加信息
    //  * @param query
    //  */
    // toAdditionalInfo:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/additionalInfo/additionalInfo', data);
    // },
    // /**
    //  * 附加信息List
    //  * @param query
    //  */
    // toAdditionalInfoList:function (data) {
    //   this.navigateTo('/pages/mine/resumDetail/additionalInfoList/additionalInfoList', data);
    // },
    // /**
    //  * 附加信息List
    //  * @param query
    //  */
    // toSavePoster:function (data) {
    //   this.navigateTo('/pages/position/savePoster/savePoster', data);
    // },
}
