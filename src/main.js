import Vue from 'vue';
import App from './App.vue';
import Notifications from 'vue-notification';
import VueClipboard from 'vue-clipboard2';

Vue.config.productionTip = false;

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import store from './store';

Vue.use(Notifications);
Vue.use(VueClipboard);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
