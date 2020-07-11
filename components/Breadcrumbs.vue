<template>
  <nav
    class="breadcrumbs"
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
  >
    <div
      class="breadcrumbs-container"
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
    >
      <b-link
        itemprop="item"
        :to="localePath('/')"
      >
        <client-only>
          <img
            svg-inline
            src="@/assets/icons/home.svg"
          >
          <template slot="placeholder">
            <img src="@/assets/icons/home.svg">
          </template>
        </client-only>
      </b-link>
      <meta
        itemprop="position"
        content="1"
      />
    </div>
    <div
      class="breadcrumbs-container"
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
      v-for="(item, index) in items"
      :key="index"
    >
      <b-link
        itemprop="item"
        :to="item.link"
        :disabled="item.active"
      >
        <span itemprop="name">{{ item.title }}</span>
      </b-link>
      <meta
        itemprop="position"
        :content="index + 2"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    items: {
      type: Array,
      required: false,
    },
  },
})
export default class Breadcrumbs extends Vue {}
</script>
