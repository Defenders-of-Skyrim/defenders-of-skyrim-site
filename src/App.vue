<template>
  <div id="app">
    <navbar />
    <div class="navbar-margin">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <app-footer />
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

@Component({
  components: {
    Navbar,
    AppFooter,
  },
  metaInfo: {
    title: 'Defenders of Skyrim',
    titleTemplate: '%s - Defenders of Skyrim',
  },
})
export default class App extends Vue {}
</script>
