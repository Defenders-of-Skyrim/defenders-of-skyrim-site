<template>
  <div>
    <page-header
      :title="$t('navbar.diary')"
      image="https://picsum.photos/1920/1080"
    />
    <div class="container">
      <div class="row">
        <div
          v-for="post in posts"
          :key="post._id"
          class="col-md-12 col-lg-8 col-hg-6"
        >
          <card-diary :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CardDiary from '@/components/Cards/CardDiary.vue';

@Component({
  components: {
    CardDiary,
  },
  head() {
    return {
      title: this.$t('navbar.diary').toString(),
      meta: [
        {
          property: 'og:title',
          content: `${this.$t('navbar.diary')} - Defenders of Skyrim`,
          hid: 'og:title',
        },
      ],
    };
  },
})
export default class Diary extends Vue {
  posts: any[] = []

  async asyncData({ app }: { app: any }): Promise<any> {
    const posts = await app.$getBlogPosts();
    return {
      posts,
    };
  }
}
</script>
