<template>
  <a-table :data="data" :columns="columns">
    <template #id="{record}">
      <a-space>
        <a-button>查看</a-button>
      </a-space>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import useTable from "./hooks/useTable";

const {
  data,
  columns
} = useTable()
</script>

<style scoped>

</style>
