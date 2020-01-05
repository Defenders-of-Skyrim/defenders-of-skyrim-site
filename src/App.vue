<template>
  <div id="app" v-bar="{
    scrollThrottle: 16,
    draggerThrottle: 16
  }">
    <div class="inner" ref="inner">
      <navbar />
      <div class="navbar-margin">
        <router-view />
      </div>
      <app-footer />
      <loading
        :active.sync="$store.state.isLoading"
        color="#cccccc"
        :height="128"
        :width="128"
        background-color="#000000"
        :z-index="2000"
      />
      <scroll-to :distance="100" />
    </div>
  </div>
</template>

<style lang="sass">
@import './sass/main.sass'
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Loading from 'vue-loading-overlay';
import Navbar from '@/components/Navbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import ScrollTo from '@/components/ScrollTo.vue';
import { setLanguage } from '@/plugins/api/functions';

@Component({
  components: {
    Loading,
    Navbar,
    AppFooter,
    ScrollTo,
  },
  metaInfo: {
    title: 'Defenders of Skyrim',
    titleTemplate: '%s - Defenders of Skyrim',
  },
})
export default class App extends Vue {
  mounted() {
    const lang = localStorage.getItem('language') !== null ? localStorage.language : '';
    if (lang !== '') {
      setLanguage(lang);
    } else {
      setLanguage(this.$i18n.locale);
    }
  }
}
</script>
