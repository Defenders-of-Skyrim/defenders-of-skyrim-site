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
    path: '/weapons/:type',
    name: 'weapons_list',
    component: () => import(/* webpackChunkName: "weapons_list" */ '@/views/Weapons.vue'),
  },
  {
    path: '/weapons/:type/:subtype/:slug',
    name: 'weapons_single',
    component: () => import(/* webpackChunkName: "weapons_single" */ '@/views/SinglePage/SingleWeapon.vue'),
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

router.beforeEach((to: any, from: any, next: any) => {
  store.commit('setLoadStatus', false);
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
