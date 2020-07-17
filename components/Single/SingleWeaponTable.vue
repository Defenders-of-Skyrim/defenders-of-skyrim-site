<template>
  <table class="table table-dark skyrim table-mobile">
    <tbody>
      <tr>
        <td
          colspan="2"
          class="aspect-ratio_1-1"
        >
          <b-img-lazy
            v-if="weapon.thumbnail !== ''"
            :src="$getAbsoluteImageURL(weapon.thumbnail.path)"
          />
        </td>
      </tr>
      <tr>
        <th>Зачарование</th>
        <td v-if="weapon.stats.enchantment !== ''">
          {{ weapon.stats.enchantment }}
        </td>
        <td v-else>
          {{ $t('booleans.false') }}
        </td>
      </tr>
      <tr>
        <th>Местоположение</th>
        <td>{{ weapon.stats.obtain }}</td>
      </tr>
    </tbody>
  </table>
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
export default class SingleWeaponTable extends Vue {}
</script>
