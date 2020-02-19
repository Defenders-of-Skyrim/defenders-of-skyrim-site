<template>
  <div id="app" v-bar="{
    scrollThrottle: 16,
    draggerThrottle: 16
  }">
    <div class="inner" ref="inner">
      <navbar />
      <div class="navbar-margin">
        <transition
          name="fade-in-up"
          mode="out-in"
        >
          <router-view />
        </transition>
      </div>
      <app-footer v-show="isLoading === false" />
      <loading
        :active="isLoading"
        color="#fba54f"
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
@import 'sass/main.sass'
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Loading from 'vue-loading-overlay';
import Navbar from '@/components/Navbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import ScrollTo from '@/components/ScrollTo.vue';
import { setLanguage } from '@/plugins/api/functions';
import { store } from '@/store/';

@Component({
  components: {
    Loading,
    Navbar,
    AppFooter,
    ScrollTo,
  },
  metaInfo() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: undefined,
      titleTemplate: chunk => (chunk ? `${chunk} - Defenders of Skyrim` : 'Defenders of Skyrim'),
    };
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

  get isLoading(): boolean {
    return store.isLoading;
  }
}
</script>
