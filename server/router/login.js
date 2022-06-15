const express = require('express')
const multiparty = require('multiparty')
const router = express.Router()
const {loginParse,info,code,signIn} = require('../hooks/login')
const token = require('../model/token')

// 登录
router.post('/postlogin',loginParse)
// 验证码
router.get('/getcode',code)
// 注册
router.post('/postSign',signIn)
module.exports = router
