// 注册表
const sign = {
    // 邮箱
    email:{
        type:String,
        requird:true,
    },
    // 登录账号
    username:{
        type:String,
        requird:true,
    },
    // 登录密码
    password:{
        type:String,
        requird:true,
    },
    // 用户名
    infoname:{
        type:String,
        requird:true,
    },
    // 手机号
    phone:{
        type:String,
        requird:true,
    },
    // 权限名称
    sysroleName:{
        type:String,
        requird:false
    },
    // 权限编码
    sysrolecode:{
        type:String,
        requird:false
    },
    // 年龄
    sex:{
        type:Number,
        requird:false
    },
}
module.exports = sign
