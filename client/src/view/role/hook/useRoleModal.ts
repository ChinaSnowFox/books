import {useRoleStore} from "../store";
import {reactive, ref, watch} from "vue";
import {getRoleInfo,putRoleInfo,postInfo} from "../../../api/server/role";
import {RoleInfo} from '../../../type/role'
import {Message} from "@arco-design/web-vue";

const useRoleModal = () => {
    const store = useRoleStore()
    const info = reactive<{info:RoleInfo}>({
        info: {
            email: null,
            infoname: null,
            password: null,
            phone: null,
            sex: null,
            sysroleName: null,
            sysrolecode: null,
            username: null,
            __v: null,
            _id: null,
        }
    })
    const formRef = ref<HTMLElement|null>(null)
    function getinfo (id:string) {
        console.log(id)
        getRoleInfo(id).then(({data:{data}})=>{
            info.info = data
        })
    }
    watch(()=>store._id,(o)=>{
        if (o){
            //  id 获取用户信息
            getinfo(o)
        }else {
            for (const key in info.info){
                info.info[key] = null
            }
        }
    })

    // 点击确定之前的事件
    function onOk (done: (closed: boolean) => void) :void|boolean {
        if (store.title === '查看') return done(true)
        if (store.title === '编辑') {
            putRoleInfo(info.info).then(res=>{
                Message.success(res.data)
            })
        }
        if (store.title === '添加') {
            postInfo(info.info).then(res=>{
                console.log(res.data)
            })
        }
        return done(true)
    }
    return {
        info,
        onOk,
        formRef
    }
}

export default useRoleModal
