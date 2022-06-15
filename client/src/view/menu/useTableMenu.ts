import {getMenu,deleteMenu} from "../../api/server/menu";
import {reactive, ref,onMounted,watch} from "vue";
import {TableColumnData,Message} from "@arco-design/web-vue";
import {useMenuStore} from "./store";
const useTableMenu = () =>{
    const store = useMenuStore()
    const data = ref<[]>()
    async function getmenu (name?:string) {
        const {data:{list}} = await getMenu('',name)
        data.value = list
    }
    const colmenu = reactive<TableColumnData[]>([
        {
            title:"名称",
            dataIndex:'menu_name',
            align:'center'
        },
        {
            title:'id',
            dataIndex:'menu_id',
            align:'center'
        },
        {
            title:'是否显示',
            dataIndex:'menu_status',
            align:'center'
        },
        {
            title:'路径',
            dataIndex:'url',
            align:'center'
        },
        {
            title:'创建人员',
            dataIndex:'create_by',
            align:'center'
        },
        {
            title:'更新人员',
            dataIndex:'update_by',
            align:'center'
        },
        {
            title:'操作',
            slotName:'_id',
            align:'center'
        }
    ])
    // 编辑事件
    function putmenu (record : any) {
        store.$patch({
            visible:true,
            menuId:record.menu_id
        })
    }

    watch(()=>store.visible,(o,n)=>{
        if (!o) {
            store.$patch({
                menuId:''
            })
            getmenu()
        }
    })
    // 监听搜索表单
    watch(()=>store.names,(o,n)=>{
        getmenu(o)
    })

    // 删除事件
    function deletemenu (record : any) {
        deleteMenu(record.menu_id).then(res=>{
            if (res.status === 200) {
                Message.success('删除成功')
                getmenu()
            }
        })
    }

    onMounted(() =>{
        getmenu()
    })

    return {data,colmenu,deletemenu,putmenu}
}
export default useTableMenu
