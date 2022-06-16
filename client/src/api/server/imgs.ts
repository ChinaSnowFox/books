import http from '../index'
// 图片上传
export const uploadImg = (data:any) => http.post('/img/upload',data)
