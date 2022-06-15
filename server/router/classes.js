const express = require('express')
const router = express.Router()

const {List,Delete,add,put,getId} = require('../hooks/classes')


router.get('/classesList',List)
router.post('/classesAdd',add)
router.put('/classesPut',put)
router.delete('/classesDelete/:id',Delete)
router.get('/classesID/:id',getId)
module.exports = router
