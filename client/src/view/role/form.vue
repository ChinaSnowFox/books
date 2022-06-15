<template>
<a-form layout="inline"  :model="searchForm">
  <a-form-item >
    <a-button @click="roleAdd">添加</a-button>
  </a-form-item>
  <a-form-item field="name">
    <a-input placeholder="请输入用户姓名" v-model="searchForm.name"></a-input>
  </a-form-item>
  <a-form-item field="phone">
    <a-input placeholder="请输入手机号" v-model="searchForm.phone"></a-input>
  </a-form-item>
  <a-form-item >
    <a-space>
      <a-button @click="search">搜索</a-button>
      <a-button @click="reset">重置</a-button>
    </a-space>
  </a-form-item>
</a-form>
</template>

<script setup lang="ts">
import useRoleSearch from "./hook/useRoleSearch";

const {searchForm,search,reset,roleAdd} = useRoleSearch()

</script>

<style scoped>

</style>
