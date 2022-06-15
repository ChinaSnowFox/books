import {reactive, watch} from "vue";
import {postAreaAdd,getArea,putArea} from "../../../api/server/area";
import {Message} from "@arco-design/web-vue";
import useAreaStore from "../store";
const usePostModal = () => {
    const store = useAreaStore()
    const formModal = reactive<{
        area_name:string,
        area_info:string,
        [key:string]:string,
        _id:string
    }>({
        area_name:'',
        area_info:'',
        _id:''
    })

    // 添加
    const areaAdd = (done: (closed: boolean) => void):void | boolean =>  {
        if (store.id){
            putArea(formModal).then(res=>{
                Message.success(res.data)
            })
        }else {
            if (formModal.area_name && formModal.area_info) {
                postAreaAdd(formModal).then((res:any)=>{
                    if (res.status){
                        Message.success(res.data.data)
                    }else {
                        Message.error(res?.response?.data.data)
                    }
                    for (const key in formModal){
                        formModal[key] = ''
                    }
                })
            }
        }
        return done(true)

    }
    //
    watch(()=>store.id,(o,n)=>{
        console.log(o)
        if (o){
            getArea(o).then(res=>{
                if (res.data){
                    for (const item in res.data.data){
                        for (const key in formModal){
                            if (item===key){
                                formModal[key] = res.data.data[key]
                            }
                        }
                    }
                }
            })
        }
    })


    return {
        formModal,
        areaAdd
    }
}


export default usePostModal
