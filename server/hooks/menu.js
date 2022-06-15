const {Menu} = require("../db")
const id = require('../model/id')

// 获取菜单表
async function getMenus(req,res) {
    var {sign: {_id, sysrolecode},menu_id,name} = req.query
    var menu
    // 根据id 获取数据
    if (menu_id) {
         menu = await Menu.find({menu_id:id(menu_id)})
    }else {
         // 搜索
        if (name) {
            const regexp = new RegExp(name,'g')
            menu = await Menu.find({
                $or:[
                    {menu_name: regexp}
                ]
            }).exec()
        }else
            menu = await Menu.find()
    }
    return res.status(200).send({
        code:200,
        list:menu,
        message:'success'
    })
}


// 更新菜单
async function putMenus (req,res) {
    const {infoname} = req.query.sign
    console.log(req.body)
    const {name,status,parentId,menuroulecode,url} = req.body
    const menu = await Menu.findOneAndUpdate({menu_id:id(req.body.menu_id)},{
        menu_name: name,
        menu_status: status,
        parent_id:parentId,
        menu_role_code:menuroulecode,
        update_by:infoname,
        url
    },{})
    return res.status(202).send('编辑成功')
}
// 删除菜单
async function deleteMenus (req,res) {
    if (req.params.id) {
        const menu = await Menu.findOne({menu_id:id(req.params.id)})
        if (menu) {
            const one = await Menu.deleteOne({menu_id:id(req.params.id)})
            if (one.deletedCount === 1) {
                return res.status(200).send('删除成功')
            }
            return res.status(404).send('删除失败')
        }
        return res.status(404).send('数据库没有这条数据')
    }
    return res.status(404).send('id')
}
// 添加菜单
async function postMenus (req,res) {
    const {name:menu_name,status:menu_status,url,parentId:parent_id,menuroulecode:menu_role_code,icon} = req.body
    const {_id,infoname} = req.query.sign
    const object = {
        id:_id,
        create_by:infoname,
        update_by:infoname,
        menu_id:id(),
        menu_name,
        parent_id,
        url,
        icon,
        menu_status,
        menu_role_code
    }
    const menuName = await Menu.findOne({menu_name})
    const menuUrl = await Menu.findOne({url})
    if (menuUrl || menuName) {
        return res.status(202).send({
            code:202,
            data:'添加失败，菜单中已有该菜单',
            message:'success'
        })
    }
    const menu = new Menu(object)
    menu.save()
    return res.status(202).send({
        code:202,
        data:'添加成功',
        message:'success'
    })


}
module.exports = {
    getMenus,
    postMenus,
    putMenus,
    deleteMenus
}
