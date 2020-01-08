<template functional>
  <b-card
    class="mb-4 equal"
    bg-variant="skyrim"
    text-variant="white"
    no-body
  >
    <div class="aspect-ratio_16-9">
      <b-card-img-lazy
        :src="props.mod.thumbnail.path"
        v-if="props.mod.thumbnail !== ''"
        top
      />
      <b-img
        class="card-img img-fluid"
        blank-color="#333333"
        blank
        v-else
      />
    </div>

    <b-card-body>
      <b-card-title>{{ props.mod.title }}</b-card-title>
      <b-button
        :href="props.mod.link"
        :disabled="props.mod.link === ''"
        variant="skyrim"
        block
      >
        {{ parent.$t('buttons.download', { version: props.mod.version }) }}
      </b-button>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    mod: {
      type: Object,
      required: true,
    },
  },
})
export default class CardMod extends Vue {}
</script>
