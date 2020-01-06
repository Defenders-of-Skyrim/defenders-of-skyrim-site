<template>
  <div>
    <page-header
      :title="getCharacterName"
      :image="character.background.path"
      tall
    >
      <p class="stroke">
        {{ character.stats.class }} из вселенной {{ character.universe }}
      </p>
      <single-character-details :character="character" />
    </page-header>
    <b-container>
      <b-row>
        <b-col
          xxh="18"
          xh="17"
          hg="16"
          xl="16"
          lg="16"
          md="14"
        >
          <b-card
            bg-variant="skyrim"
            text-variant="white"
            no-body
          >
            <b-card-body v-html="character.description" />
          </b-card>
          <list-accordion
            :title="`Персонажи вселенной ${character.universe}`"
            :data="data"
          />
        </b-col>
        <b-col
          xxh="6"
          xh="7"
          hg="8"
          xl="8"
          lg="8"
          md="10"
        >
          <single-character-table :character="character" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import Component from 'vue-class-component';
import PageHeader from '@/components/PageHeader.vue';
import ListAccordion from '@/components/ListAccordion.vue';
import SingleCharacterDetails from '@/components/Single/SingleCharacterDetails.vue';
import SingleCharacterTable from '@/components/Single/SingleCharacterTable.vue';
import { ICharacter, IListAccordionData } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';
import * as functions from '@/plugins/api/functions';

@Component({
  components: {
    ListAccordion,
    PageHeader,
    SingleCharacterDetails,
    SingleCharacterTable,
  },
  metaInfo() {
    return {
      title: (this as SingleCharacter).getCharacterName,
      meta: [
        {
          property: 'og:title',
          content: `${(this as SingleCharacter).getCharacterName} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
        { name: 'description', content: (this as SingleCharacter).description },
        { property: 'og:description', content: (this as SingleCharacter).description },
      ],
    };
  },
  async beforeRouteEnter(to: any, from: any, next: any) {
    const { universe, slug } = to.params;

    const character = await APIFetch.getSingleCharacter(universe, slug);
    const accordion = await APIFetch.getCharactersList(universe);

    next((vm: SingleCharacter) => {
      vm.character = character;
      vm.data = accordion;
    });
  },
  async beforeRouteUpdate(to: any, from: any, next: any) {
    const { universe, slug } = to.params;

    const character = await APIFetch.getSingleCharacter(universe, slug);
    const accordion = await APIFetch.getCharactersList(universe);

    (this as SingleCharacter).character = character;
    (this as SingleCharacter).data = accordion;
    next();
  },
})
export default class SingleCharacter extends Vue {
  character: ICharacter = {
    _by: '',
    _created: 0,
    _id: '',
    _mby: '',
    _modified: 0,
    alias: '',
    background: '',
    description: '',
    slug: '',
    stats: {
      class: '',
      followable: false,
      health: '',
      hireable: false,
      level: '',
      mana: '',
      marriable: false,
      otherServices: '',
      race: '',
      stamina: '',
      trader: '',
      trainer: '',
      trainerLevel: '',
    },
    thumbnail: '',
    title: '',
    universe: '',
    universe_slug: '',
  }

  data: IListAccordionData[] = []

  get getCharacterName(): string {
    let { title } = this.character;
    if (this.character.alias !== '') {
      title += ` (${this.character.alias})`;
    }
    return title;
  }

  get description(): string {
    return this.character.description !== ''
      ? functions.generateMetaDescription(this.character.description, true) : '';
  }
}
</script>
