<template>
  <div>
    <page-header
      :title="pageTitle"
      :image="require('@/assets/images/backgrounds/books.jpg')"
    />
    <div class="container">
      <div class="row">
        <div class="col">
          <b-card-group
            class="deck-characters"
            deck
          >
            <card-book
              v-for="book in books"
              :key="book._id"
              :book="book"
            />
          </b-card-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CardBook from '@/components/Cards/CardBook.vue';

@Component({
  components: {
    CardBook,
  },
  head() {
    return {
      title: ((this as Books).pageTitle),
      meta: [
        {
          property: 'og:title',
          content: `${(this as Books).pageTitle} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
      ],
    };
  },
})
export default class Books extends Vue {
  books: any[] = [];

  get pageTitle(): string {
    return this.$t('books.title', ({ serie: this.$t(`books.${this.$route.params.category}`) })).toString();
  }

  async asyncData({ app, params }: { app: any, params: any }): Promise<any> {
    const books = await app.$getBooks(params.category);
    return {
      books,
    };
  }
}
</script>
