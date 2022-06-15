const express = require('express')
const router = express.Router()
const {getArea,postArea,putArea,deleteArea,getAreaId} = require('../hooks/area')


router.get('/getArea',getArea)
router.post('/postArea',postArea)
router.get('/getarea/:id',getAreaId)
router.put('/putArea',putArea)
router.delete('/deleteArea/:id',deleteArea)
module.exports = router
