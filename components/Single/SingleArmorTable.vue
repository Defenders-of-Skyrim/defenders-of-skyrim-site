<template>
  <table class="table table-dark skyrim table-mobile">
    <tbody>
      <tr>
        <td
          colspan="2"
          class="aspect-ratio_1-1"
        >
          <b-img-lazy
            v-if="armor.thumbnail !== ''"
            :src="$getAbsoluteImageURL(armor.thumbnail.path)"
          />
        </td>
      </tr>
      <tr
        v-if="armor.stats.character.display !== undefined
          && armor.stats.character.display !== null"
      >
        <th>Предназначено для персонажа</th>
        <td>
          <b-link
            class="text-light"
            :to="localePath(link)"
          >
            {{ name }}
          </b-link>
        </td>
      </tr>
      <tr>
        <th>Зачарование</th>
        <td v-if="armor.stats.enchantment !== ''">
          {{ armor.stats.enchantment }}
        </td>
        <td v-else>
          {{ $t('booleans.false') }}
        </td>
      </tr>
      <tr>
        <th>Местоположение</th>
        <td>{{ armor.stats.obtain }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    armor: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
})
export default class SingleArmorTable extends Vue {}
</script>
