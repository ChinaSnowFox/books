import {onMounted, reactive, ref, watch} from "vue";
import {Message, TableColumnData, TableData,ValidatedError} from "@arco-design/web-vue";
import {ClassesList,ClassesDelte} from "../../../api/server/classes";
import useClassesStore from "../store";
interface List {
    area_id:string
    name:string,
    [key:string]:string
}
const useTable = () => {
    const store = useClassesStore()
    // const data = ref<[]>([])
    const column = <TableColumnData[]> [
        {
            title:'类别名',
            align:'center',
            dataIndex:'className'
        },
        {
            title:'所属区域',
            align:'center',
            dataIndex:'area'
        },
        {
            title:'时间',
            align:'center',
            dataIndex:'update_time'
        },
        {
            title:'操作',
            align:'center',
            slotName:'_id'
        }
    ]

    const formSearch = reactive<List>({
        area_id:'',
        name:''
    })

    function getList (list?:Record<string,List>) {
        ClassesList(list).then(res=>{
            console.log(res)
            store.$patch({
                data:res.data.data
            })
            // data.value = res.data.data
        })
    }

    const onPut = (row:TableData) => {
        console.log(row)
        store.$patch({
            visible:true,
            id:row._id
        })
    }

    const onSearch = (data:{values: Record<string,List>; errors: Record<string, ValidatedError> | undefined}) => {
        getList(data.values)
    }

    const onDelete = (row:TableData) => {
        ClassesDelte(row._id).then(res=>{
            console.log(res)
            if (res.status===200){
                Message.success(res.data)
                getList()
            }
            else Message.error('删除失败')
        })
    }

    watch(()=>store.visible,(o)=>{
        console.log(o)
        if (!o){
            store.$patch({
                id:''
            })
            getList()
        }
    })

    const onreset = () => {
        for (const key in formSearch){
            formSearch[key] = ''
        }
        getList()
    }

    onMounted(()=>{
        getList()
    })


    return {
        column,
        onPut,
        onDelete,
        formSearch,
        onSearch,
        onreset
    }
}

export default useTable
