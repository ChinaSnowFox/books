const mongoose = require('mongoose')
const {dbURI} = require('../config/config.default')
// 连接数据
mongoose.connect(dbURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


const db = mongoose.connection;
// 连接失败
db.on('error', err => {
    console.log('数据库连接失败:',err)
})
// 连接成功
db.once('open', function() {
    console.log('数据库连接成功')
    // we're connected!
});

// 组织导出模型类
module.exports = {
    // 注册表
    Sign:mongoose.model('sign',require('./sign')),
    // 登录表
    Login:mongoose.model('login',require('./login')),
    // 菜单表
    Menu:mongoose.model('menu',require('./menu')),
    // 区域表
    Area:mongoose.model('area',require('./area')),
    // 书籍表
    Book:mongoose.model('book',require('./book')),
    // 分类表
    Class:mongoose.model('class',require('./class'))
}
