// 菜单表
const menu = {
    id:{
        type:String,
        requird:true,
    },
    // 创建时间
    create_time:{
        type:Date,
        default: Date.now()
    },
    // 创建者
    create_by:{
        type:String,
        requird: true
    },
    //菜单id
    menu_id:{
        type:Object,
        requird: true
    },
    // 菜单名字
    menu_name:{
        type:String,
        requird: true
    },
    // 菜单父级id
    parent_id:{
        type:String,
        requird:false
    },
    // 前台请求url路径
    url:{
        type:String,
        requird:true
    },
    // 菜单图标
    icon:{
        type:String,
        requird: false
    },
    // 菜单状态
    menu_status:{
        type:Boolean,
        requird: true
    },
    // 更新人
    update_by:{
        type:String,
        requird: true
    },
    // 备注
    remark:{
        type:String,
        requird: false
    },
    // 菜单权限
    menu_role_code:{
        type:String,
        requird: true
    }
}
module.exports = menu
