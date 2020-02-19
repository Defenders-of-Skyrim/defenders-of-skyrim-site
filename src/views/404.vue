<template>
  <div>
    <page-header
      image="https://picsum.photos/1920/1080"
    />
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>HTTP 404 - Page not found</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Error404 extends Vue {}
</script>
