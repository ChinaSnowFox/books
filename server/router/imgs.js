const express = require('express')
const router = express.Router()

router.post('/upload',async (req,res) => {
    console.log(req.body)
    console.log(req.query)
})


module.exports = router
