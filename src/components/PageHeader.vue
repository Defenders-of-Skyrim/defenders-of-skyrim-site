<template>
  <div
    class="page-header"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <b-container class="page-header__content">
      <b-row>
        <b-col cols="12">
          <h1>{{ title }}</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
  },
  props: {
    image: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
})
export default class PageHeader extends Vue {}
</script>
