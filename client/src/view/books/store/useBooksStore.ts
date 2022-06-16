import {defineStore} from "pinia";

const useBooksStore = defineStore('books',{
    state:()=>({
        visible:false
    }),
    actions:{},
    getters:{}
})


export default useBooksStore
