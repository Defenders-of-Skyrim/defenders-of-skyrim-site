<template>
  <div>
    <page-header
      :title="$t(`navbar.characters.subitems.${type}`)"
      image="require(`@/assets/images/backgrounds/characters/${type}.jpg`)"
    />
    <div class="container">
      <div class="row">
        <div class="col">
          <b-card-group deck>
            <card-character
              v-for="character in characters"
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
import PageHeader from '@/components/PageHeader.vue';
import { ICharacter } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';

@Component({
  components: {
    CardCharacter,
    PageHeader,
  },
  metaInfo() {
    return {
      title: (this.$t(`navbar.characters.subitems.${(this as Characters).type}`) as string),
      meta: [
        {
          property: 'og:title',
          content: `${this.$t(`navbar.characters.subitems.${(this as Characters).type}`)} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
      ],
    };
  },
  async beforeRouteEnter(to: any, from: any, next: any) {
    const characters = await APIFetch.getCharacters(to.params.type);
    next((vm: any) => {
      vm.characters = Object.freeze(characters);
      vm.type = Object.freeze(to.params.type);
    });
  },
  async beforeRouteUpdate(to: any, from: any, next: any) {
    const characters = await APIFetch.getCharacters(to.params.type);
    (this as Characters).characters = characters;
    (this as Characters).type = Object.freeze(to.params.type);
    next();
  },
  watch: {
    '$i18n.locale': async function () {
      const characters = await APIFetch.getCharacters(this.$route.params.type);
      (this as Characters).characters = characters;
      (this as Characters).type = Object.freeze(this.$route.params.type);
    },
  },
})
export default class Characters extends Vue {
  characters: ICharacter[] = []

  type = 'followers';
}
</script>
