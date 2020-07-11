import Vue from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Fragment from 'vue-fragment';

Vue.component('breadcrumbs', Breadcrumbs);
Vue.component('page-header', PageHeader);

Vue.use(Fragment.Plugin);
