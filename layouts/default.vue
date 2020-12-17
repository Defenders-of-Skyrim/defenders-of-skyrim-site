<template>
  <div ref="inner" class="app">
    <navbar />
    <div class="navbar-margin">
      <nuxt />
    </div>
    <app-footer />
    <!--<client-only>
      <scroll-to :distance="100" />
    </client-only>-->
  </div>
</template>

<style lang="sass">
@import 'sass/main.sass'
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Navbar from '@/components/Navbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import ScrollTo from '@/components/ScrollTo.vue';

@Component({
  components: {
    Navbar,
    AppFooter,
    ScrollTo,
  },
})
export default class DefaultLayout extends Vue {}
</script>
