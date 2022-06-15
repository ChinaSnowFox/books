import {createRouter,createWebHashHistory,RouteRecordRaw,RouteLocationNormalized,NavigationGuardNext} from 'vue-router'

import login from '../view/login/index.vue'
import Sign from '../view/Sign/index.vue'
import home from '../view/home/index.vue'

import layout from "./home";
const routes = <RouteRecordRaw[]> [
    {
        path:'/',
        redirect:'login',
    },
    {
        path:'/login',
        name:'login',
        component: login
    },
    {
        path:'/sign',
        name:'sign',
        component: Sign
    },
    {
        path:'/home',
        name:'home',
        component:home,
        children:layout
    }
]



export const router =createRouter({
    history:createWebHashHistory(),
    routes
})


function guard(to:RouteLocationNormalized,from:RouteLocationNormalized,next:NavigationGuardNext) :void {
    // 登录拦截
    const token = localStorage.getItem('token')
    /*if (!token){
        if(to.name === 'login'){
            next()
        }else {
            next()
        }
    }else {
        // 不允许进入登录页
        if (to.name === 'login'){}
        // next(`${from.name}`)
        else
            next()
    }*/
    // 权限拦截
}
// router.beforeEach(guard)
