<template>
  <a-form layout="inline">
    <a-button @click="addBooks">添加</a-button>
    <a-form-item>
      <a-input placeholder="请输入书籍名称"></a-input>
    </a-form-item>
    <a-form-item>
      <a-input-number placeholder="请输入数量"></a-input-number>
    </a-form-item>
    <a-form-item>
      <a-select placeholder="请选择区域">

      </a-select>
    </a-form-item>
    <a-form-item>
      <a-select placeholder="请选择类别">

      </a-select>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import useHead from "./hooks/useHead";
const {addBooks} = useHead()
</script>

<style scoped>

</style>
