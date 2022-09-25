import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/main.scss';

const pinia = createPinia();

import router from './router';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
