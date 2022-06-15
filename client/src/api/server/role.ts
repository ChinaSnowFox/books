import http from '../index'

import {infoRequest,infoBody} from '../types'

// 获取用户信息列表
export const getRole = (params?:infoRequest) => http.get('/role/getrole', {params})
// 根据id获取用户信息
export const getRoleInfo = (id:string) => http.get(`/role/getroleinfo/${id}`)
// 编辑个人信息
export const putRoleInfo = (data:infoBody|HTMLElement) => http.put('/role/putroleinfo',data)
// 删除个人信息
export const deleteInfo = (id:string) => http.delete(`role/deleteinfo/${id}`)
// 添加个人信息
export const postInfo = (data:infoBody) => http.post('/role/postinfo',data)
