<template>
  <a-modal v-model:visible="store.visible" :on-before-ok="onOk">
    <template #title>
      {{store.title}}人员信息
    </template>
    <a-form :disabled="store.title==='查看'" :model="info.info" ref="formRef">
      <a-form-item label="用户姓名" show-colon field="infoname">
        <a-input v-model="info.info.infoname"></a-input>
      </a-form-item>
      <a-form-item label="登录账号" show-colon field="username">
        <a-input v-model="info.info.username"></a-input>
      </a-form-item>
      <a-form-item label="登录密码" show-colon field="password">
        <a-input v-model="info.info.password"></a-input>
      </a-form-item>
      <a-form-item label="手机号" show-colon field="phone">
        <a-input v-model="info.info.phone"></a-input>
      </a-form-item>
      <a-form-item label="邮箱" show-colon field="email">
        <a-input v-model="info.info.email"></a-input>
      </a-form-item>
      <a-form-item label="年龄" show-colon field="sex">
        <a-input-number v-model="info.info.sex"></a-input-number>
      </a-form-item>
      <a-form-item label="权限名称" show-colon field="sysrolecode">
        <a-select v-model="info.info.sysrolecode">
          <a-option value="admin">超级管理员</a-option>
          <a-option value="city">管理员</a-option>
          <a-option value="count">用户</a-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>

</template>

<script setup lang="ts">
import useRoleModal from "./hook/useRoleModal";
import {useRoleStore} from "./store";
const store = useRoleStore()
const {info,onOk,formRef} = useRoleModal()
console.log(info)
</script>

<style scoped>

</style>
