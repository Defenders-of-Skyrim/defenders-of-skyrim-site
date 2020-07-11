<template>
  <b-button
    variant="scroll"
    :class="{ show: visible }"
    @click="scrollTo"
    aria-label="Scroll to top"
  >
    <img
      svg-inline
      src="@/assets/images/list_item.svg"
      aria-hidden="true"
    />
  </b-button>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {},
  props: {
    distance: {
      type: Number,
      required: true,
      default: 300,
    },
  },
})
export default class ScrollTo extends Vue {
  visible = false;

  scrollTo(): void {
    (this as any).$parent.$refs.inner.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  checkVisibility(element: any): void {
    console.log(element.scrollTop)
    this.visible = element.scrollTop > this.$props.distance;
  }

  mounted(): void {
    const element = (this as any).$parent.$refs.inner;
    element.addEventListener('scroll', () => {
      this.checkVisibility(element);
    }, { passive: true });
  }

  beforeDestroy(): void {
    const element = (this as any).$parent.$refs.inner;
    element.removeEventListener('scroll', () => {
      this.checkVisibility(element);
    }, { passive: true });
  }
}
</script>
