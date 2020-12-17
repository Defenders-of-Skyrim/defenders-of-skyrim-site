<template>
  <b-card
    class="mb-4"
    bg-variant="skyrim"
    text-variant="white"
    no-body
  >
    <nuxt-link
      :to="localePath(link)"
      class="aspect-ratio_1-1"
    >
      <b-card-img-lazy
        v-if="map.thumbnail !== ''"
        :src="$getAbsoluteImageURL(map.thumbnail.path)"
        top
      />
      <b-img
        v-else
        class="card-img img-fluid"
        blank-color="#333333"
        blank
      />
    </nuxt-link>

    <b-card-body>
      <b-card-title>{{ map.title }}</b-card-title>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    map: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
})
export default class CardMap extends Vue {}
</script>
