import request from '@/utils/request'
export default {
  // 直接发布文章
  sendArticle(articleLy) {
    return request({
      url: `/front/releaseinfo/article-ly/sendArticle`,
      method: 'post',
      data: articleLy
    })
  },
  // 保存文章
  saveArticle(articleLy) {
    return request({
      url: `/front/releaseinfo/article-ly/saveArticle`,
      method: 'post',
      data: articleLy
    })
  },
  // 修改保存文章
  updateArticle(articleLy) {
    return request({
      url: `/front/releaseinfo/article-ly/updateArticle`,
      method: 'post',
      data: articleLy
    })
  },
  // 修改发布文章或发布保存文章
  updateSendArticle(articleLy) {
    return request({
      url: `/front/releaseinfo/article-ly/updateSendArticle`,
      method: 'post',
      data: articleLy
    })
  },
  // 分页查询文章
  pagingQueryArticles(current, limit) {
    return request({
      url: `/front/releaseinfo/article-ly/pagingQueryArticles/${current}/${limit}`,
      method: 'get'
    })
  },
  // 收藏最多文章排行
  pagingQueryArticlesCollect(current, limit) {
    return request({
      url: `/front/releaseinfo/article-ly/pagingQueryArticlesCollect/${current}/${limit}`,
      method: 'get'
    })
  },
  // 阅读最多文章排行
  pagingQueryArticlesRead(current, limit) {
    return request({
      url: `/front/releaseinfo/article-ly/pagingQueryArticlesRead/${current}/${limit}`,
      method: 'get'
    })
  },
  // 关键字自动查询
  Keyword(content) {
    return request({
      url: `/front/releaseinfo/article-ly/Keyword/${content}`,
      method: 'get'
    })
  },
  // 分页查询文章根据关键字
  pagingQueryArticlesKeyword(current, limit, content) {
    return request({
      url: `/front/releaseinfo/article-ly/pagingQueryArticlesKeyword/${current}/${limit}/${content}`,
      method: 'get'
    })
  },
  // 查询所有用户的数量
  getAuthorNumber() {
    return request({
      url: `/front/usercenter/ucenter-member-ly/getAuthorNumber`,
      method: 'get'
    })
  },
  // 分页查询作者(用户)列表 已登录
  getPageAuthorList(current, limit) {
    return request({
      url: `/front/usercenter/ucenter-member-ly/getPageAuthorList/${current}/${limit}`,
      method: 'get'
    })
  },
  // 分页查询作者(用户)列表 未登录
  getPageAuthorListNotLogin(current, limit) {
    return request({
      url: `/front/usercenter/ucenter-member-ly/getPageAuthorListNotLogin/${current}/${limit}`,
      method: 'get'
    })
  },
  // 关注
  like1(id) {
    return request({
      url: `/front/usercenter/attention-ly/like/${id}`,
      method: 'post'
    })
  },
  // 取消关注
  noLike(id) {
    return request({
      url: `/front/usercenter/attention-ly/noLike/${id}`,
      method: 'delete'
    })
  },
  // 是否已经关注
  isLike(id) {
    return request({
      url: `/front/usercenter/attention-ly/isLike/${id}`,
      method: 'get'
    })
  },
  // 准确查询一个作者(用户) 已登录
  getAuthorOne(input) {
    return request({
      url: `/front/usercenter/ucenter-member-ly/getAuthorOne/${input}`,
      method: 'post'
    })
  },
  // 准确查询一个作者(用户) 未登录
  getAuthorOneNoLogin(input) {
    return request({
      url: `/front/usercenter/ucenter-member-ly/getAuthorOneNoLogin/${input}`,
      method: 'post'
    })
  },
  // 根据文章id查询文章内容
  getArticleById(id) {
    return request({
      url: `/front/releaseinfo/article-ly/getArticleById/${id}`,
      method: 'get'
    })
  },
  // 根据会员id查询作者信息
  getAuthorInfo(memberId) {
    return request({
      url: `/front/usercenter/ucenter-member-ly/getAuthorInfo/${memberId}`,
      method: 'get'
    })
  },
  // 当前用户是否收藏了该文章
  isCollectionArticle(articleID) {
    return request({
      url: `/front/releaseinfo/article-collect-ly/isCollectionArticle/${articleID}`,
      method: 'get'
    })
  },
  // 收藏
  CollectionArticle(articleID) {
    return request({
      url: `/front/releaseinfo/article-collect-ly/CollectionArticle/${articleID}`,
      method: 'post'
    })
  },
  // 取消收藏
  deleteCollection(articleID) {
    return request({
      url: `/front/releaseinfo/article-collect-ly/deleteCollection/${articleID}`,
      method: 'delete'
    })
  },
  // 当前用户是否点赞了该文章
  isLikeArticle(articleID) {
    return request({
      url: `/front/releaseinfo/article-like-ly/isLikeArticle/${articleID}`,
      method: 'get'
    })
  },
  // 点赞
  LikeArticle(articleID) {
    return request({
      url: `/front/releaseinfo/article-like-ly/LikeArticle/${articleID}`,
      method: 'post'
    })
  },
  // 取消点赞
  deleteLike(articleID) {
    return request({
      url: `/front/releaseinfo/article-like-ly/deleteLike/${articleID}`,
      method: 'delete'
    })
  }

}
