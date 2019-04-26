
var actions = {
  /**
   *
   * @api {post} /m/login.do  登录
   * @apiName 登录
   * @apiGroup login
   * @apiVersion 1.0.0
   * @apiDescription 接口详细描述
   *
   * @apiParam {String} username 用户名
   * @apiParam {String} password 密码
   *
   * @apiSuccess {String} status 结果码
   * @apiSuccess {String} msg 消息说明
   * @apiSuccessExample Success-Response:
   *  HTTP/1.1 200 OK
   * {
   * status:0,
   * msg:'success',
   * data:{}
   *  }
   *
   *  @apiError All 对应<code>id</code>的用户没找到
   *  @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 200
   *  {
   *   code:-1,
   *   msg:'user not found',
   *   }
   */
  sgqy: function (req, res) {
    res.send({ success: 1, data: "大哥啊真是好大哥真是个大傻吊啊! " })
  },
  api: function (req, res) {
    res.sendFile('f:/github/dockerFile/doc/index.html')
  },
};
module.exports = actions;