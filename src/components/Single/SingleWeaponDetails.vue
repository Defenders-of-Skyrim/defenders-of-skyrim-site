<template>
  <ul class="page-header__details">
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/sword.svg"
        />
        <p>Базовый урон</p>
      </div>
      {{ weapon.stats.damage }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/coin.svg"
        />
        <p>Стоимость</p>
      </div>
      {{ weapon.stats.cost }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/weight.svg"
        />
        <p>Вес</p>
      </div>
      {{ weapon.stats.weight }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/speed.svg"
        />
        <p>Скорость атаки</p>
      </div>
      {{ weapon.stats.speed }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/reach.svg"
        />
        <p>Дистанция атаки</p>
      </div>
      {{ weapon.stats.reach }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/anvil.svg"
        />
        <p>Улучшаемое</p>
      </div>
      {{ $t(`booleans.${weapon.stats.temperable}`) }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

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
