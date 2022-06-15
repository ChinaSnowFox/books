import {FieldRule} from "@arco-design/web-vue";

export interface Sign {
    email:string,
    username:string,
    phonenumber:number|null|string,
    password:string,
    infoname:string,
    [key:string]:string|number|null
}
export interface Item {
    filed:string,
    placeholder:string,
    rules:FieldRule[],
    trigger:string[]
}
