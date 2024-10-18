<template>
    <div class="login">
      <h2>Firebase login</h2>
      <form @submit.prevent="signin">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">login</button>
      </form>
      <p v-if="error">{{ error }}</p>
      <p>no account?<router-link to="/FireRegister">go to register</router-link></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const router = useRouter()
  
  // 管理员账户硬编码信息
  const adminEmail = 'Admin@gmail.com'
  const adminPassword = '123456'
  
  const signin = () => {
    // 检查是否是管理员登录
    if (email.value === adminEmail && password.value === adminPassword) {
      console.log('admin sign in')
      localStorage.setItem('isAuthenticated', 'admin')
      router.push('/admin')  // 管理员登录后跳转到 Admin 页面
      return
    }
  
    // 普通用户登录
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        console.log('Firebase user sign in')
        localStorage.setItem('isAuthenticated', 'user')
        router.push('/user')  // 普通用户登录成功后跳转到 User 页面
      })
      .catch((err) => {
        error.value = 'sign in fail: ' + err.message
      })
  }
  </script>
  
  <style scoped>
  /* 添加一些基本的样式 */
  </style>
  