import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '*',
        component: () => import('@/views/404.vue')
    },
    {
        path: '/',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/work',
        component: () => import('@/views/Work.vue')
    },
    {
        path: '/about',
        component: () => import('@/views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
