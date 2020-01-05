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
import store from '@/store/index';
import { ICharacter } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';

type ListAccordionData = {
  _id: string,
  title: string,
  link: string,
}

@Component({
  components: {
    ListAccordion,
    PageHeader,
    SingleCharacterDetails,
    SingleCharacterTable,
  },
  metaInfo() {
    return {
      title: (this as SingleCharacter).character.title,
    };
  },
  beforeRouteEnter(to: any, from: any, next: any) {
    const params = {
      universe: to.params.universe,
      slug: to.params.slug,
    };

    store.dispatch('getSingleCharacter', params).then(() => {
      next((vm: SingleCharacter) => {
        vm.character = vm.$store.state.data;
      });
    });
  },
  beforeRouteUpdate(to: any, from: any, next: any) {
    const params = {
      universe: to.params.universe,
      slug: to.params.slug,
    };

    store.dispatch('getSingleCharacter', params).then(() => {
      (this as SingleCharacter).character = this.$store.state.data;
      next();
    });
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

  data: ListAccordionData[] = []

  get getCharacterName(): string {
    let { title } = this.character;
    if (this.character.alias !== '') {
      title += ` (${this.character.alias})`;
    }
    return title;
  }

  fillAccordion(): void {
    APIFetch.getCharactersList(this.$route.params.universe)
      .then((response: any) => {
        const { entries } = response.data;

        entries.forEach((element: any) => {
          const entry = {
            _id: element._id,
            title: element.title,
            link: `/characters/${this.$route.params.universe}/${element.slug}`,
          };
          this.data.push(entry);
        });
      });
  }

  mounted(): void {
    this.fillAccordion();
  }
}
</script>
