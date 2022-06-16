import {onMounted,ref} from "vue";
import {getAreaList} from "../api/server/area";
const useAreaList = () => {

    const areaList = ref<[]>([])

    onMounted(()=>{
        getAreaList().then(res=>{
            areaList.value = res.data.list
        })
    })

    return areaList
}

export default useAreaList
