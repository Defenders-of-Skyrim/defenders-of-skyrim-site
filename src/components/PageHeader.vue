<template>
  <div
    :class="getHeaderClass"
    :style="getBackgroundImage"
  >
    <div class="container page-header__content">
      <div class="row">
        <div class="col">
          <h1 v-if="title !== ''">{{ title }}</h1>
          <slot />
        </div>
      </div>
    </div>
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
      required: false,
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

  get getBackgroundImage(): any {
    return this.$props.image !== ''
      ? { backgroundImage: `url(${this.$props.image})` }
      : { backgroundImage: 'radial-gradient(circle, #eeaeca 0%, #94bbe9 100%)' };
  }
}
</script>
