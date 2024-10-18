<template>
  <div class="main-container">
    <!-- 当路由不等于 CountBookAPI 时，显示 Header -->
    <header v-if="showHeader">
      <nav>
        <router-link to="/">Home (Week 5)</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/Firelogin">Firebase Login</router-link>
        <router-link to="/addbook">Add Book</router-link> <!-- 添加书籍链接 -->
        <router-link to="/GetBookCount">Get Book Count</router-link> <!-- 添加 Get Book Count 链接 -->
        <router-link to="/WeatherCheck">Get Weather</router-link> <!-- 添加 Get Weather 链接 -->
        <router-link to="/CountBookAPI">Count Book API</router-link> <!-- 添加 Count Book API 链接 -->
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'; // 获取当前路由信息

// 获取当前路由
const route = useRoute();


const showHeader = computed(() => route.name !== 'CountBookAPI');
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
