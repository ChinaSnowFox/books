import {onMounted, ref, reactive, watch} from "vue";
import {getAreaList} from "../../../api/server/area";
import useClassesStore from "../store";
import {chinese} from "../../../utils/regexp";
import {Message} from "@arco-design/web-vue";
import {ClassesAdd, ClassesID, ClassesPut} from "../../../api/server/classes";
const useModal = () => {
    const form = ref<HTMLElement|string>('')
    const store = useClassesStore()
    const addModal = reactive<{
        className:string
        area:string
        [key:string]:string
    }>({
        className:'',
        area:''
    })
    const areaList = ref<{[item:string]:string}[]>([])
    const title = ref<string>('添加')
    watch(()=>store.id,(o)=>{
        if (o) ClassesID(o).then(res=>{
            for (const item of areaList.value) {
                if (item.area_name === res.data.data.area){
                    addModal.area = item._id
                }
            }
            addModal.className = res.data.data.className
            title.value = '编辑'
        })
        else {
            title.value = '添加'
            for (const key in addModal) {
                addModal[key] = ''
            }
        }
    })

    const onsubmit = (done: (closed: boolean) => void):void | boolean => {
        if (chinese.test(addModal.className) && addModal.area){
            // 编辑
            if(store.id) ClassesPut({...addModal,id:store.id}).then(res=>{
                Message.success(res.data)
                // for (const key in addModal) {
                //     addModal[key] = ''
                // }
                return done(true)
            })
            // 添加
            else ClassesAdd(addModal).then(res=>{
                if (res.status === 202)
                    Message.success(res.data)
                else
                    Message.error(res.data)
                for (const key in addModal) {
                    addModal[key] = ''
                }
                return done(true)
            })


        }else {
            Message.warning('请先输入类别名或者选择区域')
            return done(false)
        }


    }

    return {
        // areaList,
        addModal,
        form,
        onsubmit,
        title
    }
}


export default useModal
