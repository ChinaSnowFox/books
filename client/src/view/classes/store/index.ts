import {defineStore} from "pinia";

const useClassesStore = defineStore('classes',{
    state:()=>({
        visible:false,
        id:'',
        data:[]
    }),
    actions:{},
    getters:{}
})
export default useClassesStore
