<template>
<div class="head">
  <a-form layout="inline">
    <a-form-item>
      <a-button type="primary" @click="handleVisible">
        添加
      </a-button>
    </a-form-item>
    <a-form-item>
      <a-input placeholder="请输入菜单名称" v-model="names"></a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="submit">
        搜索
      </a-button>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="reset">
        重置
      </a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script lang="ts" setup>
import {useMenuStore} from "./store";
import {ref} from "vue";
const store = useMenuStore()

const names = ref<string>('')

const handleVisible = () => {
  store.$patch({
    visible: true
  })
}

const submit = () => {
  store.$patch({
    names:names.value
  })
}

const reset = () =>{
  names.value = ''
  store.$patch({
    names:''
  })
}

</script>

<style scoped lang="scss">
.head{
  margin: 10px 0;
}
</style>
