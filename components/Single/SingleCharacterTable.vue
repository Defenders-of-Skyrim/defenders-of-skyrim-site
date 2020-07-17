<template>
  <table class="table table-dark skyrim table-mobile">
    <tbody>
      <tr>
        <td
          colspan="2"
          class="aspect-ratio_3-4"
        >
          <b-img-lazy
            v-if="character.thumbnail !== ''"
            :src="$getAbsoluteImageURL(character.thumbnail.path)"
          />
        </td>
      </tr>
      <tr>
        <th>{{ $t('characters.table.trainer') }}</th>
        <td v-if="character.stats.trainer !== ''">
          {{ character.stats.trainer }} -
          {{ $t(`skills.levels.${character.stats.trainerLevel}`) }}
        </td>
        <td v-else>
          {{ $t('booleans.false') }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('characters.table.trader') }}</th>
        <td v-if="character.stats.trader !== ''">
          {{ character.stats.trader }}
        </td>
        <td v-else>
          {{ $t('booleans.false') }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('characters.table.otherServices') }}</th>
        <td v-if="character.stats.otherServices !== ''">
          {{ character.stats.otherServices }}
        </td>
        <td v-else>
          {{ $t('booleans.false') }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('characters.table.faction') }}</th>
        <td v-if="character.stats.faction !== ''">
          {{ character.stats.faction }}
        </td>
        <td v-else>
          {{ $t('booleans.false') }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('characters.table.location') }}</th>
        <td>{{ character.stats.location }}</td>
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
