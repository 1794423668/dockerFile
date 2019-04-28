
var actions = {
  /**
   *
   * @api {get} /index/sgqy sgqy
   * @apiName sgqy
   * @apiGroup 数据维护
   * @apiVersion 1.0.0
   * @apiDescription 接口详细描述
   * 
   * 
   * @api {get} /users
   * @apiSuccess {Object[]} profiles       List of user profiles.
   * @apiSuccess {Number}   profiles.age   Users age.
   * @apiSuccessExample Success-Response:
   *  HTTP/1.1 200 OK
   * {
   * success:1,
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
    res.send({ success: 1, data: [{age:10},{age:11}] })
  },
  api: function (req, res) {
    res.sendFile('f:/github/dockerFile/doc/index.html')
  },
};
module.exports = actions;