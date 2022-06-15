<template>
<a-form layout="inline">
  <a-form-item>
    <a-button type="primary" @click="add">添加区域</a-button>
  </a-form-item>
  <a-form-item>
    <a-input placeholder="区域搜索" v-model="areaname"></a-input>
  </a-form-item>
  <a-form-item>
    <a-space>
      <a-button type="primary" @click="searchArea">搜索</a-button>
      <a-button type="primary">重置</a-button>
    </a-space>
  </a-form-item>
</a-form>
</template>

<script setup lang="ts">
import useHead from "./hooks/useHead";
const {add,areaname,searchArea} = useHead()
</script>

<style scoped>

</style>
