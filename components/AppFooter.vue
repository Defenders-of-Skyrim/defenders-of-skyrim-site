<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-6 col-xl-5 col-xxh-4">
          <b-navbar-brand :to="localePath('/')">
            <client-only>
              <img
                svg-inline
                src="@/assets/images/logo.svg"
              >
              <template slot="placeholder">
                <img src="@/assets/images/logo.svg">
              </template>
            </client-only>
            <p>Глобальная модификация для Skyrim</p>
          </b-navbar-brand>
          <p class="mt-3">
            &copy; 2017-2020 Long-Sighted Films.
            Powered by Vue.js and Cockpit CMS
          </p>
        </div>
        <div class="col-md-6 col-lg-4 col-hg-3">
          <h5>{{ $t('navbar.characters.index') }}</h5>
          <ul class="footer__nav">
            <li>
              <b-link :to="localePath('/characters/followers')">
                {{ $t('navbar.characters.subitems.followers') }}
              </b-link>
            </li>
            <li>
              <b-link :to="localePath('/characters/trainers')">
                {{ $t('navbar.characters.subitems.trainers') }}
              </b-link>
            </li>
            <li>
              <b-link :to="localePath('/characters/traders')">
                {{ $t('navbar.characters.subitems.traders') }}
              </b-link>
            </li>
            <li>
              <b-link :to="localePath('/characters/pets')">
                {{ $t('navbar.characters.subitems.pets') }}
              </b-link>
            </li>
            <li>
              <b-link :to="localePath('/characters/other')">
                {{ $t('navbar.characters.subitems.other') }}
              </b-link>
            </li>
          </ul>
        </div>
        <div class="col-md-5 col-lg-3 col-xh-2">
          <h5>{{ $t('navbar.apparel.subitems.headerWeapons') }}</h5>
          <ul class="footer__nav">
            <li>
              <b-link :to="localePath('/weapons/onehanded')">
                {{ $t('navbar.apparel.subitems.onehanded') }}
              </b-link>
            </li>
            <li>
              <b-link :to="localePath('/weapons/twohanded')">
                {{ $t('navbar.apparel.subitems.twohanded') }}
              </b-link>
            </li>
            <li>
              <b-link :to="localePath('/weapons/ranged')">
                {{ $t('navbar.apparel.subitems.ranged') }}
              </b-link>
            </li>
            <li>
              <b-link :to="localePath('/weapons/staves')">
                {{ $t('navbar.apparel.subitems.staves') }}
              </b-link>
            </li>
          </ul>
        </div>
        <div class="col-md-5 col-lg-4 col-hg-3">
          <h5>{{ $t('navbar.apparel.subitems.headerArmor') }}</h5>
          <ul class="footer__nav">
            <li>
              <b-link :to="localePath('/armor/light')">
                {{ $t('navbar.apparel.subitems.lightArmor') }}
              </b-link>
            </li>
            <li>
              <b-link :to="localePath('/armor/heavy')">
                {{ $t('navbar.apparel.subitems.heavyArmor') }}
              </b-link>
            </li>
            <li>
              <b-link :to="localePath('/armor/clothes')">
                {{ $t('navbar.apparel.subitems.clothes') }}
              </b-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class AppFooter extends Vue {}
</script>
