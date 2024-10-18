<template>
    <div class="user">
      <h2>regular user page</h2>
      <p>welcome user</p>
      <button @click="logout">logout</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const logout = () => {
    localStorage.removeItem('isAuthenticated')
    router.push('/')  // 登出后跳转到主页
  }
  </script>
  
  <style scoped>
  .user {
    padding: 20px;
  }
  button {
    margin-top: 10px;
  }
  </style>
  