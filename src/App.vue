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
import Navbar from '@/components/Navbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import ScrollTo from '@/components/ScrollTo.vue';

@Component({
  components: {
    Navbar,
    AppFooter,
    ScrollTo,
  },
  metaInfo: {
    title: 'Defenders of Skyrim',
    titleTemplate: '%s - Defenders of Skyrim',
  },
})
export default class App extends Vue {}
</script>
