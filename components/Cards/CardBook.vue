<template>
  <b-card
    class="mb-4"
    :class="{'card-draft': book.status === 'Draft'}"
    bg-variant="skyrim"
    text-variant="white"
    no-body
  >
    <nuxt-link
      :to="localePath(`/books/${book.category}/${book.slug}`)"
      class="aspect-ratio_3-4"
    >
      <b-card-img-lazy
        v-if="book.thumbnail !== ''"
        :src="$getAbsoluteImageURL(book.thumbnail.path)"
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
      <b-card-title>{{ book.title }}</b-card-title>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
})
export default class CardBook extends Vue {}
</script>
