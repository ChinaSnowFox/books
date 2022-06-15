import {useAreaAdd} from "./useAreaAdd";
import useAreaStore from "../store";
import {ref, watch, onMounted, reactive} from "vue";
import {getAreaList,deleteArea} from "../../../api/server/area";
import {Message, TableColumnData} from "@arco-design/web-vue";
function useHead () {
    const store = useAreaStore()
    const add = useAreaAdd()
    const areaList = ref([])
    const areaname = ref<string>('')

    async function list (params?:{user?:{name?:string}}) {
        const {data} = await getAreaList(params)
        areaList.value = data.list.map((item:any) => {
            const time = new Date(item.create_time)
            const year = time.getFullYear()
            const month = time.getMonth()
            const date = time.getDate()
            const createTime = `${year}-${month+1}-${date}`
            return {
                ...item,
                create_time:createTime
            }
        })
    }

    const searchArea = async () => {list({user:{name:areaname.value}})}



    const columns = reactive<TableColumnData[]>([
        {
            title:'管理人员姓名',
            dataIndex:'area_info',
            align:'center',
        },
        {
            title:'管理区域',
            dataIndex:'area_name',
            align:'center'
        },
        {
            title:'创建日期',
            dataIndex:'create_time',
            align:'center',
            width:500
        },
        {
            title:'操作',
            slotName:'id',
            align:'center',
            width:300
        },
    ])

    onMounted(()=>{
        list()
    })

    watch(()=>store.visible,(o,n)=> {
        if (!o){
            console.log(o)
            list()
        }
    })



    // 删除
    const deletArea = (id:string) => {
        deleteArea(id).then(res=>{
            if (res.status === 200) {
                Message.success('删除成功')
                list()
            }
        })
    }
    // 编辑点击事件
    const putarea = (row:any) => {
        store.$patch({
            visible:true,
            id:row._id
        })
    }
    return {
        add,
        searchArea,
        areaname,
        areaList,
        columns,
        deletArea,
        putarea
    }
}

export default useHead
