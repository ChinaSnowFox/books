<template>
<a-table :data="roles" :columns="columns"  >
  <template #_id="{record}">
    <a-space>
      <a-button @click="onPutRole(record)">修改</a-button>
      <a-button @click="onGetRole(record)">查看</a-button>
      <a-popconfirm content="是否删除这条数据" type="warning" ok-text="是" cancel-text="否" @ok="onDelete(record)">
        <a-button>删除</a-button>
      </a-popconfirm>
    </a-space>
  </template>
</a-table>
</template>

<script setup lang="ts">
import useRoleTable from "./hook/useRoleTable";

const {roles,columns,onDelete,onGetRole,onPutRole} = useRoleTable()

</script>

<style scoped>

</style>
