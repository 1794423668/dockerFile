const user2 = require(ROOT_DIR + "/common/dal/user");
var uuid = require('uuid');
var actions = {

  addUser: async function (req, res) {
    let user = await user2.create({
      userId: uuid.v1(),
      userName: "Doe"
    });
    console.log(user.get({ 'plain': true }));
    res.send({ success: 1, data: "操作成功" })
  },
  addCommit: async function (req, res) {
    var userCom = await user2.build({
      userId: uuid.v1(),
      userName: "Doe"
    });
    var userCom = await userCom.save();
    console.log(userCom.get({ 'plain': true }));
    res.send({ success: 1, data: "操作成功" })
  },
  updateUser: async function (req, res) {
    var filter = { userName: "lty" };
    var userCom = await user2.update({
      userName: "lty1"
    }, {
        where: filter
      }).then(ok =>  res.json({ success: '1', message: "操作成功" }))
      .catch(e => res.json({ success: '0', message: e }));;
    // res.send({ success: 1, data: "操作成功" })
  },
};
module.exports = actions;