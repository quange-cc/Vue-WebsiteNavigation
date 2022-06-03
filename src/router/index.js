import Vue from 'vue'
import VueRouter from 'vue-router'

import NavLogin from "@/components/home/pages/NavLogin";
import NavHome from "@/components/pages/NavHome";
import NavAdmin from "@/components/pages/NavAdmin";
import WebSiteManage from "@/components/admin/pages/WebSiteManage";
import NavAdminHome from "@/components/admin/NavAdminHome";
import SortManage from "@/components/admin/pages/SortManage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: NavHome,
        meta: {
            metaInfo: {
                title: '网址导航',
                keywords: '导航',
                description: '最全的导航'
            }
        }
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
