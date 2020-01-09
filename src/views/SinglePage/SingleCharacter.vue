<template>
  <div>
    <page-header
      :title="getCharacterName"
      :image="character.background.path"
      tall
    >
      <p class="stroke">
        {{ $t('characters.universe', {
          class: character.stats.class,
          universe: character.universe,
        }) }}
      </p>
      <single-character-details
        class="d-none d-md-flex"
        :character="character"
      />
    </page-header>
    <div class="container">
      <div class="row">
        <div class="col-md-14 col-lg-16 col-xh-17 col-xxh-18 order-1 order-md-0">
          <single-character-details
            class="d-md-none"
            :character="character"
          />
          <b-card
            class="mb-3"
            bg-variant="skyrim"
            text-variant="white"
            no-body
          >
            <b-card-body v-html="character.description" />
          </b-card>
          <list-accordion
            :title="$t('accordions.characters', { universe: character.universe })"
            :data="data"
          />
        </div>
        <div class="col-md-10 col-lg-8 col-xh-7 col-xxh-6 order-0 order-md-1">
          <single-character-table :character="character" />
        </div>
      </div>
    </div>
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
import { getCharacterName, generateMetaDescription } from '@/plugins/api/functions';

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
      vm.character = Object.freeze(character);
      vm.data = accordion;
    });
  },
  async beforeRouteUpdate(to: any, from: any, next: any) {
    const { universe, slug } = to.params;

    const character = await APIFetch.getSingleCharacter(universe, slug);
    const accordion = await APIFetch.getCharactersList(universe);

    (this as SingleCharacter).character = Object.freeze(character);
    (this as SingleCharacter).data = accordion;
    next();
  },
  watch: {
    '$i18n.locale': async function () {
      const { universe, slug } = this.$route.params;

      const character = await APIFetch.getSingleCharacter(universe, slug);
      const accordion = await APIFetch.getCharactersList(universe);

      (this as SingleCharacter).character = Object.freeze(character);
      (this as SingleCharacter).data = accordion;
    },
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
    title: 'lorem ipsum',
    universe: '',
    universe_slug: '',
  }

  data: IListAccordionData[] = []

  get getCharacterName(): string {
    return getCharacterName(this.character);
  }

  get description(): string {
    return this.character.description !== ''
      ? generateMetaDescription(this.character.description, true) : '';
  }
}
</script>
