<template>
  <div>
    <a-table :data="data" :bordered="true" :columns="colmenu">
      <template #_id="{record}">
        <a-space>
          <a-button @click="putmenu(record)" status="warning" >编辑</a-button>
          <a-popconfirm content="是否删除这条数据" ok-text="是" cancel-text="否" @ok="deletemenu(record)" type="warning">
            <a-button status="danger">删除</a-button>
          </a-popconfirm>
        </a-space>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import useTableMenu from "./useTableMenu";

const {data,colmenu,deletemenu,putmenu} =  useTableMenu()

</script>

<style scoped>

</style>
