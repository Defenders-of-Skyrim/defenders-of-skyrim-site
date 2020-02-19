<template>
  <div>
    <page-header
      :title="pageTitle"
      image="require(`@/assets/images/backgrounds/characters/${type}.jpg`)"
    />
    <div class="container">
      <div class="row">
        <div class="col-24">
          <div class="page-filter">
            <input
              v-model="search"
              type="text"
              class="form-control form-control-lg"
              placeholder="Фильтр по имени..."
            >
          </div>
        </div>
        <div class="col">
          <b-card-group
            class="deck-characters"
            deck
          >
            <card-character
              v-for="character in filteredCharacters"
              :key="character._id"
              :character="character"
              :link="`/characters/${character.universe_slug}/${character.slug}`"
            />
          </b-card-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CardCharacter from '@/components/Cards/CardCharacter.vue';
import { ICharacter } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';
import { characterMetaTypes } from '@/plugins/api/constants';

@Component({
  components: {
    CardCharacter,
  },
  metaInfo() {
    return {
      title: ((this as Characters).pageTitle),
      meta: [
        {
          property: 'og:title',
          content: `${(this as Characters).pageTitle} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
      ],
    };
  },
  async beforeRouteEnter(to: any, from: any, next: any) {
    const characters = await APIFetch.getCharacters(to.params.characterType);
    next((vm: any) => {
      vm.characters = Object.freeze(characters);
      vm.type = to.params.characterType;
    });
  },
  async beforeRouteUpdate(to: any, from: any, next: any) {
    const characters = await APIFetch.getCharacters(to.params.characterType);
    (this as Characters).characters = characters;
    (this as Characters).type = to.params.characterType;
    next();
  },
  watch: {
    '$i18n.locale': async function () {
      const characters = await APIFetch.getCharacters(this.$route.params.characterType);
      (this as Characters).characters = characters;
      (this as Characters).type = this.$route.params.characterType;
    },
  },
})
export default class Characters extends Vue {
  search = '';

  characters: ICharacter[] = [];

  type = 'followers';

  get pageTitle(): string {
    const { characterType } = this.$route.params;
    if (!characterMetaTypes.includes(characterType)) {
      return `Персонажи вселенной ${this.$t(`universes.${characterType}`)}`;
    }
    return this.$t(`navbar.characters.subitems.${this.type}`) as string;
  }

  get filteredCharacters() {
    const searchString = this.search.toLowerCase();

    return this.characters.filter((character: ICharacter) => {
      const { title, alias } = character;
      return title.toLowerCase().includes(searchString)
      || alias.toLowerCase().includes(searchString);
    });
  }
}
</script>
