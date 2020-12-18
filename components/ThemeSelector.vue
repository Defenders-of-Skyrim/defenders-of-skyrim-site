<template>
  <b-nav-form class="ml-2">
    <b-form-select
      :value="$store.state.user.theme"
      :options="options"
      @change="onChange"
    />
  </b-nav-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class ThemeSelector extends Vue {
  options: object[] = [
    { value: 'skyrim', text: 'Skyrim' },
    { value: 'imperial', text: 'Imperial' },
    { value: 'paper', text: 'Paper' },
  ]

  onChange(value: string): void {
    this.$store.commit('setTheme', value);
    this.$cookies.set('theme', value, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: false,
      sameSite: 'strict',
      secure: false,
    });
  }
}
</script>
