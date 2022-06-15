<template>
<a-modal v-model:visible="menu.visible" :ok-text="names.text" cancel-text="取消" :on-before-ok="handleBeforeOk">
  <template #title>
    {{names.title}}
  </template>
  <div>
    <a-form layout :model="modelForm">
      <a-form-item label="菜单名称" field="name">
        <a-input v-model="modelForm.name"></a-input>
      </a-form-item>
      <a-form-item label="是否显示" field="status">
        <a-space>
          <a-radio-group v-model="modelForm.status">
            <a-radio :value="true">显示</a-radio>
            <a-radio :value="false">不显示</a-radio>
          </a-radio-group>
        </a-space>
      </a-form-item>
      <a-form-item label="路径" field="url">
        <a-input v-model="modelForm.url"></a-input>
      </a-form-item>
      <a-form-item label="父级ID" field="parentId">
        <a-input v-model="modelForm.parentId"></a-input>
      </a-form-item>
      <a-form-item label="权限层" field="parentId">
        <a-input v-model="modelForm.menuroulecode"></a-input>
      </a-form-item>
    </a-form>
  </div>
</a-modal>
</template>

<script lang="ts" setup>
import {useMenuStore} from "./store";
import {reactive,watch} from "vue";
import {postMenu,getMenu,putMenu} from "../../api/server/menu";
import {Message} from "@arco-design/web-vue";

const menu = useMenuStore()
const modelForm = reactive<{
  name:string,
  status:boolean|null|string,
  url:string,
  parentId:string,
  menuroulecode:string,
  [key:string]:string
}>({
  name:'',
  status:null,
  url:'',
  parentId:'',
  menuroulecode:''
})

const names = reactive<{
  title:string,
  text:string
}>({
  title:'添加菜单列表',
  text:'添加'
})


watch(()=>menu.menuId,(o,n)=>{
  if (o) {
    getMenu(o).then(({data:{list:[item]}})=>{
      modelForm.name = item.menu_name
      modelForm.url = item.url
      modelForm.status = item.menu_status
      modelForm.menuroulecode = item.menu_role_code
      modelForm.parentId = item.parent_id
      names.text= '编辑'
      names.title = '编辑菜单'
    })
  }else {
    for (const key in modelForm){
      modelForm[key] = ''
    }
    names.title='添加菜单列表'
    names.text='添加'
  }
})

const handleBeforeOk = (done: (closed: boolean) => void) :void|boolean =>  {
  if (names.text==='添加') {
    postMenu(modelForm).then(res=>{

      if (res.status === 202){
        Message.success('添加成功')
        return done()
      }
    })
  }else {
    putMenu({...modelForm,menu_id:menu.menuId}).then(res=>{
      Message.success(res.data)
      return done()
    })
  }
}

</script>

<style scoped>

</style>
