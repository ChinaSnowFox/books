const {Class,Area} = require('../db')
const Id = require('../model/id')
const {sends} = require('../model/status')
async function booksAdd (req,res) {
    console.log(req.body)
}

async function booksList (req,res) {

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
