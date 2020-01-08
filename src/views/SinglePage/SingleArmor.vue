<template>
  <div>
    <page-header
      :title="armor.title"
      :image="armor.background.path"
      tall
    >
      <p>
        {{ $t('armor.types.' + armor.type) }} -
        {{ $t(`armor.subtypes.singular.${armor.subtype}`) }}
      </p>
      <single-armor-details :armor="armor" />
    </page-header>
    <b-container>
      <b-row>
        <b-col
          xxh="17"
          xl="16"
          lg="14"
          md="14"
        >
          <b-card
            bg-variant="skyrim"
            text-variant="white"
            no-body
          >
            <b-card-body v-html="armor.description" />
          </b-card>
        </b-col>
        <b-col
          xxh="7"
          xl="8"
          lg="10"
          md="10"
        >
          <b-table-simple dark class="skyrim">
            <b-tbody>
              <b-tr>
                <b-td colspan="2" class="aspect-ratio_1-1">
                  <b-img-lazy
                    :src="armor.thumbnail.path"
                    v-if="armor.thumbnail !== ''"
                  />
                </b-td>
              </b-tr>
              <b-tr v-if="armor.stats.character !== null">
                <b-th>Предназначено для персонажа</b-th>
                <b-td>
                  <b-link
                    class="text-light"
                    :to="getCharacterLink"
                  >
                    {{ getCharacterName }}
                  </b-link>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>Зачарование</b-th>
                <b-td v-if="armor.stats.enchantment !== ''">
                  {{ armor.stats.enchantment }}
                </b-td>
                <b-td v-else>{{ $t('booleans.false') }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>Местоположение</b-th>
                <b-td>{{ armor.stats.obtain }}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SingleArmorDetails from '@/components/Single/SingleArmorDetails.vue';
import PageHeader from '@/components/PageHeader.vue';
import { IArmor, ICharacter } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';
import { getCharacterName, generateMetaDescription } from '@/plugins/api/functions';

@Component({
  components: {
    SingleArmorDetails,
    PageHeader,
  },
  metaInfo() {
    return {
      title: ((this as SingleArmor).armor.title as string),
      meta: [
        {
          property: 'og:title',
          content: `${(this as SingleArmor).armor.title} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
        { name: 'description', content: (this as SingleArmor).description },
        { property: 'og:description', content: (this as SingleArmor).description },
      ],
    };
  },
  async beforeRouteEnter(to: any, from: any, next: any) {
    const armor = await APIFetch.getSingleArmor(to.params.slug);
    next((vm: SingleArmor) => {
      vm.armor = Object.freeze(armor);
    });
  },
  async beforeRouteUpdate(to: any, from: any, next: any) {
    const armor = await APIFetch.getSingleArmor(to.params.slug);
    (this as SingleArmor).armor = Object.freeze(armor);
    next();
  },
  watch: {
    '$i18n.locale': async function () {
      const armor = await APIFetch.getSingleArmor(this.$route.params.slug);
      (this as SingleArmor).armor = armor;
    },
  },
})
export default class SingleArmor extends Vue {
  armor: IArmor = {
    _by: '',
    _created: 0,
    _id: '',
    _mby: '',
    _modified: 0,
    background: 'null',
    description: '',
    slug: '',
    stats: {
      character: null,
      cost: '',
      enchantment: '',
      obtain: '',
      resist: '',
      set: null,
      temperable: false,
      weight: '',
    },
    subtype: 'helmet',
    thumbnail: '',
    title: '',
    type: 'light',
  }

  get getCharacterName(): string {
    return getCharacterName(this.armor.stats.character);
  }

  get getCharacterLink(): string {
    const char = (this.armor.stats.character as ICharacter);
    return `/characters/${char.universe_slug}/${char.slug}`;
  }

  get description(): string {
    return this.armor.description !== ''
      ? generateMetaDescription(this.armor.description, true) : '';
  }
}
</script>
