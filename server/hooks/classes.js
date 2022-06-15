const {sends} = require('../model/status')
const {Class,Area} = require('../db')
const id = require('../model/id')
async function List (req,res) {

    if (req.query?.name||req.query?.area_id){
        const {area_id,name} = req.query
        const area = await Area.findOne({_id:id(area_id)})
        const regexp = new RegExp(name,'g')
        const list = await Class.find({
            $or:[
                {className:regexp}
            ],
            area:area.area_name
        }).exec()
        return res.status(200).send(sends(list,200))
    }else{
        const list = await Class.find({})
        return res.status(200).send(sends(list,200))
    }

}

async function add (req,res) {
    if (Object.keys(req.body).length === 2){
        const area = await Area.findOne({_id:id(req.body.area)})
        if (area){
            const classes = await Class.findOne({
                area:area.area_name,
                className:req.body.className
            })
            if (!classes){
                const Classes = new Class({
                    className:req.body.className,
                    area:area.area_name
                })
                Classes.save()
                return res.status(202).send('添加成功')
            }
            return res.status(203).send('已经有该类别了无法继续添加')
        }
        return res.status(203).send('没有该区域，请先添加该区域')
    }
}

async function put (req,res) {
    const {id:ID} = req.body
    delete req.body.id
    const area = await Area.findOne({_id:id(req.body.area)})
    if (area){
        req.body.area = area.area_name
        const Classes = await Class.findOneAndUpdate({_id:id(ID)},{
            ...req.body
        },{})
        if (Classes)
            return res.status(202).send('编辑成功')
        return res.status(202).send('编辑失败')
    }else return res.status(500).send('没有查找到改数据')

}

async function Delete (req,res) {
    const classes = await Class.findOneAndDelete({_id:id(req.params.id)})
    if (classes){
        return res.status(200).send('删除成功')
    }
    return res.status(404).send('删除失败')
}

async function getId (req,res) {
    if (req.params.id){
        const classes = await Class.findOne({id:id(req.params.id)})
        if (classes)
        return res.status(200).send(sends(classes,200))
        else return res.status(400).send('没有这条数据')
    }
}


module.exports = {
    List,add,put,Delete,getId
}
