<template>
  <b-nav-form class="ml-2">
    <b-form-select
      v-model="$i18n.locale"
      :options="options"
      @change="setLang"
    />
  </b-nav-form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { setLanguage } from '@/plugins/api/functions';

@Component({})
export default class LanguageSelector extends Vue {
  options: object[] = [
    { value: 'en', text: 'English' },
    { value: 'ru', text: 'Русский' },
  ]

  setLang(lang: string): void {
    setLanguage(lang);
  }
}
</script>
