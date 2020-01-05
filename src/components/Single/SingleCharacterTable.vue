<template>
  <b-table-simple dark class="skyrim">
    <b-tbody>
      <b-tr>
        <b-td colspan="2" class="aspect-ratio_3-4">
          <b-img-lazy
            :src="character.thumbnail.path"
            v-if="character.thumbnail !== ''"
          />
        </b-td>
      </b-tr>
      <b-tr>
        <b-th>Учитель навыка</b-th>
        <b-td v-if="character.stats.trainer !== ''">
          {{ character.stats.trainer }} -
          {{ $t(`skills.levels.${character.stats.trainerLevel}`) }}
        </b-td>
        <b-td v-else>{{ $t('booleans.false') }}</b-td>
      </b-tr>
      <b-tr>
        <b-th>Торговец</b-th>
        <b-td v-if="character.stats.trader !== ''">
          {{ character.stats.trader }}
        </b-td>
        <b-td v-else>{{ $t('booleans.false') }}</b-td>
      </b-tr>
      <b-tr>
        <b-th>Другие услуги</b-th>
        <b-td v-if="character.stats.otherServices !== ''">
          {{ character.stats.otherServices }}
        </b-td>
        <b-td v-else>{{ $t('booleans.false') }}</b-td>
      </b-tr>
      <b-tr>
        <b-th>Фракция</b-th>
        <b-td v-if="character.stats.faction !== ''">
          {{ character.stats.faction }}
        </b-td>
        <b-td v-else>{{ $t('booleans.false') }}</b-td>
      </b-tr>
      <b-tr>
        <b-th>Локация</b-th>
        <b-td>{{ character.stats.location }}</b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
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
export default class SingleCharacterTable extends Vue {}
</script>
