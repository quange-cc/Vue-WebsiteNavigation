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
import StyleManage from "@/components/admin/pages/StyleManage";
import personalCenter from "@/components/admin/pages/PersonalCenter";
import ZhiHuHotNews from "@/components/home/pages/ZhiHuHotNews";
import HotNews from "@/components/home/pages/HotNews";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: NavHome,
        children: [
            {
                path: '',
                name: 'home',
                component: NavMain,
                meta: {
                    metaInfo: {
                        title: '网址导航-泉哥',
                        keywords: '导航',
                        description: '最全的导航'
                    }
                }
            },
            {
                path: 'about',
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
                path: 'zhiHuHotNews',
                name: 'zhiHuHotNews',
                component: ZhiHuHotNews,
                meta: {
                    metaInfo: {
                        title: '网址导航-知乎热榜',
                        keywords: '导航',
                        description: '最全的导航'
                    }
                }
            },
            {
                path: 'hotNews',
                name: 'hotNews',
                component: HotNews,
                meta: {
                    metaInfo: {
                        title: '网址导航-热榜',
                        keywords: '导航',
                        description: '最全的导航'
                    }
                }
            },
            {
                path: 'login',
                name: 'login',
                component: NavLogin
            },
        ]
    },
    {
        path: '/admin',
        component: NavAdmin,
        meta: {
            isAuth: true
        },
        children: [
            {
                path: '',
                name: 'admin',
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
            {
                path: 'style-manage',
                name: 'styleManage',
                component: StyleManage,
                meta: {
                    isAuth: true
                }
            },
            {
                path: 'personal-center',
                name: 'personalCenter',
                component: personalCenter,
                meta: {
                    isAuth: true
                }
            }
        ]
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

const router = new VueRouter({
    routes
})

export default router
