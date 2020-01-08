import Vue from 'vue';
import {
  BButton,
  BCard,
  BCardBody,
  BCardGroup,
  BCardImgLazy,
  BCardTitle,
  BDropdownGroup,
  BDropdownItem,
  BFormSelect,
  BLink,
  BNav,
  BNavItem,
  BNavForm,
  BNavItemDropdown,
  BNavbar,
  BNavbarNav,
  BNavbarBrand,
  BNavbarToggle,
  BTableSimple,
  BTbody,
  BTr,
  BTd,
  BTh,
  CollapsePlugin,
  ImagePlugin,
  LayoutPlugin,
  TabsPlugin,
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

Vue.component('b-card', BCard);
Vue.component('b-card-body', BCardBody);
Vue.component('b-card-group', BCardGroup);
Vue.component('b-card-img-lazy', BCardImgLazy);
Vue.component('b-card-title', BCardTitle);

Vue.component('b-form-select', BFormSelect);
Vue.component('b-link', BLink);

Vue.component('b-dropdown-group', BDropdownGroup);
Vue.component('b-dropdown-item', BDropdownItem);

Vue.component('b-nav', BNav);
Vue.component('b-nav-item', BNavItem);
Vue.component('b-nav-form', BNavForm);
Vue.component('b-nav-item-dropdown', BNavItemDropdown);

Vue.component('b-navbar', BNavbar);
Vue.component('b-navbar-nav', BNavbarNav);
Vue.component('b-navbar-brand', BNavbarBrand);
Vue.component('b-navbar-toggle', BNavbarToggle);

Vue.component('b-table-simple', BTableSimple);
Vue.component('b-tbody', BTbody);
Vue.component('b-tr', BTr);
Vue.component('b-td', BTd);
Vue.component('b-th', BTh);

Vue.use(LayoutPlugin, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'hg', 'xh', 'xxh'],
});
Vue.use(CollapsePlugin);
Vue.use(ImagePlugin);
Vue.use(TabsPlugin);
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
