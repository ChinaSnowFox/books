import {onMounted, reactive, ref, watch, watchEffect,onUpdated} from "vue";
import {getRole,deleteInfo} from "../../../api/server/role";
import {TableColumnData} from "@arco-design/web-vue";
import {useRoleStore} from "../store";
const useRoleTable = () => {
    const store = useRoleStore()
    const roles = ref<[]>([])

    const columns = reactive<TableColumnData[]>([
        {
            title:'用户姓名',
            dataIndex:'infoname',
            align:'center'
        },
        {
            title:'手机号',
            dataIndex:'phone',
            align:'center'
        },
        {
            title:'邮箱',
            dataIndex:'email',
            align:'center'
        },
        {
            title:'年龄',
            dataIndex:'sex',
            align:'center'
        },
        {
            title:'权限',
            dataIndex:'sysroleName',
            align:'center'
        },
        {
            title:'操作',
            align:'center',
            slotName:'_id',
            fixed: 'right',
            width: 200
        }
    ])

    function getroles (params?:{
        name:string,
        phone:string
    }) {
        getRole(params).then(({data:{list}})=>{
            console.log(list)
            roles.value = list
        })
    }

    watch(()=>[store.name,store.phone],(o,n)=>{
        getroles({
            name:o[0],
            phone:o[1]
        })
    })

    watch(()=>store.visible,(o,n)=>{
        if (!o){
            getroles()
        }
    })


    // 删除事件
    const onDelete = (row:any) => {
        deleteInfo(row._id).then(res=>{
            console.log(res)
        })
    }

    // 编辑事件
    const onPutRole = (row:any) => {
        store.$patch({
            title:'编辑',
            visible:true,
            _id:row._id
        })
        console.log(row)
    }
    // 查看事件
    const onGetRole = (row:any) => {
        store.$patch({
            title:'查看',
            visible:true,
            _id:row._id
        })
        console.log(row)
    }

    onMounted(() => {
        getroles()
    })

    return {
        roles,
        columns,
        onDelete,
        onGetRole,
        onPutRole
    }
}

export default useRoleTable
