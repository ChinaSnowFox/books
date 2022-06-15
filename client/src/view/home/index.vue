<template>
  <a-layout class="layout">
    <a-layout-sider>
      <suspense>
        <Menu></Menu>
      </suspense>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <Head></Head>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Menu from './menu.vue'
import Head from './header.vue'



</script>

<style scoped lang="scss">
.layout{
  height: 100vh;
}
header{
  height: 80px !important;
  background-color: #eeeeee;
}
main{
  padding: 5px 1%;
  background-color: #fcfcfc;
}
</style>
