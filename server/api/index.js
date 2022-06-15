const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('../router')
const session = require('express-session');
require('../db')

const app = express()
const port = 3001
app.use(session({
    /*secret: '12345',
    name:'name',
    cookie:{
        maxAge:60000,
    },
    resave:false,
    saveUninitialized:true*/
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 800000 },
    name: 'ivan'
}))
// 挂载插件
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// 请求超时
app.use(function (req,res,next) {
    res.setTimeout(120*1000,function () {
        return res.status(408).send('请求超时')
    })
    next()
})
// 挂载路由
app.use('/api',router)

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
})
