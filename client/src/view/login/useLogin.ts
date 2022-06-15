import {reactive,ref,onMounted} from "vue";
import {Login} from "../../type/login";
import {ValidatedError,FieldRule,Message} from "@arco-design/web-vue";
import {getCode,postLogin} from "../../api/server/sign";
import {useRouter} from "vue-router";

export function useLogin  ()  {
    const router = useRouter()
    const forms = reactive<Login>({
        username:'',
        password:'',
        code:'',
    })
    const text = ref<string>('')

    const rules:Record<string, FieldRule | FieldRule[]> = {
        username:[
            {
                required:true,
                message:'请输入登录账号'
            }
        ],
        password:[
            {
                required:true,
                message:'请输入登录密码'
            }
        ],
        code:[
            {
                required:true,
                message:'请输入验证码'
            },
        ]
    }

    function postlogin (data:Login) {
        postLogin(data).then(res=>{
            if (res.status===202){
                const {send,token} = res.data.data
                localStorage.setItem('token',token)
                localStorage.setItem('user',JSON.stringify(send))
                router.push({
                    path:'/home'
                })
            }
        })
    }

    const svg =ref<string>('')

    const hanledSubmit = (data: {values: Record<string, any>; errors: Record<string, ValidatedError> | undefined}) => {
        if (! !!data.errors){
            const {values} = data
            const regrex:RegExp = new RegExp(text.value,'i')
            if (regrex.test(values?.code)) {
                postlogin(values as Login)
            }else {
                Message.error('请输入正确的验证码')
            }
        }
    }
    function handleSvg () {
        getCode().then(res=>{
            console.log(res.data?.data?.text)
            svg.value = res.data?.data?.data
            text.value = res.data?.data?.text
        })
    }
    const sign = () => {
        router.push({
            path:'/sign'
        })
    }

    onMounted(() =>{
        handleSvg()
    })

    return{
        forms,
        hanledSubmit,
        rules,
        svg,
        handleSvg,
        sign
    }
}
