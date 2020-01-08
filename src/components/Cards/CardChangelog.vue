<template functional>
  <b-card
    class="mb-2"
    bg-variant="skyrim"
    text-variant="white"
  >
    <template v-slot:header>
      <h4 class="mb-0">Версия {{ props.version }}</h4>
    </template>
    <div v-html="props.description"></div>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    version: {
      type: String,
      required: true,
      default: 'N/A',
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
  },
})
export default class CardChangelog extends Vue {}
</script>
