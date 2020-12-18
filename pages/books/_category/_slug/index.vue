<template>
  <div>
    <page-header
      :title="book.title"
      :image="require('@/assets/images/backgrounds/books.jpg')"
    />
    <div
      v-if="allowMatureView"
      class="container"
    >
      <div class="row">
        <div class="col-24">
          <breadcrumbs :items="breadcrumb" />
        </div>
        <div class="col-md-14 col-lg-16 col-xh-17 col-xxh-18 order-1 order-md-0">
          <b-card
            class="mb-3"
            bg-variant="skyrim"
            text-variant="white"
            no-body
          >
            <client-only>
              <b-card-body>
                <div v-html="book.content" />
                <div v-if="gallery.length > 0">
                  <h2 class="mb-4">
                    {{ $t('books.gallery') }}
                  </h2>
                  <CoolLightBox
                    :items="gallery"
                    :index="index"
                    @close="index = null"
                  />

                  <div class="container-fluid px-0">
                    <div class="row">
                      <div
                        v-for="(image, imageIndex) in gallery"
                        :key="imageIndex"
                        class="col-xl-4 col-lg-8 col-md-12"
                      >
                        <img
                          class="img-thumbnail img-gallery mb-4"
                          :src="image"
                          @click="index = imageIndex"
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </b-card-body>
              <template slot="placeholder">
                <div class="card-body">
                  <div v-html="book.content" />
                  <div v-if="gallery.length > 0">
                    <h2 class="mb-4">
                      {{ $t('books.gallery') }}
                    </h2>
                    <div class="container-fluid px-0">
                      <div class="row">
                        <div
                          v-for="(image, imageIndex) in gallery"
                          :key="imageIndex"
                          class="col-xl-4 col-lg-8 col-md-12"
                        >
                          <img
                            class="img-thumbnail img-gallery mb-4"
                            :src="image"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </client-only>
          </b-card>
        </div>
        <div class="col-md-10 col-lg-8 col-xh-7 col-xxh-6 order-0 order-md-1">
          <single-book-table :book="book" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CoolLightBox from 'vue-cool-lightbox';
import SingleBookTable from '@/components/Single/SingleBookTable.vue';

@Component({
  components: {
    CoolLightBox,
    SingleBookTable,
  },
  head() {
    return {
      title: (this as SingleBook).book.title,
      meta: [
        {
          property: 'og:title',
          content: `${(this as SingleBook).book.title} - Defenders of Skyrim`,
          hid: 'og:title',
        },
      ],
    };
  },
})
export default class SingleBook extends Vue {
  book: any = {
    title: '',
    content: '',
  }

  gallery: string[] = []

  index: null | number = null

  get breadcrumb(): any[] {
    return [
      {
        title: `${this.$t('books.title', { serie: this.$t(`books.${this.book.category}`) })}`,
        link: `/books/${this.book.category}`,
        active: false,
      },
      {
        title: this.book.title,
        link: this.book.slug,
        active: true,
      },
    ];
  }

  get allowMatureView(): boolean {
    const { showMatureContent } = this.$store.state.user;

    return this.book.category === 'not-lusty-argonian-maid'
      ? showMatureContent : true;
  }

  async asyncData({ app, params }: { app: any, params: any }): Promise<any> {
    const book = await app.$getSingleBook(params.category, params.slug);
    console.log(book);

    const gallery = book.gallery.map((element: any) => app.$getAbsoluteImageURL(element.path));
    return {
      book,
      gallery,
    };
  }
}
</script>
