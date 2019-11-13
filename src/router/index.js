import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HelloWorld from '@/components/HelloWorld.vue'

const scrollBehavior = function(to, from, savedPosition) {
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
        { path: '/helloword', component: HelloWorld }
    ]
}
)