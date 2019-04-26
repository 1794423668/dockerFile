
var actions = {
  /**
   * @api {get} /index/sgqy [测试接口]
   */
  sgqy: function (req, res) {
    res.send({ success: 1, data: "大哥啊真是好大哥真是个大傻吊啊! " })
  },
  api: function (req, res) {
    res.sendFile ('f:/github/dockerFile/doc/index.html')
  },
};
module.exports = actions;