<template>
  <ul class="page-header__details">
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/armor.svg"
        />
        <p>{{ $t('armor.details.resist') }}</p>
      </div>
      {{ armor.stats.resist }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/coin.svg"
        />
        <p>{{ $t('apparel.details.cost') }}</p>
      </div>
      {{ armor.stats.cost }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/weight.svg"
        />
        <p>{{ $t('apparel.details.weight') }}</p>
      </div>
      {{ armor.stats.weight }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/anvil.svg"
        />
        <p>{{ $t('apparel.details.temperable') }}</p>
      </div>
      {{ $t(`booleans.${armor.stats.temperable}`) }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/anvil.svg"
        />
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
import Vue from 'vue';
import Component from 'vue-class-component';

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
