<template>
  <div class="navbar-container">
    <b-container>
      <b-row>
        <b-col>
          <b-navbar
            toggleable="lg"
            type="dark"
          >
            <b-navbar-brand to="/">
              <b-img-lazy src="@/assets/images/logo.svg" />
              <p>Глобальная модификация для Skyrim</p>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item-dropdown
                  :text="$t('navbar.characters.index')"
                  lazy
                  no-caret
                >
                  <b-dropdown-group
                    id="characters"
                    :header="$t('navbar.characters.subitems.header')"
                  >
                    <b-dropdown-item to="/about">
                      {{ $t('navbar.characters.subitems.followers') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/about">
                      {{ $t('navbar.characters.subitems.trainers') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/about">
                      {{ $t('navbar.characters.subitems.traders') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/about">
                      {{ $t('navbar.characters.subitems.pets') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/about">
                      {{ $t('navbar.characters.subitems.other') }}
                    </b-dropdown-item>
                  </b-dropdown-group>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown
                  class="columns"
                  :text="$t('navbar.apparel.index')"
                  lazy
                  no-caret
                >
                  <b-dropdown-group
                    id="apparel-weapons"
                    :header="$t('navbar.apparel.subitems.headerWeapons')"
                  >
                    <b-dropdown-item to="/weapons/onehanded">
                      {{ $t('navbar.apparel.subitems.onehanded') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/weapons/twohanded">
                      {{ $t('navbar.apparel.subitems.twohanded') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/weapons/ranged">
                      {{ $t('navbar.apparel.subitems.ranged') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/weapons/staves">
                      {{ $t('navbar.apparel.subitems.staves') }}
                    </b-dropdown-item>
                  </b-dropdown-group>
                  <b-dropdown-group
                    id="apparel-armor"
                    :header="$t('navbar.apparel.subitems.headerArmor')"
                  >
                    <b-dropdown-item to="/armor/light">
                      {{ $t('navbar.apparel.subitems.lightArmor') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/armor/heavy">
                      {{ $t('navbar.apparel.subitems.heavyArmor') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/armor/clothes">
                      {{ $t('navbar.apparel.subitems.clothes') }}
                    </b-dropdown-item>
                  </b-dropdown-group>
                  <!--<b-dropdown-item to="/about">Артефакты</b-dropdown-item>
                  <b-dropdown-item to="/about">Аксессуары</b-dropdown-item>-->
                </b-nav-item-dropdown>
                <!--<b-nav-item-dropdown
                  text="Магия"
                  lazy
                  no-caret
                >
                  <b-dropdown-group id="apparel-magic" header="Школы магии">
                    <b-dropdown-item to="/about">Восстановление</b-dropdown-item>
                    <b-dropdown-item to="/about">Иллюзия</b-dropdown-item>
                    <b-dropdown-item to="/about">Изменение</b-dropdown-item>
                    <b-dropdown-item to="/about">Колдовство</b-dropdown-item>
                    <b-dropdown-item to="/about">Разрушение</b-dropdown-item>
                  </b-dropdown-group>
                  <b-dropdown-item to="/about">Активные эффекты</b-dropdown-item>
                </b-nav-item-dropdown>-->
                <!--<b-nav-item-dropdown
                  text="Локации"
                  lazy
                  no-caret
                >
                  <b-dropdown-group id="locations" header="Страны / миры">
                    <b-dropdown-item to="/about">Греция</b-dropdown-item>
                    <b-dropdown-item to="/about">Египет</b-dropdown-item>
                    <b-dropdown-item to="/about">Преисподняя</b-dropdown-item>
                    <b-dropdown-item to="/about">Штаб Защитников Скайрима</b-dropdown-item>
                  </b-dropdown-group>
                </b-nav-item-dropdown>-->
                <!--<b-nav-item-dropdown
                  text="Квесты"
                  lazy
                  no-caret
                >
                  <b-dropdown-group id="quests" header="Типы заданий">
                    <b-dropdown-item to="/about">Главные</b-dropdown-item>
                    <b-dropdown-item to="/about">Побочные</b-dropdown-item>
                    <b-dropdown-item to="/about">Задания напарников</b-dropdown-item>
                    <b-dropdown-item to="/about">Задания Штаба Защитников Скайрима</b-dropdown-item>
                  </b-dropdown-group>
                </b-nav-item-dropdown>-->
                <b-nav-item to="/download">{{ $t('navbar.download') }}</b-nav-item>
              </b-navbar-nav>

              <b-navbar-nav class="ml-auto">
                <b-nav-item
                  href="https://github.com/longsightedfilms/defenders-of-skyrim-site"
                  class="icon"
                >
                  <b-img
                    src="@/assets/icons/github.svg"
                    alt="Github"
                  />
                </b-nav-item>
                <b-nav-item
                  href="https://www.donationalerts.com/r/longsightedfilms"
                  class="icon"
                >
                  <b-img
                    src="@/assets/icons/donate.svg"
                    alt="Поддержать проект"
                  />
                </b-nav-item>
                <language-selector />
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </div>
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
export default class Navbar extends Vue {}
</script>
