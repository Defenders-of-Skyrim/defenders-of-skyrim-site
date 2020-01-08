import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store/';
import { mutations } from '@/store/';

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
    path: '/characters/:type',
    name: 'characters_list',
    component: () => import(/* webpackChunkName: "characters_list" */ '@/views/Characters.vue'),
  },
  {
    path: '/characters/:universe/:slug',
    name: 'characters_single',
    component: () => import(/* webpackChunkName: "characters_single" */ '@/views/SinglePage/SingleCharacter.vue'),
  },
  {
    path: '/armor/:type',
    name: 'armor_list',
    component: () => import(/* webpackChunkName: "armor_list" */ '@/views/Armors.vue'),
  },
  {
    path: '/armor/:type/:subtype/:slug',
    name: 'armor_single',
    component: () => import(/* webpackChunkName: "armor_single" */ '@/views/SinglePage/SingleArmor.vue'),
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

router.beforeEach((to, from, next) => {
  // store.commit('setLoadingStatus', true);
  mutations.setLoadingStatus(true);
  next();
});

router.afterEach(() => {
  // store.commit('setLoadingStatus', false);
  mutations.setLoadingStatus(false);
});

export default router;
