<template>
  <a-form layout="inline" @submit="onSearch" :model="formSearch">
    <a-form-item>
      <a-button @click="area_add">添加</a-button>
    </a-form-item>
    <a-form-item field="area_id">
      <a-select placeholder="请选择区域" v-model="formSearch.area_id">
        <a-option v-for="item in areaList" :value="item._id">
          {{item.area_name}}
        </a-option>
      </a-select>
    </a-form-item>
    <a-form-item field="name">
      <a-input placeholder="请输入类别名" v-model="formSearch.name"></a-input>
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button html-type="submit">搜索</a-button>
        <a-button @click="onreset">重置</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import useHead from "./hooks/useHead";
import useModal from "./hooks/useModal";
import useTable from "./hooks/useTable";

const {areaList} = useModal()
const {area_add} = useHead()
const {formSearch,onSearch,onreset} = useTable()

</script>

<style scoped>

</style>
