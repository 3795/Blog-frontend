import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/css/reset.css'
import './assets/css/global.css'
// import {VueMarkdown} from "vue-markdown";

Vue.config.productionTip = false;
Vue.use(iView);
// Vue.use(VueMarkdown);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
