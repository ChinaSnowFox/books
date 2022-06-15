export interface postLoginType {
    username:string,
    password:string,
    code:string,
}
export interface postSignType {
    email:string,
    username:string,
    phonenumber:string,
    password:string,
    infoname:string
}


export interface MenuReqest {
    url:string,
    menu_name:string,
    menu_id:string,
    menu_status:boolean,
    icon?:string,
    remark?:string,
    menu_role_code?:string,
    parent_id?:string
}

// 用户信息表搜索的接口
export interface infoRequest {
    name?:string,
    phone?:string
}
// 用户信息添加编辑
export interface infoBody {
    email: string|null
    infoname: string|null
    password: string|null
    phone: string|null
    sex: number|null
    sysroleName?: string|null
    sysrolecode?: string|null
    username: string|null
    _id?: string|null
}
