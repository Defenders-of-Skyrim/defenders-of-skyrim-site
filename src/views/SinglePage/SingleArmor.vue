<template>
  <div>
    <page-header
      :title="armor.title"
      :image="armor.background.path"
      tall
    >
      <p>
        {{ $t('armor.types.' + $route.params.type) }} -
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
              <b-tr v-if="armor.stats.character !== '' && characterTitle !== ''">
                <b-th>Предназначено для персонажа</b-th>
                <b-td>
                  {{ characterTitle }}
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
import { IArmor } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';
import * as functions from '@/plugins/api/functions';

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
    const title = await APIFetch.getCharacterTitle(armor.stats.character);
    next(async (vm: SingleArmor) => {
      vm.armor = armor;
      vm.characterTitle = title;
    });
  },
  async beforeRouteUpdate(to: any, from: any, next: any) {
    const armor = await APIFetch.getSingleArmor(to.params.slug);
    const title = await APIFetch.getCharacterTitle(armor.stats.character);
    (this as SingleArmor).armor = armor;
    (this as SingleArmor).characterTitle = title;
    next();
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
      character: '',
      cost: '',
      enchantment: '',
      obtain: '',
      resist: '',
      set: false,
      setSlug: {
        _id: '',
        link: '',
        display: '',
      },
      temperable: false,
      weight: '',
    },
    subtype: 'helmet',
    thumbnail: '',
    title: '',
    type: '',
  }

  characterTitle = ''

  get description(): string {
    return this.armor.description !== ''
      ? functions.generateMetaDescription(this.armor.description, true) : '';
  }
}
</script>
