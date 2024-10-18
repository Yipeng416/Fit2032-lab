<template>
    <div>
      <h1>Books with ISBN > 1000</h1>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.name }} - ISBN: {{ book.isbn }}
          <button @click="editBook(book)">edit</button>
          <button @click="deleteBook(book.id)">delete</button>
        </li>
      </ul>
  
      <div v-if="selectedBook">
        <h2>edit books</h2>
        <form @submit.prevent="updateBook">
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="selectedBook.isbn" id="isbn" required />
  
          <label for="name">name:</label>
          <input type="text" v-model="selectedBook.name" id="name" required />
  
          <button type="submit">renew books</button>
        </form>
      </div>
      
      <p v-if="books.length === 0">no such books</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { db } from '../firebase/init'
  import { collection, query, where, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
  
  const books = ref([])
  const selectedBook = ref(null)
  
  const fetchBooks = async () => {
    try {
      const q = query(collection(db, 'books'), where('isbn', '>', 1000)) // 查询 ISBN 大于 1000 的书籍
      const querySnapshot = await getDocs(q)
      const booksArray = []
  
      querySnapshot.forEach((doc) => {
        booksArray.push({ id: doc.id, ...doc.data() })
      })
  
      books.value = booksArray
    } catch (error) {
      console.error('Error fetching books: ', error)
    }
  }
  
  // 编辑功能：选择一个书籍进行编辑
  const editBook = (book) => {
    selectedBook.value = { ...book } // 深拷贝防止直接修改原数据
  }
  
  // 更新书籍
  const updateBook = async () => {
    if (!selectedBook.value) return
  
    try {
      const bookDocRef = doc(db, 'books', selectedBook.value.id) // 获取要更新的文档引用
      await updateDoc(bookDocRef, {
        isbn: Number(selectedBook.value.isbn),
        name: selectedBook.value.name
      })
      alert('renew books successfully!')
      
      // 更新本地数据
      const updatedIndex = books.value.findIndex(book => book.id === selectedBook.value.id)
      if (updatedIndex !== -1) {
        books.value[updatedIndex] = { ...selectedBook.value }
      }
  
      selectedBook.value = null // 清除选择的书籍
    } catch (error) {
      console.error('Error updating book: ', error)
    }
  }
  
  // 删除书籍
  const deleteBook = async (bookId) => {
    try {
      const bookDocRef = doc(db, 'books', bookId)
      await deleteDoc(bookDocRef)
      alert('delete books fail!')
      
      // 从本地删除
      books.value = books.value.filter(book => book.id !== bookId)
    } catch (error) {
      console.error('Error deleting book: ', error)
    }
  }
  
  onMounted(() => {
    fetchBooks()
  })
  
  </script>
  
  <style scoped>
  /* 添加一些样式，如有需要 */
  </style>
  