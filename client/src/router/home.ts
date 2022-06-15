import {RouteRecordRaw} from "vue-router";


const layout = <RouteRecordRaw[]>[
    {
        path:"role",
        name:'role',
        component: () => import('../view/role/index.vue'),
        // meta:'用户管理'
    },
    {
        path:'menu',
        name:'menu',
        component: () => import('../view/menu/index.vue'),
        // meta:'菜单管理'
    },
    {
        path:'area',
        name:'area',
        component: () => import('../view/area/index.vue'),
        // meta: '区域管理'
    },
    {
        path:'classes',
        name:'classes',
        component: () => import('../view/classes/index.vue')
    },
    {
        path:'books',
        name:'books',
        component: () => import('../view/books/index.vue')
    }
]

export default layout
