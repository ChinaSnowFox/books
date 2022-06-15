const {Area, Sign} = require('../db')
const Id = require('../model/id')

// 列表获取
async function getArea (req,res) {
    const obj = {}
    var area ;
    if (req.query?.user){

        const regexp = new RegExp(JSON.parse(req.query.user).name,'g')
        obj.area_name = regexp
        area = await Area.find({
            $or:[
                obj
            ]
        })
    }else {
        area = await Area.find(obj)
    }

    return res.status(200).send({
        code:200,
        message:'success',
        list:area
    })
}
// 添加
async function postArea (req,res) {
    const {area_info,area_name} = req.body
    if (area_info && area_name) {
        const info = await Area.findOne({area_info})
        const name = await Area.findOne({area_name})
        const infoName = await Sign.findOne({infoname:area_info})
        if ((!info&&!name)) {
            if (infoName){
                const area = new Area({area_info,area_name,create_time:Date.now(),update_time:Date.now()})
                area.save()
                return res.status(202).send({
                    code:202,
                    message:'success',
                    data:'添加成功'
                })
            }
            return res.status(404).send({
                code:404,
                message:'error',
                data:'人员管理中没有该用户信息，请先在用户管理中添加该用户信息'
            })
        }
        return res.status(404).send({
            code:404,
            message:'error',
            data:'数据库中已有该数据'
        })
    }

}

// 根据id获取数据
async function getAreaId (req,res) {
    if (req.params.id){
        const id = req.params.id
        const area = await Area.findOne({_id:Id(id)})
        console.log(area)
        return res.status(200).send({
            code:200,
            message:'success',
            data:area
        })
    }

}

// 编辑
async function putArea (req,res) {
    if (req.body._id) {
        const id = req.body._id
        const areaid = await Area.findOne({_id:Id(id)})
        if (areaid){
            const area = await Area.findOneAndUpdate({_id:Id(id)},{
                ...req.body,
                update_time:Date.now()
            },{})
            return res.status(202).send('修改成功')
        }
    }
}
// 删除
async function deleteArea (req,res) {
    if (req.params.id){
        const id = req.params.id
        const area = await Area.findOneAndDelete({_id:Id(id)})
        if (area){
            return res.status(200).send({
                code:200,
                data:'删除成功',
                message:'success'
            })
        }
        return res.status(404).send({
            code:404,
            data:'没有这条数据',
            message:'error'
        })
    }

}
module.exports = {
    getArea,
    postArea,
    putArea,
    deleteArea,
    getAreaId
}
