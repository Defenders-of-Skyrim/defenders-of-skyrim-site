<template>
  <ul class="page-header__details">
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/race.svg"
        />
        <p>Раса</p>
      </div>
      {{ character.stats.race }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/level.svg"
        />
        <p>Уровень</p>
      </div>
      {{ character.stats.level }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/health.svg"
        />
        <p>Здоровье</p>
      </div>
      <span class="text-danger">{{ character.stats.health }}</span>
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/mana.svg"
        />
        <p>Магия</p>
      </div>
      <span class="text-primary">{{ character.stats.mana }}</span>
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/stamina.svg"
        />
        <p>Выносливость</p>
      </div>
      <span class="text-success">{{ character.stats.stamina }}</span>
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/follower.svg"
        />
        <p>Напарник</p>
      </div>
      {{ $t(`booleans.${character.stats.followable}`) }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/hireling.svg"
        />
        <p>Наемник</p>
      </div>
      {{ $t(`booleans.${character.stats.hireable}`) }}
    </li>
    <li>
      <div>
        <img
          svg-inline
          src="@/assets/icons/marriage.svg"
        />
        <p>Брак</p>
      </div>
      {{ $t(`booleans.${character.stats.marriable}`) }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
})
export default class SingleCharacterDetails extends Vue {}
</script>
