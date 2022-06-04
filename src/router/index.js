import Vue from 'vue'
import VueRouter from 'vue-router'

import NavHome from "@/components/pages/NavHome";
import NavLogin from "@/components/home/pages/NavLogin";

import NavAdmin from "@/components/pages/NavAdmin";
import WebSiteManage from "@/components/admin/pages/WebSiteManage";
import NavAdminHome from "@/components/admin/NavAdminHome";
import SortManage from "@/components/admin/pages/SortManage";
import NavMain from "@/components/home/NavMain";
import NavAbout from "@/components/home/pages/NavAbout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: NavHome,
        children: [
            {
                path: '/',
                name: 'home',
                component: NavMain,
                meta: {
                    metaInfo: {
                        title: '网址导航',
                        keywords: '导航',
                        description: '最全的导航'
                    }
                }
            },
            {
                path: '/about',
                name: 'about',
                component: NavAbout,
                meta: {
                    metaInfo: {
                        title: '网址导航-关于',
                        keywords: '导航',
                        description: '最全的导航'
                    }
                }
            },
            {
                path: '/login',
                name: 'login',
                component: NavLogin
            },
            {
                path: '*',
                name: 'Page-404',
                component: () => import('@/view/error/Page404'),
                meta: {
                    metaInfo: {
                        title: '404-页面未找到',
                        keywords: '导航',
                        description: '最全的导航'
                    }
                }
            }
        ]
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
        meta: {
            isAuth: true
        },
        children: [
            {
                path: 'home',
                name: 'adminHome',
                component: NavAdminHome,
                meta: {
                    isAuth: true
                }
            },
            {
                path: 'website-manage',
                name: 'wsm',
                component: WebSiteManage,
                meta: {
                    isAuth: true
                }
            },
            {
                path: 'sort-manage',
                name: 'sortManage',
                component: SortManage,
                meta: {
                    isAuth: true
                }
            },
        ]
    }

]

const router = new VueRouter({
    routes
})

export default router
