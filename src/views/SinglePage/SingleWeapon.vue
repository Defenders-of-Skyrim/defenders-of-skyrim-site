<template>
  <div>
    <page-header
      :title="weapon.title"
      :image="weapon.background.path"
      tall
    >
      <p>
        {{ $t('weapons.types.' + $route.params.type) }} -
        {{ $t(`weapons.subtypes.singular.${weapon.subtype}`) }}
      </p>
      <single-weapon-details
        class="d-none d-md-flex"
        :weapon="weapon"
      />
    </page-header>
    <div class="container">
      <div class="row">
        <div class="col-24">
          <breadcrumbs :items="breadcrumb"/>
        </div>
        <div class="col-md-14 col-xl-16 col-xxh-17 order-1 order-md-0">
          <single-weapon-details
            class="d-md-none"
            :weapon="weapon"
          />
          <b-card
            class="mb-3"
            bg-variant="skyrim"
            text-variant="white"
            no-body
          >
            <b-card-body v-html="weapon.description" />
          </b-card>
        </div>
        <div class="col-md-10 col-xl-8 col-xxh-7 order-0 order-md-1">
          <single-weapon-table :weapon="weapon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SingleWeaponDetails from '@/components/Single/SingleWeaponDetails.vue';
import SingleWeaponTable from '@/components/Single/SingleWeaponTable.vue';
import { IWeapon } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';
import { generateMetaDescription } from '@/plugins/api/functions';

@Component({
  components: {
    SingleWeaponDetails,
    SingleWeaponTable,
  },
  metaInfo() {
    return {
      title: ((this as SingleWeapon).weapon.title as string),
      meta: [
        {
          property: 'og:title',
          content: `${(this as SingleWeapon).weapon.title} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
        { name: 'description', content: (this as SingleWeapon).description },
        { property: 'og:description', content: (this as SingleWeapon).description },
      ],
    };
  },
  async beforeRouteEnter(to: any, from: any, next: any) {
    const weapon = await APIFetch.getSingleWeapon(to.params.slug);
    next((vm: SingleWeapon) => {
      vm.weapon = Object.freeze(weapon);
    });
  },
  async beforeRouteUpdate(to: any, from: any, next: any) {
    const weapon = await APIFetch.getSingleWeapon(to.params.slug);
    (this as SingleWeapon).weapon = Object.freeze(weapon);
    next();
  },
  watch: {
    '$i18n.locale': async function () {
      const weapon = await APIFetch.getSingleWeapon(this.$route.params.slug);
      (this as SingleWeapon).weapon = weapon;
    },
  },
})
export default class SingleWeapon extends Vue {
  weapon: IWeapon = {
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
      damage: '',
      enchantment: '',
      obtain: '',
      reach: '',
      speed: '',
      temperable: false,
      weight: '',
    },
    subtype: 'sword',
    thumbnail: '',
    title: '',
    type: 'onehanded',
  }

  get description(): string {
    return this.weapon.description !== ''
      ? generateMetaDescription(this.weapon.description, true) : '';
  }

  get breadcrumb(): any[] {
    return [
      {
        title: `${this.$t('navbar.apparel.subitems.headerWeapon')} - ${this.$t(`weapon.types.${this.weapon.type}`)}`,
        link: `/weapons/${this.weapon.type}`,
        active: false,
      },
      {
        title: this.weapon.title,
        link: this.weapon.slug,
        active: true,
      },
    ];
  }
}
</script>
