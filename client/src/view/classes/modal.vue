<template>
  <a-form ref="form">
    <a-modal
        v-model:visible="store.visible"
        :ok-text="title"
        cancel-text="取消"
        :on-before-ok="onsubmit"
    >
      <template #title>
        {{title}}区域类别
      </template>
        <a-form-item label="图书区域">
          <a-select placeholder="请选择区域" v-model="addModal.area">
            <a-option v-for="item in areaList" :value="item._id">
              {{item.area_name}}
            </a-option>
          </a-select>
        </a-form-item>
        <a-form-item label="图书类别">
          <a-input placeholder="请输入类别" v-model="addModal.className"></a-input>
        </a-form-item>
    </a-modal>
  </a-form>
</template>

<script lang="ts" setup>
import useModal from "./hooks/useModal";
import useClassesStore from "./store";
const store = useClassesStore()
import useAreaList from "../../hooks/arealist";
const areaList = useAreaList()
const {addModal,form,onsubmit,title} = useModal()
</script>

<style scoped>

</style>
