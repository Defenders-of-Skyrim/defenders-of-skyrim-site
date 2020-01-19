<template functional>
  <nav class="breadcrumbs">
    <div class="breadcrumbs-container">
      <b-link to="/">
        <img
          svg-inline
          src="@/assets/icons/home.svg"
        >
      </b-link>
    </div>
    <div
      class="breadcrumbs-container"
      v-for="item in props.items"
      :key="item.index"
    >
      <b-link
        :to="item.link"
        :disabled="item.active"
      >
        {{ item.title }}
      </b-link>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    items: {
      type: Array,
      required: false,
    },
  },
})
export default class Breadcrumbs extends Vue {}
</script>
