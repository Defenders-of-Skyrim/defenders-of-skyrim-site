<template>
  <div>
    <page-header
      title=""
      image="http://placeimg.com/640/480/any"
    />
    <b-container>
      <b-row>
        <b-col>
          <div v-html="$store.state.data"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import NProgress from 'nprogress';
import PageHeader from '@/components/PageHeader.vue';
import store from '@/store/index';

@Component({
  components: {
    PageHeader,
  },
  metaInfo: {
    title: 'Defenders of Skyrim',
    titleTemplate: undefined,
  },
  beforeRouteEnter(to: any, from: any, next: any) {
    store.dispatch('getPage', 'Главная страница').then(() => {
      NProgress.done();
      next();
    });
  },
})
export default class Home extends Vue {}
</script>
