<template>
    <div class="container">
      <pre>{{ jsondata }}</pre>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        jsondata: null,
        error: null,
      };
    },
    mounted() {
      this.getBookCountAPI();
    },
    methods: {
      async getBookCountAPI() {
        try {
          const response = await axios.get(
            'https://us-central1-fit5032-lab-c2033.cloudfunctions.net/countBooks'
          );
          this.jsondata = response.data;
          this.error = null;
        } catch (error) {
          console.error('Error fetching book count:', error);
          this.error = error;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
    font-family: 'Courier New', Courier, monospace;
  }
  pre {
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 5px;
  }
  </style>
  