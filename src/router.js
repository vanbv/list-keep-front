import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Error from '@/pages/Error'
import NotFound from '@/pages/NotFound'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/error',
            component: Error
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})

export default router

