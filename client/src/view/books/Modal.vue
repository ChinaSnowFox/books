<template>
  <a-form
      :label-col-props="{
        span: 6, offset: 0
      }"
      :wrapper-col-props="{
        span: 16, offset: 0
      }"
      :model="formModal"
      @submit="onSubmit"
      ref="form"
      :rules="rules"
  >
    <a-modal v-model:visible="store.visible" esc-to-close footer>
      <template #title>
        添加书籍
      </template>
      <a-form-item field="title" label="标题" show-colon :validate-trigger="['blur']">
        <a-input placeholder="标题" v-model="formModal.title"></a-input>
      </a-form-item>
      <a-form-item field="name" label="名称" show-colon :validate-trigger="['blur']">
        <a-input placeholder="名称" v-model="formModal.name"></a-input>
      </a-form-item>
      <a-form-item field="seo" label="关键字" show-colon :validate-trigger="['blur']">
        <a-input placeholder="关键字" v-model="formModal.seo"></a-input>
      </a-form-item>
      <a-form-item field="number" label="数量" show-colon :validate-trigger="['blur']">
        <a-input-number placeholder="数量" v-model="formModal.number"></a-input-number>
      </a-form-item>
      <a-form-item field="area" label="区域" show-colon :validate-trigger="['change','blur']">
        <a-select placeholder="请选择区域" v-model="formModal.area" @change="areaChange">
          <a-option v-for="item in areaList" :value="item._id" :key="item._id">
            {{item.area_name}}
          </a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="class" label="请选择种类" show-colon :validate-trigger="['change','blur']">
        <a-select placeholder="种类" v-model="formModal.class">
          <a-option v-for="item in classes" :value="item._id" :key="item._id">
            {{item.className}}
          </a-option>
        </a-select>
      </a-form-item>
      <template #footer>
        <a-button @click="submit">添加</a-button>
        <a-button @click="onReset">取消</a-button>
      </template>
    </a-modal>
  </a-form>
</template>

<script lang="ts" setup>
import useAreaList from "../../hooks/arealist";
import useBooksStore from "./store/useBooksStore";
import useModal from "./hooks/useModal";
import upload from '../../assets/imgupload.png'
const {formModal,
  areaChange,
  classes,
  onReset,
  onSubmit,
  submit,
  form,
  rules
} = useModal()
const store = useBooksStore()
const areaList = useAreaList()


</script>

<style scoped>

</style>
