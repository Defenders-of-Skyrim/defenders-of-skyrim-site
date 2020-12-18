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
import { Vue, Component } from 'nuxt-property-decorator';
import CardCharacter from '@/components/Cards/CardCharacter.vue';
import { characterMetaTypes } from '@/functions/constants';
import type {
  ICharacter,
} from '@/types/types';

@Component({
  components: {
    CardCharacter,
  },
  head() {
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
})
export default class Characters extends Vue {
  search = '';

  characters: ICharacter[] = [];

  type = 'followers';

  get pageTitle(): string {
    const { characterType } = this.$route.params;
    if (!characterMetaTypes.includes(characterType)) {
      return this.$t('accordions.characters', { universe: this.$t(`universes.${characterType}`) }).toString();
    }
    return this.$t(`navbar.characters.subitems.${this.type}`).toString();
  }

  get filteredCharacters() {
    const searchString = this.search.toLowerCase();

    return this.characters.filter((character: ICharacter) => {
      const { title, alias } = character;
      return title.toLowerCase().includes(searchString)
      || alias.toLowerCase().includes(searchString);
    });
  }

  async asyncData({ app, params }: { app: any, params: any }): Promise<any> {
    const characters = await app.$getCharacters(params.characterType);
    return {
      characters,
      type: params.characterType,
    };
  }
}
</script>
