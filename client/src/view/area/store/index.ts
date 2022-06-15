import {defineStore} from "pinia";

const useAreaStore = defineStore('area',{
    state: ()=> {
        const search:string = ''
        const visible:boolean = false
        const id:string = ''
        return {
            visible,
            search,
            id
        }
    },
    actions:{},
    getters:{}
})

export default useAreaStore
