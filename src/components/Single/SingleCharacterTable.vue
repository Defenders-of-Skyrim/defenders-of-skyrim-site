<template functional>
  <b-table-simple dark class="skyrim">
    <b-tbody>
      <b-tr>
        <b-td colspan="2" class="aspect-ratio_3-4">
          <b-img-lazy
            :src="props.character.thumbnail.path"
            v-if="props.character.thumbnail !== ''"
          />
        </b-td>
      </b-tr>
      <b-tr>
        <b-th>{{ parent.$t('characters.table.trainer') }}</b-th>
        <b-td v-if="props.character.stats.trainer !== ''">
          {{ props.character.stats.trainer }} -
          {{ parent.$t(`skills.levels.${props.character.stats.trainerLevel}`) }}
        </b-td>
        <b-td v-else>{{ parent.$t('booleans.false') }}</b-td>
      </b-tr>
      <b-tr>
        <b-th>{{ parent.$t('characters.table.trader') }}</b-th>
        <b-td v-if="props.character.stats.trader !== ''">
          {{ props.character.stats.trader }}
        </b-td>
        <b-td v-else>{{ parent.$t('booleans.false') }}</b-td>
      </b-tr>
      <b-tr>
        <b-th>{{ parent.$t('characters.table.otherServices') }}</b-th>
        <b-td v-if="props.character.stats.otherServices !== ''">
          {{ props.character.stats.otherServices }}
        </b-td>
        <b-td v-else>{{ parent.$t('booleans.false') }}</b-td>
      </b-tr>
      <b-tr>
        <b-th>{{ parent.$t('characters.table.faction') }}</b-th>
        <b-td v-if="props.character.stats.faction !== ''">
          {{ props.character.stats.faction }}
        </b-td>
        <b-td v-else>{{ parent.$t('booleans.false') }}</b-td>
      </b-tr>
      <b-tr>
        <b-th>{{ parent.$t('characters.table.location') }}</b-th>
        <b-td>{{ props.character.stats.location }}</b-td>
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
