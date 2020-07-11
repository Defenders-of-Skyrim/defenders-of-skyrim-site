<template>
  <div>
    <page-header image="https://picsum.photos/1920/1080" />
    <div class="container">
      <div class="row">
        <div class="col">
          <div v-html="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import APIFetch from '@/plugins/api/APIFetch';
import { generateMetaDescription } from '@/functions';

@Component({
  head() {
    return {
      titleTemplate: undefined,
      meta: [
        {
          property: 'og:title',
          content: 'Defenders of Skyrim',
          hid: 'og:title',
        },
        { hid: 'description', name: 'description', content: (this as Home).description },
        { property: 'og:description', content: (this as Home).description },
      ],
    };
  },
})
export default class Home extends Vue {
  content = ''

  get description(): string {
    return this.content !== '' ? generateMetaDescription(this.content, false) : '';
  }

  async asyncData({ app }: { app: any }): Promise<any> {
    const content = await app.$getPage('Главная страница')
    return {
      content: content,
    };
  }
}
</script>
