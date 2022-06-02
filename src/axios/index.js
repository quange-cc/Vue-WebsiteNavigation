import Vue from 'vue'
import axios from "axios";
import VueAxios from "vue-axios";


// 设置axios 请求允许携带cookies
axios.defaults.withCredentials = true;

Vue.use(VueAxios,axios)