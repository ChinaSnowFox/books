<template>
<a-menu @menu-item-click="handleMenu">
  <template v-for="(item,i) in menus" :key="item.url">
    <a-menu-item v-if="item.menu_status" :key="item.url">
      <template #icon>{{item.icon}}</template>
      {{item.menu_name}}
    </a-menu-item>
  </template>
</a-menu>
</template>

<script lang="ts" setup>
import {getMenu} from "../../api/server/menu";
import {ref} from 'vue'
import {useRouter} from "vue-router";
const router = useRouter()
// 获取列表数据
const {data:{list}} = await getMenu()
const menus = ref<[]>(list)
// 菜单点击函数
const handleMenu = (key) => {
  router.push({
    path:'/home/'+key
  })
}
</script>

<style scoped>

</style>
