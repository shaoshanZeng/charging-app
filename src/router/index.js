import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    } else {
        return {
            x: 0,
            y: 0
        }
    }
}

export default new Router({
    scrollBehavior,
    mode: 'history',
    routes: [
        { path: '/', component: () => import('@/views/home') },
        { path: '/list', component: () => import('@/views/list') },
        { path: '/list/detail', component: () => import('@/views/list/detail') },
        { path: '/my', component: () => import('@/views/my') }


    ]
}
)