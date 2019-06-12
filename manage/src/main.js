import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'mavon-editor/dist/css/index.css'
import './assets/css/reset.css'
import './assets/css/global.css'
import axios from 'axios'
import mavonEditor from 'mavon-editor'

Vue.use(iView);
Vue.use(mavonEditor);

Vue.config.productionTip = false;

export const BASE_URL = "https://api.ntshare.cn/blog/v1";
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
