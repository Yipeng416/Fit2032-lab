<template>
    <div class="container">
      <div class="header">
        <h1>WEATHER APP</h1>
        <div class="search-bar">
          <input
            type="text"
            v-model="city"
            placeholder="Enter city name"
            class="search-input"
          />
          <button @click="searchByCity" class="search-button">Search</button>
        </div>
      </div>
  
      <main v-if="weatherData">
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <img :src="iconUrl" alt="Weather Icon" />
        <p>{{ temperature }} °C</p>
        <span>{{ weatherData.weather[0].description }}</span>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import axios from 'axios';
  
  //API key
  const apiKey = '061fbc0a29ac26b78e009eb1c122da8e';
  
  const city = ref('');
  const weatherData = ref(null);
  
  // 计算天气图标URL
  const iconUrl = computed(() =>
    weatherData.value
      ? `http://api.openweathermap.org/img/w/${weatherData.value.weather[0].icon}.png`
      : ''
  );
  
  // 计算温度（从开尔文转换为摄氏度）
  const temperature = computed(() => {
    return weatherData.value
      ? Math.floor(weatherData.value.main.temp - 273.15)
      : null;
  });
  
  // 根据城市搜索天气
  const searchByCity = async () => {
    if (!city.value) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}`;
    console.log(`Fetching weather data from: ${url}`);
    try {
      const response = await axios.get(url);
      weatherData.value = response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 20px;
  }
  
  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .search-input {
    padding: 10px;
    margin-right: 10px;
  }
  
  .search-button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  </style>
  