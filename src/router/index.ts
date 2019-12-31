import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/download',
    name: 'download',
    component: () => import(/* webpackChunkName: "download" */ '@/views/Download.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to: any, from: any, next: any) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.beforeEach((to: any, from: any, next: any) => {
  store.commit('setLoadStatus', false);
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
