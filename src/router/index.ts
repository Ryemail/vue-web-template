import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail.vue'),
    },
    {
        path: '/params',
        name: 'params',
        component: () => import('../views/params.vue'),
        props: route => ({ query: route.query }),
    },
    { path: '/cascader', name: 'cascader', component: () => import('../views/cascader.vue') },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
