const mongoose = require('mongoose')

// 用户信息表
const info = new mongoose.Schema({
    // 用户名
    user_name: {
        type:String,
        requird:true
    },
    // 登录账号
    log_name:{
        type:String,
        requird:true
    },
    // 权限编码
    sysrolecode:{
        type:String,
        requird:true
    },
    // 登录密码
    password:{
        type:String,
        requird:true
    },
    // 创建时间
    create_time:{
        type:Date,
        defalut:Date.now()
    },
    // 手机号
    phone:{
        type:Number,
        requird:true
    },
    // 权限名
    sysroleName:{
        type:String,
        requird:true
    },
    // 年龄
    sex:{
        type:Number,
        requird:true
    },
    // 邮箱
    email:{
        type:String,
        requird:true
    }
})

module.exports = info

