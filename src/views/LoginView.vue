<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const hardcodedUsername = 'user'
const hardcodedPassword = 'password'

const login = () => {
  if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/about')
  } else {
    error.value = 'Invalid credentials'
  }
}
</script>

<style scoped>
/* 添加一些基本的样式 */
</style>
