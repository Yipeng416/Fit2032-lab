<template>
    <div>
      <h1>Book Counter</h1>
      <button @click="getBookCount" class="btn btn-primary">Get Book Count</button>
      <p v-if="count !== null">Total number of books: {{ count }}</p>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const count = ref(null);
  const error = ref(null);
  
  const getBookCount = async () => {
    console.log('按钮被点击');
    try {
        const response = await axios.get('https://us-central1-fit5032-lab-c2033.cloudfunctions.net/countBooks');
      count.value = response.data.count;
      console.log('获取到数据：', response.data);
    } catch (err) {
      error.value = '获取书籍数量失败：' + err.message;
      console.error('获取数据时出错：', err);
    }
  };
  </script>
  
  <style scoped>
  .btn {
    margin-top: 20px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  