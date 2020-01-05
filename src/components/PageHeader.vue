<template>
  <div
    :class="getHeaderClass"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <b-container class="page-header__content">
      <b-row>
        <b-col>
          <h1>{{ title }}</h1>
          <slot />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
  },
  props: {
    image: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    tall: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
export default class PageHeader extends Vue {
  get getHeaderClass(): string {
    let header = 'page-header';

    if (this.$props.tall === true) {
      header += ' tall';
    }

    return header;
  }
}
</script>
