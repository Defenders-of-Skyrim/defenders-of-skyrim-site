import _Vue from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

export default function (Vue: typeof _Vue): void {
  Vue.component('breadcrumbs', Breadcrumbs);
  Vue.component('page-header', PageHeader);
}
