import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';
import CockpitAPI from '@/plugins/api';

Vue.config.productionTip = false;

Vue.use(BootstrapVue, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'hg', 'xh', 'xxh'],
});
Vue.use(VueMeta);
Vue.use(CockpitAPI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
