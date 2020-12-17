<template>
  <b-card
    class="mb-2"
    bg-variant="skyrim"
    text-variant="white"
  >
    <template v-slot:header>
      <h4 class="mb-0">
        {{ $t('version', { ver: version }) }}
      </h4>
    </template>
    <div v-html="description" />
  </b-card>
</template>

<i18n locale="en">
{
  "version": "Version {ver}"
}
</i18n>

<i18n locale="ru">
{
  "version": "Версия {ver}"
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    version: {
      type: String,
      required: true,
      default: 'N/A',
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
  },
})
export default class CardChangelog extends Vue {}
</script>
