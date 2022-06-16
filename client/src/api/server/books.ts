import http from '../index'

// 获取列表
// 编辑
// 删除
// 查看
// 添加
export const BooksAddPost = (data:Record<string,any>) => http.post('/books/booksAdd',data)
// 根据区域id获取种类
export const BooksAreaList = (id:string) => http.get('/books/books/areaList/'+id)
