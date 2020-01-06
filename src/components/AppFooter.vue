<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col
          xxh="4"
          xl="5"
          lg="6"
          md="8"
        >
          <b-navbar-brand to="/">
            <img
              svg-inline
              src="@/assets/images/logo.svg"
            />
            <p>Глобальная модификация для Skyrim</p>
          </b-navbar-brand>
          <language-selector />
          <p class="mb-0 mt-3">
            &copy; 2017-2020 Long-Sighted Films.
            Powered by Vue.js and Cockpit CMS
          </p>
        </b-col>
        <b-col
          hg="3"
          lg="4"
          md="6"
        >
          <h5>{{ $t('navbar.characters.index') }}</h5>
          <ul class="footer__nav">
            <li>
              <b-link to="/about">
                {{ $t('navbar.characters.subitems.followers') }}
              </b-link>
            </li>
            <li>
              <b-link to="/about">
                {{ $t('navbar.characters.subitems.trainers') }}
              </b-link>
            </li>
            <li>
              <b-link to="/about">
                {{ $t('navbar.characters.subitems.traders') }}
              </b-link>
            </li>
            <li>
              <b-link to="/about">
                {{ $t('navbar.characters.subitems.pets') }}
              </b-link>
            </li>
            <li>
              <b-link to="/about">
                {{ $t('navbar.characters.subitems.other') }}
              </b-link>
            </li>
          </ul>
        </b-col>
        <b-col
          xh="2"
          lg="3"
          md="5"
        >
          <h5>{{ $t('navbar.apparel.subitems.headerWeapons') }}</h5>
          <ul class="footer__nav">
            <li>
              <b-link to="/weapons/onehanded">
                {{ $t('navbar.apparel.subitems.onehanded') }}
              </b-link>
            </li>
            <li>
              <b-link to="/weapons/twohanded">
                {{ $t('navbar.apparel.subitems.twohanded') }}
              </b-link>
            </li>
            <li>
              <b-link to="/weapons/ranged">
                {{ $t('navbar.apparel.subitems.ranged') }}
              </b-link>
            </li>
            <li>
              <b-link to="/weapons/staves">
                {{ $t('navbar.apparel.subitems.staves') }}
              </b-link>
            </li>
          </ul>
        </b-col>
        <b-col
          hg="3"
          xl="4"
          lg="4"
          md="5"
        >
          <h5>{{ $t('navbar.apparel.subitems.headerArmor') }}</h5>
          <ul class="footer__nav">
            <li>
              <b-link to="/armor/light">
                {{ $t('navbar.apparel.subitems.lightArmor') }}
              </b-link>
            </li>
            <li>
              <b-link to="/armor/heavy">
                {{ $t('navbar.apparel.subitems.heavyArmor') }}
              </b-link>
            </li>
            <li>
              <b-link to="/armor/clothes">
                {{ $t('navbar.apparel.subitems.clothes') }}
              </b-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
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
export default class AppFooter extends Vue {}
</script>
