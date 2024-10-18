<template>
    <div class="add-book">
      <h2>Add new book</h2>
      <form @submit.prevent="addBook">
        <div>
          <label for="isbn">ISBN:</label>
          <input type="number" v-model="isbn" id="isbn" required />
        </div>
        <div>
          <label for="name">name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">submit</button>
      </form>
      <p v-if="error">{{ error }}</p>
      <p v-if="success">add book successfully!</p>
      
      <!-- 加载 BookList.vue -->
      <BookList />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { db } from '../firebase/init'
  import { collection, addDoc } from 'firebase/firestore'
  import BookList from '../components/BookList.vue'  // 引入 BookList.vue
  
  const isbn = ref('')
  const name = ref('')
  const error = ref('')
  const success = ref(false)
  
  const addBook = async () => {
    error.value = ''
    success.value = false
  
    try {
      await addDoc(collection(db, 'books'), {
        isbn: Number(isbn.value), // 将 ISBN 转换为数字类型
        name: name.value
      })
      success.value = true
      isbn.value = ''
      name.value = ''
    } catch (err) {
      error.value = 'add book fail: ' + err.message
    }
  }
  </script>
  
  <style scoped>
  .add-book {
    padding: 20px;
  }
  button {
    margin-top: 10px;
  }
  </style>
  