const  sequelize  =require("../config/Sequelize");
const { Sequelize } = sequelize;
const dbTypeConfig = require("../config/db");
// const dbPrefix = require("../dal/zhzl/dbPrefix");
// var seq = instance(dbTypeConfig.db);
// var User = sequelize.define('user', {
//     username: Sequelize.STRING,
//     birthday: Sequelize.DATE
// });

var User = sequelize.define(
    'user',
    {

        userId: {
            field: 'user_id',
            primaryKey: true,
            type: Sequelize.UUID,
            allowNull: false
        },
        userName: {
            field: 'user_name',
            type: Sequelize.STRING,
            allowNull: false
        },
        userIcon: {
            field: 'user_icon',
            type: Sequelize.STRING,
            allowNull: true
        },
        title: {
            field: 'title',
            type: Sequelize.STRING,
            allowNull: true
        },
        gender: {
            field: 'gender',
            type: Sequelize.ENUM('MALE', 'FEMALE'),
            allowNull: true
        },
        birth: {
            field: 'birth',
            type: Sequelize.STRING,
            allowNull: true
        },
        mail: {
            field: 'mail',
            type: Sequelize.STRING,
            allowNull: true
        },
        tel: {
            field: 'tel',
            type: Sequelize.STRING,
            allowNull: true
        },
        mobile: {
            field: 'mobile',
            type: Sequelize.STRING,
            allowNull: true
        },
        updateTime: {
            field: 'update_time',
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        tableName: 'user',
        timestamps: false,
        freezeTableName: true
    }


);
//自动创建表
// sequelize
//   .sync()
//   .then(() => {
//     console.log('init db ok')
//   })
//   .catch(err => {
//     console.log('init db error', err)
//   })
sequelize.sync().then(function() {})
//初始化数据

// // User.create({
// //     userId: 23,
// //     userName: '老杨',
// //    
// // });

module.exports = User;