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
      <single-weapon-details :weapon="weapon" />
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
            <b-card-body v-html="weapon.description" />
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
                    :src="weapon.thumbnail.path"
                    v-if="weapon.thumbnail !== ''"
                  />
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>Зачарование</b-th>
                <b-td>{{ weapon.stats.enchantment }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>Местоположение</b-th>
                <b-td>{{ weapon.stats.obtain }}</b-td>
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
import SingleWeaponDetails from '@/components/Single/SingleWeaponDetails.vue';
import PageHeader from '@/components/PageHeader.vue';
import { IWeapon } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';
import { generateMetaDescription } from '@/plugins/api/functions';

@Component({
  components: {
    SingleWeaponDetails,
    PageHeader,
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
}
</script>
