<template>
  <div>
    <page-header
      :title="$t(`weapons.types.${$route.params.type}`)"
      :image="require(`@/assets/images/backgrounds/${$route.params.type}.jpg`)"
    />
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-tabs
            v-if="$route.params.type !== 'staves'"
            content-class="mt-3"
            fill
          >
            <fragment v-if="$route.params.type === 'onehanded'">
              <b-tab
                title="Кинжалы"
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
            </fragment>
            <fragment v-if="$route.params.type === 'twohanded'">
              <b-tab
                title="Клейморы"
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
            </fragment>
            <fragment v-if="$route.params.type === 'ranged'">
              <b-tab
                title="Луки"
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
            </fragment>
          </b-tabs>
          <fragment v-else>
            <b-card-group deck>
              <card-weapon
                v-for="weapon in weapons"
                :key="weapon._id"
                :weapon="weapon"
                :link="`/weapons/${$route.params.type}/${weapon.subtype}/${weapon.slug}`"
              />
            </b-card-group>
          </fragment>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NProgress from 'nprogress';
import Component from 'vue-class-component';
import CardWeapon from '@/components/Cards/CardWeapon.vue';
import PageHeader from '@/components/PageHeader.vue';
import store from '@/store/index';
import { IWeapon } from '@/plugins/api/interfaces';

@Component({
  components: {
    CardWeapon,
    PageHeader,
  },
  metaInfo() {
    return {
      title: (this.$t(`weapons.types.${this.$route.params.type}`) as string),
    };
  },
  beforeRouteEnter(to: any, from: any, next: any) {
    store.dispatch('getWeapons', to.params.type).then(() => {
      NProgress.done();
      next((vm: any) => {
        vm.weapons = vm.$store.state.data;
      });
    });
  },
  beforeRouteUpdate(to: any, from: any, next: any) {
    store.dispatch('getWeapons', to.params.type).then(() => {
      NProgress.done();
      (this as Weapons).weapons = this.$store.state.data;
      next();
    });
  },
})
export default class Weapons extends Vue {
  weapons: IWeapon[] = []
}
</script>
