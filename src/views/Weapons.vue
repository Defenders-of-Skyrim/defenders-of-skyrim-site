<template>
  <div>
    <page-header
      :title="$t(`weapons.types.${type}`)"
      :image="require(`@/assets/images/backgrounds/${type}.jpg`)"
    />
    <b-container>
      <b-row>
        <b-col cols="24">
          <b-tabs
            v-if="$route.params.type !== 'staves'"
            content-class="mt-3"
            fill
          >
            <b-tab
              title="Кинжалы"
              v-if="$route.params.type === 'onehanded'"
              lazy
            >
              <b-card-group deck>
                <card-weapon
                  v-for="weapon in weapons.daggers"
                  :key="weapon._id"
                  :weapon="weapon"
                  :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              title="Мечи"
              v-if="$route.params.type === 'onehanded'"
              lazy
            >
              <b-card-group deck>
                <card-weapon
                  v-for="weapon in weapons.swords"
                  :key="weapon._id"
                  :weapon="weapon"
                  :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              title="Топоры"
              v-if="$route.params.type === 'onehanded'"
              lazy
            >
              <b-card-group deck>
                <card-weapon
                  v-for="weapon in weapons.warAxes"
                  :key="weapon._id"
                  :weapon="weapon"
                  :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              title="Булавы"
              v-if="$route.params.type === 'onehanded'"
              lazy
            >
              <b-card-group deck>
                <card-weapon
                  v-for="weapon in weapons.maces"
                  :key="weapon._id"
                  :weapon="weapon"
                  :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              title="Клейморы"
              v-if="$route.params.type === 'twohanded'"
              lazy
            >
              <b-card-group deck>
                <card-weapon
                  v-for="weapon in weapons.greatswords"
                  :key="weapon._id"
                  :weapon="weapon"
                  :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              title="Секиры"
              v-if="$route.params.type === 'twohanded'"
              lazy
            >
              <b-card-group deck>
                <card-weapon
                  v-for="weapon in weapons.battleAxes"
                  :key="weapon._id"
                  :weapon="weapon"
                  :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              title="Молоты"
              v-if="$route.params.type === 'twohanded'"
              lazy
            >
              <b-card-group deck>
                <card-weapon
                  v-for="weapon in weapons.warhammers"
                  :key="weapon._id"
                  :weapon="weapon"
                  :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              title="Луки"
              v-if="$route.params.type === 'ranged'"
              lazy
            >
              <b-card-group deck>
                <card-weapon
                  v-for="weapon in weapons.bows"
                  :key="weapon._id"
                  :weapon="weapon"
                  :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              title="Арбалеты"
              v-if="$route.params.type === 'ranged'"
              lazy
            >
              <b-card-group deck>
                <card-weapon
                  v-for="weapon in weapons.crossbows"
                  :key="weapon._id"
                  :weapon="weapon"
                  :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
                />
              </b-card-group>
            </b-tab>
          </b-tabs>
          <b-card-group
            deck
            v-else
          >
            <card-weapon
              v-for="weapon in weapons"
              :key="weapon._id"
              :weapon="weapon"
              :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
            />
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CardWeapon from '@/components/Cards/CardWeapon.vue';
import PageHeader from '@/components/PageHeader.vue';
import { IWeaponData, IWeapon } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';

@Component({
  components: {
    CardWeapon,
    PageHeader,
  },
  metaInfo() {
    return {
      title: (this.$t(`weapons.types.${(this as Weapons).type}`) as string),
      meta: [
        {
          property: 'og:title',
          content: `${this.$t(`weapons.types.${(this as Weapons).type}`)} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
      ],
    };
  },
  async beforeRouteEnter(to: any, from: any, next: any) {
    const weapons = await APIFetch.getWeapons(to.params.type);
    next((vm: any) => {
      vm.weapons = weapons;
      vm.type = to.params.type;
    });
  },
  async beforeRouteUpdate(to: any, from: any, next: any) {
    const weapons = await APIFetch.getWeapons(to.params.type);
    (this as Weapons).weapons = weapons;
    (this as Weapons).type = to.params.type;
    next();
  },
})
export default class Weapons extends Vue {
  weapons: IWeaponData | IWeapon[] = {}

  type = 'onehanded';
}
</script>
