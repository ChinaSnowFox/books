const express = require('express')
const {getMenus,postMenus,putMenus,deleteMenus} = require('../hooks/menu')

const router = express.Router()

router.get('/getmenu',getMenus)
router.post('/postmenu',postMenus)
router.put('/putmenu',putMenus)
router.delete('/deletemenu/:id',deleteMenus)
router.get('/')
module.exports = router
