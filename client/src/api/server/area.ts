import http from '../index'
// 添加
export const postAreaAdd = (data:{area_name:string,area_info:string}) => http.post('/area/postArea',data)
// 获取列表
export const getAreaList = (params?:{user?:{name?:string}}) => http.get('/area/getArea', {params})
// 删除
export const deleteArea = (id:string) => http.delete('/area/deleteArea/'+id)
// 编辑
export const putArea = (data:{area_name:string,area_info:string,_id:string}) => http.put('/area/putarea',data)
// 根据id获取数据
export const getArea = (id:string) => http.get('/area/getarea/'+id)
