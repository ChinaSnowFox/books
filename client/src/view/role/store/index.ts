import {defineStore} from "pinia";

export const useRoleStore = defineStore('role',{

    state:()=>{
        const name:string = ''
        const phone:string = ''
        const visible:boolean = false
        const title:string = ''
        const _id:string|null = null
        return {
            name,
            phone,
            visible,
            title,
            _id
        }
    },
    actions:{},
    getters:{}
})
