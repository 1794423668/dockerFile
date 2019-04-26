
var actions = {
  /**
   * @api {get} /index/sgqy [测试接口]
   * @param {*} req 
   * @param {*} res 
   */
  sgqy: function (req, res) {
    res.send({ success: 1, data: "大哥啊真是好大哥真是个大傻吊啊! " })
  },
  api: function (req, res) {
    res.sendFile(__dirname + '/doc/index.html')
  },
};
module.exports = actions;
res.sendFile(__dirname + '/doc/index.html')