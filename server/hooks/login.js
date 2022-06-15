const multiparty = require('multiparty')
const {Sign, Login} = require('../db')
const form = new multiparty.Form()

const svgCaptcha = require('svg-captcha')
const {encrypt, decode, token} = require('../model/token')
function svgConfig () {
    const config = {
        size: 5, // 验证码长度
        noise: 6, // 干扰线条数量
        fontSize: 30,
        height: 32,
        inverse:false
    }
    return svgCaptcha.create(config)
}







// 图形验证码
async function code (req,res) {
    const {text,data} = await svgConfig()
    return res.status(200).send({
        data:{
            data,
            text
        },
        code:200,
        message:'success'
    })
}
// 登录
async function loginParse (req,res) {
    if(req.body.username&&req.body.password&&req.body.code){
        const {username,password,code} = req.body
        const user = await Sign.findOne({username})
        if (user){
            if (decode(user.password)===password){
                const users = await Login.findOne({username})
                const send = users || new Login({username,password,id:token(username)})
                if (!users) {
                    send.save()
                }
                return res.status(202).send({
                    code:202,
                    message:'success',
                    data:{
                        send,
                        token:encrypt(username)
                    }
                })
            }
            return res.status(404).send('密码不正确')
        }
        return res.status(404).send('账号不正确')
    }
    return res.status(404).send('请先输入账号密码和验证码')

}

// 注册校验
async function signIn (req,res,next) {
    try {
        form.parse(req,async function (err,files,file) {
            if (files?.username && files?.email && files?.password && files?.infoname && files?.phonenumber) {
                const {username,email,password,infoname,phonenumber:phone} = files
                // 查找是否重复
                const user = await Sign.findOne({username:username.join(',')})
                const emails = await Sign.findOne({email:email.join(',')})
                const infonames = await Sign.findOne({infoname:infoname.join(',')})
                const phones = await Sign.findOne({phone:phone.join(',')})
                if (user){ return res.status(408).send('登录账号已经被注册') }
                if (emails) {return res.status(408).send('邮箱已经被注册') }
                if (infonames) {return res.status(408).send('用户名已经被注册')}
                if (phones) {return res.status(408).send('手机号已经被注册')}
                // 密码加密
                const pwd = encrypt(password.join(','))
                if (pwd === '1'){
                    return res.status(500).send('password encrypt no')
                }
                // 连接并存储数据库函数
                const info = new Sign({
                    username:username.join(','),
                    email:email.join(','),
                    infoname:infoname.join(','),
                    phone:phone.join(','),
                    password:pwd,
                })
                info.save()
                return res.status(202).json({
                    code:202,
                    message:'success',
                    data:info,
                })
            }
            return res.status(408).send('Please pass in form format')
        })
    }catch (e) {
        return res.status(410).send(e)
    }
}


module.exports = {
    loginParse,
    code,
    signIn,
}
