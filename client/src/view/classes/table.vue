<template>
  <a-table bordered :columns="column" :data="store.data">
    <template #_id="{record}">
      <a-space>
        <a-button @click="onPut(record)">编辑</a-button>
        <a-popconfirm
            content="是否删除这条数据"
            ok-text="是"
            cancel-text="否"
            type="warning"
            @ok="onDelete(record)"
        >
          <a-button>删除</a-button>
        </a-popconfirm>
      </a-space>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import useTable from "./hooks/useTable";
import useClassesStore from "./store";
const store = useClassesStore()
const {column,onPut,onDelete} = useTable()

</script>

<style scoped>

</style>
