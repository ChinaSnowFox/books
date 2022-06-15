<template>
<a-table :data="areaList" bordered :columns="columns" stripe>

  <template #id="{record}">
    <a-space>
      <a-button @click="putarea(record)">
        编辑
      </a-button>
      <a-popconfirm ok-text="是" cancel-text="否" type="error" @ok="deletArea(record._id)" content="是否删除这条数据">
        <a-button>
          删除
        </a-button>
      </a-popconfirm>
    </a-space>
  </template>
</a-table>

</template>

<script setup lang="ts">
import useHead from "./hooks/useHead";
const {areaList,columns,deletArea,putarea} = useHead()
</script>

<style scoped>

</style>
