<template>
    <div class="access-denied">
      <h1>Access Denied</h1>
      <p>You do not have permission to view this page. Please log in.</p>
      <router-link to="/login">Go to Login</router-link>
    </div>
  </template>
  
  <script setup>
  // 这里可以添加一些额外的逻辑，比如跳转或者其他内容
  </script>
  
  <style scoped>
  .access-denied {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  