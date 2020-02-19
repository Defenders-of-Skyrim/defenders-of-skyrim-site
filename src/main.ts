import Vue from 'vue';
import {
  BButton,
  BCard,
  BCardBody,
  BCardGroup,
  BCardHeader,
  BCardImgLazy,
  BCardTitle,
  BDropdownGroup,
  BDropdownItem,
  BDropdownText,
  BFormCheckbox,
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
  CollapsePlugin,
  ImagePlugin,
  ModalPlugin,
  TabsPlugin,
} from 'bootstrap-vue';
import VueMeta from 'vue-meta';
import Fragment from 'vue-fragment';
import Vuebar from 'vuebar';
import CustomComponents from '@/plugins/api';
import router from './router';
// import store from './store';
import i18n from './i18n';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.performance = false;

Vue.component('b-button', BButton);

Vue.component('b-card', BCard);
Vue.component('b-card-body', BCardBody);
Vue.component('b-card-header', BCardHeader);
Vue.component('b-card-group', BCardGroup);
Vue.component('b-card-img-lazy', BCardImgLazy);
Vue.component('b-card-title', BCardTitle);

Vue.component('b-form-checkbox', BFormCheckbox);
Vue.component('b-form-select', BFormSelect);
Vue.component('b-link', BLink);

Vue.component('b-dropdown-group', BDropdownGroup);
Vue.component('b-dropdown-item', BDropdownItem);
Vue.component('b-dropdown-text', BDropdownText);

Vue.component('b-nav', BNav);
Vue.component('b-nav-item', BNavItem);
Vue.component('b-nav-form', BNavForm);
Vue.component('b-nav-item-dropdown', BNavItemDropdown);

Vue.component('b-navbar', BNavbar);
Vue.component('b-navbar-nav', BNavbarNav);
Vue.component('b-navbar-brand', BNavbarBrand);
Vue.component('b-navbar-toggle', BNavbarToggle);

Vue.use(CollapsePlugin, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'hg', 'xh', 'xxh'],
});
Vue.use(ImagePlugin);
Vue.use(ModalPlugin);
Vue.use(TabsPlugin);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: false,
});
Vue.use(Vuebar);
Vue.use(Fragment.Plugin);

Vue.use(CustomComponents);

new Vue({
  router,
  // store,
  i18n,
  render: h => h(App),
}).$mount('#app');
