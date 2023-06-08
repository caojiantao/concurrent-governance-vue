<script setup>
import { RouterView } from 'vue-router'
import TTMenu from "./components/TTMenu.vue";
import TTHeader from "./components/TTHeader.vue";
</script>

<template>
  <el-container>
    <el-aside class="tt-aside">
      <TTMenu />
    </el-aside>
    <el-container class="tt-main">
      <el-header>
        <TTHeader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.tt-aside {
  position: fixed;
  overflow-y: auto;
  height: 100%;
}

.tt-main {
  margin-left: var(--el-aside-width, 300px);
}
</style>
