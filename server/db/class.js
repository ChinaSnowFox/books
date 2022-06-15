
const Class = {
    // 类别名字
    className:{
        type:String,
        requird:true
    },
    // 所属区域
    area:{
        type:String,
        requird: true
    },
    create_time:{
        type:Date,
        default:Date.now()
    },
    update_time:{
        type:Date,
        default: Date.now()
    }
}

module.exports = Class
