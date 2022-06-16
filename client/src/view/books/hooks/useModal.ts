import {reactive, Ref, ref} from "vue";
import {FormModal} from "./type";
import {BooksAreaList,BooksAddPost} from "../../../api/server/books";
import {Message,ValidatedError,FieldRule} from "@arco-design/web-vue";
import useBooksStore from "../store/useBooksStore";
const useModal = () =>{
    const store = useBooksStore()
    const formModal = reactive<FormModal>({
        title:'',
        name:'',
        seo:'',
        number:null,
        area:'',
        class:''
    })
    const form = ref<Ref|null>(null)
    const rules = reactive<Record<string, FieldRule | FieldRule[]>>({
        title:[
            {
                required:true,
                message:'请输入标题'
            }
        ],
        name:[
            {
                required:true,
                message:'请输入名称'
            }
        ],
        seo:[
            {
                required:true,
                message:'请输入关键字'
            }
        ],
        number:[
            {
                required:true,
                message:'请输入数量'
            }
        ],
        area:[
            {
                required:true,
                message:'请选择区域'
            }
        ],
        class:[
            {
                required:true,
                message:'请选择种类'
            }
        ]
    })
    const classes = ref([])

    async function areaChange (v:string) {
        const res = await BooksAreaList(v)
        if (res.status === 202) {
            Message.warning(res.data)
            classes.value = []
        }else {
            classes.value = res.data.data
            console.log(res.data.data)
        }
    }

    function onReset () {
        store.$patch({
            visible:false
        })
    }
    const onSubmit = (data: {values: Record<string, any>; errors: Record<string, ValidatedError> | undefined}) => {
        if (!data.errors){
            BooksAddPost(data.values).then(res=>{
                if (res.status === 202)
                Message.success(res.data)
                else Message.warning(res.data)
                onReset()
            })
        }else {
            Message.warning("请先输入表单中的数据再添加")
        }
    }
    const submit = () => {form.value.handleSubmit()}

    return {
        formModal,
        areaChange,
        classes,
        onReset,
        onSubmit,
        submit,
        form,
        rules
    }
}


export default useModal
