const express = require('express')
const router = express.Router()
const { Sign } = require('../db')
const login = require('./login.js')
const menu = require('./menu.js')
const {decode} = require('../model/token')
router.use('/',login)
router.use(async function (req,res,next) {
    if (req.headers['accept-token']){
        const token = decode(req.headers['accept-token'])
        const sign = await Sign.findOne({username:token})
        if (sign.username===token){
            req.query = {
                ...req.query,
                sign
            }
            next()
            return ;
        }
        return res.status(404).send('请求头不正确')
    }
    return res.status(405).send('没有请求头')

})
// 菜单
router.use('/menu',menu)
// 用户管理
router.use('/role',require('./role.js'))
// 区域管理
router.use('/area',require('./area.js'))
// 权限管理
router.use('/classes',require('./classes.js'))
// 图片上传
router.use('/img',require('./imgs.js'))

module.exports = router
