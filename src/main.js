import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import VueAxios from "vue-axios";
import router from './router'
import VueCookies from 'vue-cookies'
// 设置axios 请求允许携带cookies
axios.defaults.withCredentials = true;
axios.defaults.baseURL='//127.0.0.1:8081/'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCookies)
Vue.use(VueAxios,axios)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
