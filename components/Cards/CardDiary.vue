<template>
  <b-card
    class="mb-4"
    bg-variant="skyrim"
    text-variant="white"
    no-body
  >
    <nuxt-link
      :to="localePath(`/diary/${post.slug}`)"
      class="aspect-ratio_16-9"
    >
      <b-card-img-lazy
        v-if="post.thumbnail !== ''"
        :src="$getAbsoluteImageURL(post.thumbnail.path)"
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
      <b-card-title>{{ post.title }}</b-card-title>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
})
export default class CardMap extends Vue {}
</script>
