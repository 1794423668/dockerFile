const db = require('./db');
//引入框架
const Sequelize = require('sequelize');
//初始化链接（支持连接池）
var sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    port:db.port,
    dialect: 'postgres',
    // dialect: 'mysql' | 'sqlite' | 'postgres' | 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    //默认选择的database
    // define: {
    //     schema: "core"
    // },
    // SQLite only
    storage: 'path/to/database.sqlite'
});
// //定义数据模型
// var User = sequelize.define('user', {
//     username: Sequelize.STRING,
//     birthday: Sequelize.DATE
// });
// sequelize.sync().then(function () {
// }).then(function (jane) {
//     //获取数据
//     console.log(jane.get({
//         plain: true
//     }));
// }).catch(function (err) {
//     //异常捕获
//     console.log('Unable to connect to the database:', err);
// });
module.exports = sequelize;//导出
