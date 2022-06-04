import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Meta from "vue-meta";
import VueCookies from 'vue-cookies'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios
import axios from "axios";
import VueAxios from "vue-axios";
import cookies from "vue-cookies";


// 设置axios 请求允许携带cookies
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '//127.0.0.1:8081/'

Vue.use(VueAxios, axios);
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.use(Meta)


//全局前置路由拦截守卫
router.beforeEach((to, from, next) => {
    // 通过 requiresAuth 判断当前路由是否需要登录
    if (to.meta.isAuth) {
        // 判断是否存在token
        if (cookies.isKey('token')) {
            // 发送请求
            axios.get('/api/validateToken').then(resp => {
                if (resp.data.code === 7000) {
                    // 放行
                    next()
                } else {
                    next({path: '/',});
                }
            });
        } else {
            next({path: '/',});
        }

    } else {
        next()
    }

});

// 全局后置守卫
router.afterEach((to) => {
    // 设置title
    if (to.meta.metaInfo) {
        store.commit("CHANGE_META_INFO", to.meta.metaInfo)
    }

});


new Vue({
    store,
    router,
    render: h => h(App),
    metaInfo() {
        return {
            title: this.$store.state.metaInfo.title,
            meta: [
                {
                    name: 'Keywords',
                    content: this.$store.state.metaInfo.keywords
                }, {
                    name: 'description',
                    content: this.$store.state.metaInfo.description
                }
            ]
        }
    }
}).$mount('#app')
