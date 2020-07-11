<template functional>
  <table class="table table-dark skyrim table-mobile">
    <tbody>
      <tr>
        <td
          colspan="2"
          class="aspect-ratio_3-4"
        >
          <b-img-lazy
            v-if="props.character.thumbnail !== ''"
            :src="props.character.thumbnail.path"
          />
        </td>
      </tr>
      <tr>
        <th>{{ parent.$t('characters.table.trainer') }}</th>
        <td v-if="props.character.stats.trainer !== ''">
          {{ props.character.stats.trainer }} -
          {{ parent.$t(`skills.levels.${props.character.stats.trainerLevel}`) }}
        </td>
        <td v-else>
          {{ parent.$t('booleans.false') }}
        </td>
      </tr>
      <tr>
        <th>{{ parent.$t('characters.table.trader') }}</th>
        <td v-if="props.character.stats.trader !== ''">
          {{ props.character.stats.trader }}
        </td>
        <td v-else>
          {{ parent.$t('booleans.false') }}
        </td>
      </tr>
      <tr>
        <th>{{ parent.$t('characters.table.otherServices') }}</th>
        <td v-if="props.character.stats.otherServices !== ''">
          {{ props.character.stats.otherServices }}
        </td>
        <td v-else>
          {{ parent.$t('booleans.false') }}
        </td>
      </tr>
      <tr>
        <th>{{ parent.$t('characters.table.faction') }}</th>
        <td v-if="props.character.stats.faction !== ''">
          {{ props.character.stats.faction }}
        </td>
        <td v-else>
          {{ parent.$t('booleans.false') }}
        </td>
      </tr>
      <tr>
        <th>{{ parent.$t('characters.table.location') }}</th>
        <td>{{ props.character.stats.location }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
})
export default class SingleCharacterTable extends Vue {}
</script>
