<template>
  <div>
    <page-header
      :title="$t(`weapons.types.${type}`)"
      :image="require(`@/assets/images/backgrounds/${type}.jpg`)"
    />
    <div class="container">
      <div class="row">
        <div class="col">
          <b-tabs
            v-if="$route.params.type !== 'staves'"
            content-class="mt-3"
            fill
          >
            <b-tab
              v-if="$route.params.type === 'onehanded'"
              :title="$t('weapons.subtypes.multiple.dagger')"
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
              v-if="$route.params.type === 'onehanded'"
              :title="$t('weapons.subtypes.multiple.sword')"
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
              v-if="$route.params.type === 'onehanded'"
              :title="$t('weapons.subtypes.multiple.waraxe')"
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
              v-if="$route.params.type === 'onehanded'"
              :title="$t('weapons.subtypes.multiple.mace')"
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
              v-if="$route.params.type === 'twohanded'"
              :title="$t('weapons.subtypes.multiple.greatsword')"
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
              v-if="$route.params.type === 'twohanded'"
              :title="$t('weapons.subtypes.multiple.battleaxe')"
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
              v-if="$route.params.type === 'twohanded'"
              :title="$t('weapons.subtypes.multiple.warhammer')"
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
              v-if="$route.params.type === 'ranged'"
              :title="$t('weapons.subtypes.multiple.bow')"
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
              v-if="$route.params.type === 'ranged'"
              :title="$t('weapons.subtypes.multiple.crossbow')"
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
            v-else
            deck
          >
            <card-weapon
              v-for="weapon in weapons"
              :key="weapon._id"
              :weapon="weapon"
              :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
            />
          </b-card-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CardWeapon from '@/components/Cards/CardWeapon.vue';
import type {
  IWeapon,
  IWeaponData,
} from '@/types/types';

@Component({
  components: {
    CardWeapon,
  },
  head() {
    return {
      title: this.$t(`weapons.types.${(this as Weapons).type}`).toString(),
      meta: [
        {
          property: 'og:title',
          content: `${this.$t(`weapons.types.${(this as Weapons).type}`)} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
      ],
    };
  },
})
export default class Weapons extends Vue {
  weapons: IWeaponData | IWeapon[] = {}

  type = 'onehanded';

  async asyncData({ app, params }: { app: any, params: any }): Promise<any> {
    const weapons = await app.$getWeapons(params.type);
    return {
      weapons,
      type: params.type,
    };
  }
}
</script>
