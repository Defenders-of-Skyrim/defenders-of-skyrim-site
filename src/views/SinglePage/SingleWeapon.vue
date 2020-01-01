<template>
  <div v-if="$store.state.isLoaded === true">
    <page-header
      :title="data.title"
      :image="data.background.path"
    >
      <p>
        {{ $t('weapons.types.' + $route.params.type) }} -
        {{ $t(`weapons.subtypes.singular.${data.subtype}`) }}
      </p>
      <ul class="page-header__details">
        <li>
          <div>
            <b-img src="@/assets/icons/sword.svg" />
            <p>Базовый урон</p>
          </div>
          {{ data.stats.damage }}
        </li>
        <li>
          <div>
            <b-img src="@/assets/icons/coin.svg" />
            <p>Стоимость</p>
          </div>
          {{ data.stats.cost }}
        </li>
        <li>
          <div>
            <b-img src="@/assets/icons/weight.svg" />
            <p>Вес</p>
          </div>
          {{ data.stats.weight }}
        </li>
        <li>
          <div>
            <b-img src="@/assets/icons/speed.svg" />
            <p>Скорость атаки</p>
          </div>
          {{ data.stats.speed }}
        </li>
        <li>
          <div>
            <b-img src="@/assets/icons/reach.svg" />
            <p>Дистанция атаки</p>
          </div>
          {{ data.stats.reach }}
        </li>
        <li>
          <div>
            <b-img src="@/assets/icons/anvil.svg" />
            <p>Улучшаемое</p>
          </div>
          {{ $t(`booleans.${data.stats.temperable}`) }}
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
          <div v-html="data.description"></div>
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
                  <b-img-lazy :src="data.thumbnail.path" />
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>Зачарование</b-th>
                <b-td>{{ data.stats.enchantment }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>Местоположение</b-th>
                <b-td>{{ data.stats.obtain }}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-param-reassign */
import Vue from 'vue';
import NProgress from 'nprogress';
import Component from 'vue-class-component';
import PageHeader from '@/components/PageHeader.vue';
import store from '@/store/index';

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
      next((vm: any) => {
        vm.data = vm.$store.state.data;
        vm.$store.commit('setLoadStatus', true);
      });
    });
  },
  beforeRouteUpdate(to: any, from: any, next: any) {
    store.dispatch('getSingleWeapon', to.params.slug).then(() => {
      NProgress.done();
      this.data = this.$store.state.data;
      next();
    });
  },
})
export default class SingleWeapon extends Vue {
  data: any = {}
}
</script>
