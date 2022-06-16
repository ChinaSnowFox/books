const book = {
    // 书籍标题
    books_title:{
        type:String,
        requird:true
    },
    // 封面图
    books_img:{
        type:String,
        requird:true
    },
    // 书籍名
    books_name:{
        type:String,
        requird: true
    },
    // 分类id
    category_id:{
        type:String,
        requird: true
    },
    // 背景图片
    book_image:{
        type:String,
        requird: true
    },
    // 关键字
    books_keyword:{
        type:String,
        requird: true
    },
    // 数量
    amount:{
        type:Number,
        requird:true
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

module.exports = book
