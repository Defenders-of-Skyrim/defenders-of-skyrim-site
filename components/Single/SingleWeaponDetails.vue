<template>
  <ul class="page-header__details">
    <li>
      <div>
        <client-only>
          <img
            svg-inline
            src="@/assets/icons/sword.svg"
          >
          <template slot="placeholder">
            <img src="@/assets/icons/sword.svg">
          </template>
        </client-only>
        <p>{{ $t('weapons.details.damage') }}</p>
      </div>
      {{ weapon.stats.damage }}
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
      {{ weapon.stats.cost }}
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
      {{ weapon.stats.weight }}
    </li>
    <li>
      <div>
        <client-only>
          <img
            svg-inline
            src="@/assets/icons/speed.svg"
          >
          <template slot="placeholder">
            <img src="@/assets/icons/speed.svg">
          </template>
        </client-only>
        <p>{{ $t('weapons.details.speed') }}</p>
      </div>
      {{ weapon.stats.speed }}
    </li>
    <li>
      <div>
        <client-only>
          <img
            svg-inline
            src="@/assets/icons/reach.svg"
          >
          <template slot="placeholder">
            <img src="@/assets/icons/reach.svg">
          </template>
        </client-only>
        <p>{{ $t('weapons.details.reach') }}</p>
      </div>
      {{ weapon.stats.reach }}
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
      {{ $t(`booleans.${weapon.stats.temperable}`) }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    weapon: {
      type: Object,
      required: true,
    },
  },
})
export default class SingleWeaponDetails extends Vue {}
</script>
