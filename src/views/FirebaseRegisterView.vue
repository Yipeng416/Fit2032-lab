<template>
    <div class="register">
      <h2>Firebase register</h2>
      <form @submit.prevent="register">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">register</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const router = useRouter()
  
  const register = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        console.log('Firebase register successfully')
        router.push('/Firelogin')  // 注册成功后跳转到 Firebase 登录页面
      })
      .catch((err) => {
        error.value = 'register fail: ' + err.message
      })
  }
  </script>
  
  <style scoped>
  /* 添加一些基本的样式 */
  </style>
  