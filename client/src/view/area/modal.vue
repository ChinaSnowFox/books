<template>
<a-modal v-model:visible="store.visible" :on-before-ok="areaAdd">
  <template #title>{{(store.id&&"编辑")||"添加"}}区域</template>
  <a-form>
    <a-form-item label="区域名">
      <a-input placeholder="输入区域名称" v-model="formModal.area_name"></a-input>
    </a-form-item>
    <a-form-item label="管理人员">
      <a-input placeholder="输入管理改区域的人员" v-model="formModal.area_info"></a-input>
    </a-form-item>
  </a-form>
</a-modal>
</template>

<script setup lang="ts">
import usePostModal from "./hooks/usePostModal";
import useAreaStore from "./store";
const {formModal,areaAdd} = usePostModal()
const store = useAreaStore()
</script>

<style scoped>

</style>
