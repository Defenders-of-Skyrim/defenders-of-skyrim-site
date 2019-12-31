<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col cols="12">
          <p class="m-0 text-center">&copy; 2017-2020 Long-Sighted Films.
            Powered by Vue.js and Cockpit CMS</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class AppFooter extends Vue {}
</script>
