import {reactive} from "vue";
import {useRoleStore} from "../store";

const useRoleSearch = () =>{
    const store = useRoleStore()
    const searchForm = reactive<{
        name:string,
        phone:string,
        [key:string]:string
    }>({
        name:'',
        phone:''
    })

    function getStore () {
        store.$patch({
            name:searchForm.name,
            phone:searchForm.phone
        })
    }

    // 重置事件
    const reset = () => {
        for (const key in searchForm){
            searchForm[key] = ''
        }
        getStore()
    }
    // 搜索事件
    const search = () =>{
        getStore()
    }

    // 添加事件
    const roleAdd = () =>{
        console.log(123)
        store.$patch({
            visible:true,
            title:'添加',
            _id:null
        })
    }

    return {
        searchForm,
        reset,
        search,
        roleAdd
    }
}

export default useRoleSearch
