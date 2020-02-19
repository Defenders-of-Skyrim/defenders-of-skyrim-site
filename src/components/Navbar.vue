<template functional>
  <div class="navbar-container">
    <div class="container">
      <div class="row">
        <div class="col">
          <b-navbar
            toggleable="lg"
            type="dark"
          >
            <b-navbar-brand to="/">
              <img
                svg-inline
                src="@/assets/images/logo.svg"
              />
              <p>Глобальная модификация для Skyrim</p>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item-dropdown
                  class="columns"
                  :text="parent.$t('navbar.characters.index')"
                  lazy
                  no-caret
                >
                  <b-dropdown-group
                    id="characters"
                    :header="parent.$t('navbar.characters.subitems.header')"
                  >
                    <b-dropdown-item to="/characters/followers">
                      {{ parent.$t('navbar.characters.subitems.followers') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/characters/trainers">
                      {{ parent.$t('navbar.characters.subitems.trainers') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/characters/traders">
                      {{ parent.$t('navbar.characters.subitems.traders') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/characters/pets">
                      {{ parent.$t('navbar.characters.subitems.pets') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/characters/other">
                      {{ parent.$t('navbar.characters.subitems.other') }}
                    </b-dropdown-item>
                  </b-dropdown-group>

                  <b-dropdown-group
                    id="characters-universes"
                    :header="parent.$t('navbar.characters.subitems.headerUniverse')"
                  >
                    <b-dropdown-item to="/characters/dota">
                      {{ parent.$t('universes.dota') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/characters/league-of-legends">
                      {{ parent.$t('universes.league-of-legends') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/characters/overwatch">
                      {{ parent.$t('universes.overwatch') }}
                    </b-dropdown-item>
                  </b-dropdown-group>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown
                  class="columns"
                  :text="parent.$t('navbar.apparel.index')"
                  lazy
                  no-caret
                >
                  <b-dropdown-group
                    id="apparel-weapons"
                    :header="parent.$t('navbar.apparel.subitems.headerWeapons')"
                  >
                    <b-dropdown-item to="/weapons/onehanded">
                      {{ parent.$t('navbar.apparel.subitems.onehanded') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/weapons/twohanded">
                      {{ parent.$t('navbar.apparel.subitems.twohanded') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/weapons/ranged">
                      {{ parent.$t('navbar.apparel.subitems.ranged') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/weapons/staves">
                      {{ parent.$t('navbar.apparel.subitems.staves') }}
                    </b-dropdown-item>
                  </b-dropdown-group>
                  <b-dropdown-group
                    id="apparel-armor"
                    :header="parent.$t('navbar.apparel.subitems.headerArmor')"
                  >
                    <b-dropdown-item to="/armor/light">
                      {{ parent.$t('navbar.apparel.subitems.lightArmor') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/armor/heavy">
                      {{ parent.$t('navbar.apparel.subitems.heavyArmor') }}
                    </b-dropdown-item>
                    <b-dropdown-item to="/armor/clothes">
                      {{ parent.$t('navbar.apparel.subitems.clothes') }}
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
                <b-nav-item to="/download">
                  {{ parent.$t('navbar.download') }}
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
            <b-navbar-nav class="nav-right">
              <component :is="injections.components.NavbarUser" />
            </b-navbar-nav>
          </b-navbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import NavbarUser from '@/components/NavbarUser.vue';

@Component({
  inject: {
    components: {
      default: {
        NavbarUser,
      },
    },
  },
})
export default class Navbar extends Vue {}
</script>
