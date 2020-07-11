<template>
  <b-nav-item-dropdown
    class="nav-icon nav-user"
    right
    lazy
    no-caret
  >
    <template v-slot:button-content>
      <div class="icon">
        <client-only>
          <img
            svg-inline
            src="@/assets/icons/cog.svg"
          >
          <template slot="placeholder">
            <img src="@/assets/icons/cog.svg">
          </template>
        </client-only>
      </div>
    </template>
    <!--<div class="b-dropdown-text">
      <img
        class="mx-auto rounded-circle"
        src="https://via.placeholder.com/120"
        width="120"
        height="120"
      >
      <div>
        <h6>{{ user.email }}</h6>
        <p class="b-dropdown-text">
          <span>Patreon:</span>
          <span>Не подписан</span>
        </p>
        <p class="b-dropdown-text">
          <span>Пожертвовано:</span>
          <span>1000000 RUB</span>
        </p>
        <p class="b-dropdown-text">
          <span>Тестовые сборки:</span>
          <span>Недоступны</span>
        </p>
      </div>
    </div>
    <div class="dropdown-divider"></div>-->
    <p class="b-dropdown-text">
      <span>{{ $t('user.language') }}</span>
      <LanguageSelector />
    </p>
    <!--<p class="b-dropdown-text">
      <span>Реклама:</span>
      <b-form-checkbox
        v-model="user.showAds"
        disabled
        switch
      />
    </p>
    <p class="b-dropdown-text">
      <span>18+ контент:</span>
      <b-form-checkbox
        v-model="user.showMatureContent"
        disabled
        switch
      />
    </p>-->
    <div class="dropdown-divider" />
    <li role="presentation">
      <p class="b-dropdown-text">
        {{ `${$t('user.version')} ${version}` }}
      </p>
    </li>
    <b-dropdown-item href="https://github.com/longsightedfilms/defenders-of-skyrim-site">
      Github
    </b-dropdown-item>
    <b-dropdown-item href="https://www.donationalerts.com/r/longsightedfilms">
      {{ $t('user.donate') }}
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LanguageSelector from '@/components/LanguageSelector.vue';

@Component({
  components: {
    LanguageSelector,
  },
})
export default class NavbarUser extends Vue {
  version = process.env.PACKAGE_VERSION
}
</script>
