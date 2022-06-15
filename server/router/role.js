const express = require('express')
const router = express.Router()
const {getRole,getIDInfo,putInfo,deleteInfo,postInfo} = require('../hooks/role.js')

// 获取用户信息数据
router.get('/getrole',getRole)
// 根据id获取用户信息
router.get('/getroleinfo/:id',getIDInfo)
// 编辑用户信息
router.put('/putroleinfo',putInfo)
// 删除用户信息
router.delete('/deleteinfo/:id',deleteInfo)
// 添加用户信息
router.post('/postinfo',postInfo)
module.exports = router
