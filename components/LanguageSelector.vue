<template>
  <b-nav-form class="ml-2">
    <b-form-select
      :value="$i18n.locale"
      :options="options"
      @change="onChange"
    />
  </b-nav-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class LanguageSelector extends Vue {
  options: object[] = [
    { value: 'en', text: 'English' },
    { value: 'ru', text: 'Русский' },
  ]

  onChange(value: string): void {
    this.$router.push(this.switchLocalePath(value));
  }
}
</script>
