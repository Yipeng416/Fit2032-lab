import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import FirebaseSigninView from '../views/FirebaseSigninView.vue';
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue';
import AdminView from '../views/AdminView.vue';
import UserView from '../views/UserView.vue';
import AddBookView from '../views/AddBookView.vue';
import GetBookCountView from '@/views/GetBookCountView.vue';
import WeatherView from '@/views/WeatherView.vue';  // 引入WeatherView
import CountBookAPI from '@/views/CountBookAPI.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/Firelogin', name: 'FireLogin', component: FirebaseSigninView },
  { path: '/FireRegister', name: 'FireRegister', component: FirebaseRegisterView },
  { path: '/admin', name: 'Admin', component: AdminView },
  { path: '/user', name: 'User', component: UserView },
  { path: '/addbook', name: 'AddBook', component: AddBookView },
  { path: '/GetBookCount', name: 'GetBookCount', component: GetBookCountView },
  { path: '/WeatherCheck', name: 'WeatherCheck', component: WeatherView },  // 添加WeatherView路由
  { path: '/CountBookAPI', name: 'CountBookAPI', component: CountBookAPI },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
