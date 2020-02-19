<template>
  <div>
    <page-header
      image="https://picsum.photos/1920/1080"
    />
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
import Vue from 'vue';
import Component from 'vue-class-component';
import APIFetch from '@/plugins/api/APIFetch';
import { generateMetaDescription } from '@/plugins/api/functions';
import { ICharacter } from '@/plugins/api/interfaces';

@Component({
  metaInfo() {
    return {
      meta: [
        {
          property: 'og:title',
          content: 'Defenders of Skyrim',
          vmid: 'og:title',
        },
        { name: 'description', content: (this as Home).description },
        { property: 'og:description', content: (this as Home).description },
      ],
    };
  },
  async beforeRouteEnter(to: any, from: any, next: any) {
    const content = await APIFetch.getPage('Главная страница');
    next((vm: any) => {
      vm.content = content;
    });
  },
})
export default class Home extends Vue {
  content: string = ''

  get description(): string {
    return this.content !== ''
      ? generateMetaDescription(this.content, false) : '';
  }
}
</script>
