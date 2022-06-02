import Vue from 'vue'
import VueRouter from 'vue-router'

import NavLogin from "@/components/pages/NavLogin";
import NavHome from "@/components/home/NavHome";
import NavAdmin from "@/components/admin/NavAdmin";
import WebSiteManage from "@/components/admin/pages/WebSiteManage";
import NavAdminHome from "@/components/admin/NavAdminHome";
import SortManage from "@/components/admin/pages/SortManage";
import Test123 from "@/components/Test-123";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: NavHome
    },
    {
        path: '/login',
        name: 'login',
        component: NavLogin
    },
    {
        path: '/admin',
        name: 'admin',
        component: NavAdmin,
        // 配置子级路由
        children: [
            {
                path: 'home',
                name: 'adminHome',
                component: NavAdminHome
            },
            {
                path: 'website-manage',
                name: 'wsm',
                component: WebSiteManage
            },
            {
                path: 'sort-manage',
                name: 'sortManage',
                component: SortManage
            },
            {
                path: 'test-1',
                name: 'test',
                component: Test123
            }
        ]
    }

]

const router = new VueRouter({
    routes
})

export default router
