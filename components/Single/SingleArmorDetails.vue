<template>
  <ul class="page-header__details">
    <li>
      <div>
        <client-only>
          <img
            svg-inline
            src="@/assets/icons/armor.svg"
          >
          <template slot="placeholder">
            <img src="@/assets/icons/armor.svg">
          </template>
        </client-only>
        <p>{{ $t('armor.details.resist') }}</p>
      </div>
      {{ armor.stats.resist }}
    </li>
    <li>
      <div>
        <client-only>
          <img
            svg-inline
            src="@/assets/icons/coin.svg"
          >
          <template slot="placeholder">
            <img src="@/assets/icons/coin.svg">
          </template>
        </client-only>
        <p>{{ $t('apparel.details.cost') }}</p>
      </div>
      {{ armor.stats.cost }}
    </li>
    <li>
      <div>
        <client-only>
          <img
            svg-inline
            src="@/assets/icons/weight.svg"
          >
          <template slot="placeholder">
            <img src="@/assets/icons/weight.svg">
          </template>
        </client-only>
        <p>{{ $t('apparel.details.weight') }}</p>
      </div>
      {{ armor.stats.weight }}
    </li>
    <li>
      <div>
        <client-only>
          <img
            svg-inline
            src="@/assets/icons/anvil.svg"
          >
          <template slot="placeholder">
            <img src="@/assets/icons/anvil.svg">
          </template>
        </client-only>
        <p>{{ $t('apparel.details.temperable') }}</p>
      </div>
      {{ $t(`booleans.${armor.stats.temperable}`) }}
    </li>
    <li>
      <div>
        <client-only>
          <img
            svg-inline
            src="@/assets/icons/anvil.svg"
          >
          <template slot="placeholder">
            <img src="@/assets/icons/anvil.svg">
          </template>
        </client-only>
        <p>{{ $t('armor.details.set') }}</p>
      </div>
      <span v-if="armor.stats.set !== null">
        {{ armor.stats.set.title }}
      </span>
      <span v-else>
        {{ $t('booleans.false') }}
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    armor: {
      type: Object,
      required: true,
    },
  },
})
export default class SingleArmorDetails extends Vue {}
</script>
