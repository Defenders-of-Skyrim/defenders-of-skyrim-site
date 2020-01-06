import Vue from 'vue';
import {
  BButton,
  BFormSelect,
  BLink,
  CardPlugin,
  NavbarPlugin,
  ImagePlugin,
  LayoutPlugin,
  TabsPlugin,
  TableSimplePlugin,
} from 'bootstrap-vue';
import VueMeta from 'vue-meta';
import Fragment from 'vue-fragment';
import Vuebar from 'vuebar';
import router from './router';
// import store from './store';
import i18n from './i18n';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.performance = false;

Vue.component('b-button', BButton);
Vue.component('b-form-select', BFormSelect);
Vue.component('b-link', BLink);

Vue.use(LayoutPlugin, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'hg', 'xh', 'xxh'],
});
Vue.use(CardPlugin);
Vue.use(NavbarPlugin);
Vue.use(ImagePlugin);
Vue.use(TabsPlugin);
Vue.use(TableSimplePlugin);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: false,
});
Vue.use(Vuebar);
Vue.use(Fragment.Plugin);

new Vue({
  router,
  // store,
  i18n,
  render: h => h(App),
}).$mount('#app');
