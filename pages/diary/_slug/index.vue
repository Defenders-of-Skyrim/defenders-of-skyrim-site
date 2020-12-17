<template>
  <div>
    <page-header
      :title="post.title"
      :image="post.background"
    />
    <div class="container">
      <div class="row">
        <div class="col-24">
          <b-card
            class="mb-3"
            bg-variant="skyrim"
            text-variant="white"
            no-body
          >
            <client-only>
              <b-card-body v-html="post.content" />
              <template slot="placeholder">
                <div class="card mb-3 bg-skyrim text-white">
                  <div class="card-body">
                    <div v-html="post.content" />
                  </div>
                </div>
              </template>
            </client-only>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  head() {
    return {
      title: (this as SingleDiary).post.title,
      meta: [
        {
          property: 'og:title',
          content: `${(this as SingleDiary).post.title} - Defenders of Skyrim`,
          hid: 'og:title',
        },
      ],
    };
  },
})
export default class SingleDiary extends Vue {
  post: any = {
    title: '',
  }

  async asyncData({ app, params }: { app: any, params: any }): Promise<any> {
    const post = await app.$getSingleBlogPost(params.slug);
    return {
      post,
    };
  }
}
</script>
