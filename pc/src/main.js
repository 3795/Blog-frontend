import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'mavon-editor/dist/css/index.css'
import './assets/css/reset.css'
import './assets/css/global.css'

import mavonEditor from 'mavon-editor'
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(mavonEditor);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    // document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app');
