<template>
  <ul class="page-header__details">
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/armor.svg"
        />
        <p>Базовая защита</p>
      </div>
      {{ armor.stats.resist }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/coin.svg"
        />
        <p>Стоимость</p>
      </div>
      {{ armor.stats.cost }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/weight.svg"
        />
        <p>Вес</p>
      </div>
      {{ armor.stats.weight }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/anvil.svg"
        />
        <p>Улучшаемое</p>
      </div>
      {{ $t(`booleans.${armor.stats.temperable}`) }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/anvil.svg"
        />
        <p>Элемент набора</p>
      </div>
      <span v-if="armor.stats.set === true && armor.stats.setSlug !== null">
        {{ armor.stats.setSlug.display }}
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
