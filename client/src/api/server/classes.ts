import http from '../index'

interface add {
    className:string
    area:string,
    id?:string
}
interface List {
    area_id:string
    name:string
}
// 获取列表
export const ClassesList = (params?:Record<string,List>) => http.get('/classes/classesList', {params})
// 添加
export const ClassesAdd = (data:add) => http.post('/classes/classesAdd',data)
// 编辑
export const ClassesPut = (data:add) => http.put('/classes/classesPut',data)
// 获取当前数据
export const ClassesID = (id:string) => http.get('/classes/classesID/'+id)
// 删除
export const ClassesDelte = (id:string) => http.delete('/classes/classesDelete/'+id)
