import Vue from 'vue'
import Router from 'vue-router'
import CompHome from '@/components/CompHome'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'CompHome',
        component: CompHome
    }]
})