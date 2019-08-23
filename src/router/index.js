import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import TestComponentOne from '@/components/TestComponentOne';
import TestComponentTwo from '@/components/TestComponentTwo';
import TestComponentThree from '@/components/TestComponentThree';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/TestComponentOne',
            name: 'TestComponentOne',
            component: TestComponentOne
        },
        {
            path: '/TestComponentTwo',
            name: 'TestComponentTwo',
            component: TestComponentTwo
        },
        {
            path: '/TestComponentThree',
            name: 'TestComponentThree',
            component: TestComponentThree
        }
    ]
})
