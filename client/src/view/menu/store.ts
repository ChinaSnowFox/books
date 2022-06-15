
import {defineStore} from 'pinia'

export const useMenuStore = defineStore('menu',{
    state:() => {
        const visible:boolean = false
        const menuId:string = ''
        const names:string = ""
        return {
            visible,
            menuId,
            names
        }
    },
    getters:{},
    actions:{}
})
