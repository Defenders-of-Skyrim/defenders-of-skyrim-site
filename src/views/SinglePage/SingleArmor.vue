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
      <single-armor-details
        class="d-none d-md-flex"
        :armor="armor"
      />
    </page-header>
    <div class="container">
      <div class="row">
        <div class="col-md-14 col-xl-16 col-xxh-17 order-1 order-md-0">
          <single-armor-details
            class="d-md-none"
            :armor="armor"
          />
          <b-card
            class="mb-3"
            bg-variant="skyrim"
            text-variant="white"
            no-body
          >
            <b-card-body v-html="armor.description" />
          </b-card>
        </div>
        <div class="col-md-10 col-xl-8 col-xxh-7 order-0 order-md-1">
          <single-armor-table
            :armor="armor"
            :link="getCharacterLink"
            :name="getCharacterName"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SingleArmorDetails from '@/components/Single/SingleArmorDetails.vue';
import SingleArmorTable from '@/components/Single/SingleArmorTable.vue';
import PageHeader from '@/components/PageHeader.vue';
import { IArmor, ICharacter } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';
import { getCharacterName, generateMetaDescription } from '@/plugins/api/functions';

@Component({
  components: {
    SingleArmorDetails,
    SingleArmorTable,
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
    if (char !== null) {
      return `/characters/${char.universe_slug}/${char.slug}`;
    }
    return '';
  }

  get description(): string {
    return this.armor.description !== ''
      ? generateMetaDescription(this.armor.description, true) : '';
  }
}
</script>
