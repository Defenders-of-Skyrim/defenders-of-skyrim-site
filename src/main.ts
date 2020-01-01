import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueMeta from 'vue-meta';
import Fragment from 'vue-fragment';
import App from './App.vue';
import router from './router';
import store from './store';
import CockpitAPI from '@/plugins/api';
import i18n from './i18n';

Vue.config.productionTip = false;

Vue.use(BootstrapVue, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'hg', 'xh', 'xxh'],
});
Vue.use(VueMeta);
Vue.use(CockpitAPI);
Vue.use(Fragment.Plugin);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
