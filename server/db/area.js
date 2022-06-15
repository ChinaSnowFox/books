const area = {
    // 区域名
    area_name: {
        type: String,
        requird: true
    },
    // 管理人员
    area_info: {
        type: String,
        requird: true
    },
    create_time:{
        type:Date,
        requird: false
    },
    update_time:{
        type:Date,
        requird: false
    }
};

module.exports = area
