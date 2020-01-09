<template functional>
  <table class="table table-dark skyrim table-mobile">
    <tbody>
      <tr>
        <td
          colspan="2"
          class="aspect-ratio_1-1"
        >
          <b-img-lazy
            :src="props.weapon.thumbnail.path"
            v-if="props.weapon.thumbnail !== ''"
          />
        </td>
      </tr>
      <tr>
        <th>Зачарование</th>
        <td v-if="props.weapon.stats.enchantment !== ''">
          {{ props.weapon.stats.enchantment }}
        </td>
        <td v-else>{{ parent.$t('booleans.false') }}</td>
      </tr>
      <tr>
        <th>Местоположение</th>
        <td>{{ props.weapon.stats.obtain }}</td>
      </tr>
    </tbody>
  </table>
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
export default class SingleWeaponTable extends Vue {}
</script>
