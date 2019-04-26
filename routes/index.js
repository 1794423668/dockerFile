
var actions = {
  /**
   * @api {get} /index/sgqy 测试接口
   * @apiVersion 0.1.0
   * @apiName sgqy
   * @apiGroup leTv
   * @apiSuccess {String} firstname Firstname of the User.
   * @apiSuccess {String} lastname  Lastname of the User.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "firstname": "John",
   *       "lastname": "Doe"
   *     }
   *
   * @apiError UserNotFound The id of the User was not found.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": "UserNotFound"
   *     }
   */
  sgqy: function (req, res) {
    res.send({ success: 1, data: "大哥啊真是好大哥真是个大傻吊啊! " })
  },
  api: function (req, res) {
    res.sendFile('f:/github/dockerFile/doc/index.html')
  },
};
module.exports = actions;