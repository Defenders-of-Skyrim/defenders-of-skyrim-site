import Vue from 'vue';
import Fragment from 'vue-fragment';
import PageHeader from '@/components/PageHeader.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

Vue.component('breadcrumbs', Breadcrumbs);
Vue.component('page-header', PageHeader);

Vue.use(Fragment.Plugin);
