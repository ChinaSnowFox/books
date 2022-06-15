import {reactive} from "vue";
import {Sign,Item} from "../../type/sign";
import {ValidatedError,Message} from "@arco-design/web-vue";
import {postSign} from "../../api/server/sign";
import {useRouter} from "vue-router";
// 匹配中文汉字
const chinese:RegExp = /^[\u4E00-\u9FA5]{2,6}$/
// 匹配邮箱
const email:RegExp = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
// 匹配手机号
const phone:RegExp = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
function useSign () {
    const router = useRouter()
    const signForm = reactive<Sign>({
        email:'',
        infoname:'',
        username:'',
        password:'',
        phonenumber:null
    })
    const itemInput = reactive<Item[]>([
        {
            filed:'email',
            placeholder:'请输入邮箱',
            rules:[
                {
                    required:true,
                    message:'请输入邮箱'
                }
            ],
            trigger:['blur']
        },
        {
            filed:'infoname',
            placeholder:'请输入用户名',
            rules:[
                {
                    required:true,
                    message:'请输入用户名'
                }
            ],
            trigger:['blur']
        },
        {
            filed:'username',
            placeholder:'请输入登录账号',
            rules:[
                {
                    required:true,
                    message:'请输入登录账号'
                }
            ],
            trigger:['blur']
        },
        {
            filed:'password',
            placeholder:'请输入登录密码',
            rules:[
                {
                    required:true,
                    message:'请输入登录密码'
                }
            ],
            trigger:['blur']
        },
        {
            filed:'phonenumber',
            placeholder:'请输入手机号',
            rules:[
                {
                    required:true,
                    message:'请输入手机号'
                },
            ],
            trigger:['blur']
        }
    ])


    function handleSign (data: {values: Record<string, any>; errors: Record<string, ValidatedError> | undefined}) {
        const {errors,values} = data
        if (errors){
            Message.error('请先输入表单中的数据')
        }else {
            if (!chinese.test(values.infoname)){
                Message.error('用户名请输入2到6位中文汉字')
                return
            }
            if (chinese.test(values.username)){
                Message.error('用户名请输入英文字母')
                return;
            }
            if(!email.test(values.email)){
                Message.error('请输入正确的邮箱')
                return;
            }
            if (!phone.test(values.phonenumber)){
                Message.error('请输入正确的手机号')
                return;
            }
            const formData:FormData = new FormData()
            for (const key in values) {
                formData.append(key,values[key])
            }
            postSign(formData).then(res=>{
                if (res.status){
                    Message.success('注册成功')
                    router.go(-1)
                }

            })
        }
    }

    return {
        itemInput,
        signForm,
        handleSign
    }
}

export default useSign
