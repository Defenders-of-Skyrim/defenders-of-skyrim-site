<template>
  <div>
    <page-header
      :title="weapon.title"
      :image="weapon.background.path"
    >
      <p>
        {{ $t('weapons.types.' + $route.params.type) }} -
        {{ $t(`weapons.subtypes.singular.${weapon.subtype}`) }}
      </p>
      <ul class="page-header__details">
        <li>
          <div>
            <b-img src="@/assets/icons/sword.svg" />
            <p>Базовый урон</p>
          </div>
          {{ weapon.stats.damage }}
        </li>
        <li>
          <div>
            <b-img src="@/assets/icons/coin.svg" />
            <p>Стоимость</p>
          </div>
          {{ weapon.stats.cost }}
        </li>
        <li>
          <div>
            <b-img src="@/assets/icons/weight.svg" />
            <p>Вес</p>
          </div>
          {{ weapon.stats.weight }}
        </li>
        <li>
          <div>
            <b-img src="@/assets/icons/speed.svg" />
            <p>Скорость атаки</p>
          </div>
          {{ weapon.stats.speed }}
        </li>
        <li>
          <div>
            <b-img src="@/assets/icons/reach.svg" />
            <p>Дистанция атаки</p>
          </div>
          {{ weapon.stats.reach }}
        </li>
        <li>
          <div>
            <b-img src="@/assets/icons/anvil.svg" />
            <p>Улучшаемое</p>
          </div>
          {{ $t(`booleans.${weapon.stats.temperable}`) }}
        </li>
      </ul>
    </page-header>
    <b-container>
      <b-row>
        <b-col
          xxh="9"
          xl="8"
          lg="7"
          md="6"
        >
          <div v-html="weapon.description"></div>
        </b-col>
        <b-col
          xxh="3"
          xl="4"
          lg="5"
          md="6"
        >
          <b-table-simple dark class="skyrim">
            <b-tbody>
              <b-tr>
                <b-td colspan="2" class="aspect-ratio_1-1">
                  <b-img-lazy
                    :src="weapon.thumbnail.path"
                    v-if="weapon.thumbnail !== ''"
                  />
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>Зачарование</b-th>
                <b-td>{{ weapon.stats.enchantment }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>Местоположение</b-th>
                <b-td>{{ weapon.stats.obtain }}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NProgress from 'nprogress';
import Component from 'vue-class-component';
import PageHeader from '@/components/PageHeader.vue';
import store from '@/store/index';
import { IWeapon } from '@/plugins/api/interfaces';

@Component({
  components: {
    PageHeader,
  },
  metaInfo() {
    return {
      title: (this.$store.state.data.title as string),
    };
  },
  beforeRouteEnter(to: any, from: any, next: any) {
    store.dispatch('getSingleWeapon', to.params.slug).then(() => {
      NProgress.done();
      next((vm: SingleWeapon) => {
        vm.weapon = vm.$store.state.data;
      });
    });
  },
  beforeRouteUpdate(to: any, from: any, next: any) {
    store.dispatch('getSingleWeapon', to.params.slug).then(() => {
      NProgress.done();
      (this as SingleWeapon).weapon = this.$store.state.data;
      next();
    });
  },
})
export default class SingleWeapon extends Vue {
  weapon: IWeapon = {
    _by: '',
    _created: 0,
    _id: '',
    _mby: '',
    _modified: 0,
    background: 'null',
    description: '',
    slug: '',
    stats: {
      character: '',
      cost: '',
      damage: '',
      enchantment: '',
      obtain: '',
      reach: '',
      speed: '',
      temperable: false,
      weight: '',
    },
    subtype: 'sword',
    thumbnail: '',
    title: '',
    type: '',
  }
}
</script>
