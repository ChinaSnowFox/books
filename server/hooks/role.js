const {Sign, Menu} = require('../db')
const {decode,encrypt} = require('../model/token')
const id = require('../model/id')
// 获取的列表
async function getRole (req,res) {
    console.log(req.query)
    var sign
    if (req.query.name||req.query.phone){
        // 搜索
        const {name,phone} = req.query
        const nameReg = new RegExp(name)
        if (name && !phone) {
            sign = await Sign.find({
                $or:[
                    {
                        infoname:nameReg
                    }
                ],
            }).exec()
        }
        if (phone) {
            sign = await Sign.findOne({phone})
        }

    }else {
        sign = await Sign.find({})
    }
    var list
    if(Array.isArray(sign)) list = sign.map(item=>{
        console.log(item)
        item.password = decode(item.password)
        return item
    })
    else{
        sign.password = decode(sign.password)
        list = [sign]
    }

    return res.status(200).send({
        code:200,
        message:'success',
        list
    })
}

// 根据id获取个人信息
async function getIDInfo (req,res) {
    if (req.params.id){
        const info = await Sign.findOne({_id:id(req.params.id)})
        if (info) {
            info.password = decode(info.password)
            return res.status(200).send({
                code:200,
                message:'success',
                data:info
            })
        }
        return res.status(500).send('没有查询到这条信息')
    }
    return res.status(404).send('没有用户id')
}

// 编辑个人信息
async function putInfo (req,res) {
    delete req.body.__v
    req.body.password = encrypt(req.body.password)
    const info = await Sign.findOneAndUpdate({_id:id(req.body._id)},{
        ...req.body
    },[])
    return res.status(202).send({
        code:202,
        message:'success',
        data:'修改成功'
    })
}
// 删除用户信息
async function deleteInfo (req,res) {
    if (req.params.id) {
        const info = await Sign.findOne({menu_id:id(req.params.id)})
        if (info){
            const id = await Sign.deleteOne({_id:id(req.params.id)})
            if (id.deletedCount === 1) {
                return res.status(200).send('删除成功')
            }
            return res.status(404).send('删除失败')
        }
        return res.status(404).send('数据库没有这条数据')
    }
    return res.status(404).send('id')
}
// 添加用户信息
async function postInfo (req,res) {
    const info = await Sign.find({})
    const {infoname,username,email,phone} = req.body
    if (info.length!==0) {
        const every = info.every(item=>item.infoname !== infoname && username !== item.username && email !== item.email && phone!==item.phone)
        if (every) {
            req.body.password = decode(req.body.password)
            const sign = new Sign(req.body)
            sign.save()
            return res.status(202).send({
                code:202,
                message:'success',
                data:'添加成功'
            })
        }
        return res.status(404).send('用户信息重复')
    }else {
        const sign = new Sign(req.body)
        sign.save()
        return res.status(202).send({
            code:202,
            message:'success',
            data:'添加成功'
        })
    }
}

module.exports = {
    getRole,
    getIDInfo,
    putInfo,
    deleteInfo,
    postInfo
}
