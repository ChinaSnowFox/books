
import http from '../index'
import {MenuReqest} from '../types'


// 获取菜单列表
export const getMenu = (menu_id?:string,name?:string) =>http.get('menu/getmenu', {params:{menu_id,name}})
// 添加菜单
export const postMenu = (data:MenuReqest) => http.post('menu/postmenu',data)
// 编辑菜单
export const putMenu = (data:MenuReqest) => http.put('menu/putmenu',data)
// 删除菜单
export const deleteMenu = (id:string) => http.delete('menu/deletemenu/'+id)
