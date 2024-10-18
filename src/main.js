import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // 导入路由

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';

// Import Firebase initialization
// import { firebaseApp } from './firebase/init';  // 从 init.js 导入

const app = createApp(App);
app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);  // 使用路由

// app.component('DataTable', DataTable);
// app.component('Column', Column);

app.mount('#app');
