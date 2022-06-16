const {Class,Area,Book} = require('../db')
const Id = require('../model/id')
const {sends} = require('../model/status')
const {loadFont} = require("svg-captcha");
async function booksAdd (req,res) {
    // console.log(req.body)
    const {title:books_title,name:books_name,seo:books_keyword,number:amount,area,class:Classes} = req.body
    const name = await Book.findOne({books_name:req.body.name})
    if (name) return res.status(204).send('已有该书籍')
    const areas = await Area.findOne({_id:Id(area)})
    const classes = await Class.findOne({_id:Id(Classes)})
    // console.log(areas)
    // console.log(classes)
    const books = new Book({
        books_title,
        books_name,
        books_keyword,
        amount,
        area:areas.area_name,
        class:classes.className
    })
    books.save()
    return res.status(202).send('添加成功')
}

async function booksList (req,res) {
    const books = await Book.find({})
    // console.log(books)
    return res.status(200).send(sends(books,200))
}

async function booksPut (req,res) {

}

async function booksDelete (req,res) {

}

async function booksId (req,res) {

}

async function areaList (req,res) {
    const area = await Area.findOne({_id:Id(req.params.id)})
    if (area) {
        const classes = await Class.find({area:area.area_name})
        if (classes.length)
        return res.status(200).send(sends(classes,200))
        return res.status(202).send('区域中没有类别请先在类别管理中添加')
    }
    return res.status(202).send('没有该区域请现在区域管理中添加')
}

module.exports = {
    booksId,
    booksPut,
    booksDelete,
    booksAdd,
    booksList,
    areaList
}
