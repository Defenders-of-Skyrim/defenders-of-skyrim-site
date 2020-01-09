<template functional>
  <table class="table table-dark skyrim table-mobile">
    <tbody>
      <tr>
        <td
          colspan="2"
          class="aspect-ratio_1-1"
        >
          <b-img-lazy
            :src="props.armor.thumbnail.path"
            v-if="props.armor.thumbnail !== ''"
          />
        </td>
      </tr>
      <tr v-if="props.armor.stats.character !== null">
        <th>Предназначено для персонажа</th>
        <td>
          <b-link
            class="text-light"
            :to="props.link"
          >
            {{ props.name }}
          </b-link>
        </td>
      </tr>
      <tr>
        <th>Зачарование</th>
        <td v-if="props.armor.stats.enchantment !== ''">
          {{ props.armor.stats.enchantment }}
        </td>
        <td v-else>{{ parent.$t('booleans.false') }}</td>
      </tr>
      <tr>
        <th>Местоположение</th>
        <td>{{ props.armor.stats.obtain }}</td>
      </tr>
    </tbody>
  </table>
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
