import http from '../index'

import {postLoginType,postSignType} from '../types'
/**
 * 登录注册验证码
 * */
// 登录
export const postLogin = (data:postLoginType) => http.post('postlogin',data)

// 获取验证码
export const getCode = () => http.get('getcode')

// 注册账号
export const postSign = (data:FormData) => http.post('postSign',data)
