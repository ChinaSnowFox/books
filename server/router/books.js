const express = require('express')
const router = express.Router()
const {booksPut,booksAdd,booksId,booksList,booksDelete,areaList} = require('../hooks/books')
// 添加
router.post('/booksAdd',booksAdd)
// 获取列表
router.get('/booksList',booksList)
// 编辑
router.put('/booksPut',booksPut)
// 删除
router.delete('/booksDelete',booksDelete)
// 通过id获取数据
router.get('/books/:id',booksId)
// 根据区域id获取种类列表
router.get('/books/areaList/:id',areaList)

module.exports = router
