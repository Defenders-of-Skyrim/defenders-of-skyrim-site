<template>
  <div>
    <page-header
      :title="$t(`armor.types.${type}`)"
      image="require(`@/assets/images/backgrounds/${type}.jpg`)"
    />
    <div class="container">
      <div class="row">
        <div class="col">
          <b-tabs
            content-class="mt-3"
            fill
          >
            <b-tab
              :title="$t('armor.subtypes.multiple.helmet')"
              lazy
            >
              <b-card-group deck>
                <card-armor
                  v-for="helmet in armor.helmet"
                  :key="helmet._id"
                  :armor="helmet"
                  :link="`/armor/${$route.params.type}/${helmet.subtype}/${helmet.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              :title="$t('armor.subtypes.multiple.cuirass')"
              lazy
            >
              <b-card-group deck>
                <card-armor
                  v-for="cuirass in armor.cuirass"
                  :key="cuirass._id"
                  :armor="cuirass"
                  :link="`/armor/${$route.params.type}/${cuirass.subtype}/${cuirass.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              :title="$t('armor.subtypes.multiple.gauntlet')"
              lazy
            >
              <b-card-group deck>
                <card-armor
                  v-for="gauntlet in armor.gauntlet"
                  :key="gauntlet._id"
                  :armor="gauntlet"
                  :link="`/armor/${$route.params.type}/${gauntlet.subtype}/${gauntlet.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              :title="$t('armor.subtypes.multiple.boots')"
              lazy
            >
              <b-card-group deck>
                <card-armor
                  v-for="boots in armor.boots"
                  :key="boots._id"
                  :armor="boots"
                  :link="`/armor/${$route.params.type}/${boots.subtype}/${boots.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              v-if="$route.params.type !== 'clothes'"
              :title="$t('armor.subtypes.multiple.shield')"
              lazy
            >
              <b-card-group deck>
                <card-armor
                  v-for="shield in armor.shield"
                  :key="shield._id"
                  :armor="shield"
                  :link="`/armor/${$route.params.type}/${shield.subtype}/${shield.slug}`"
                />
              </b-card-group>
            </b-tab>
            <b-tab
              v-if="$route.params.type === 'clothes'"
              :title="$t('armor.subtypes.multiple.cloak')"
              lazy
            >
              <b-card-group deck>
                <card-armor
                  v-for="cloak in armor.cloak"
                  :key="cloak._id"
                  :armor="cloak"
                  :link="`/armor/${$route.params.type}/${cloak.subtype}/${cloak.slug}`"
                />
              </b-card-group>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CardArmor from '@/components/Cards/CardArmor.vue';

@Component({
  components: {
    CardArmor,
  },
  head() {
    return {
      title: this.$t(`armor.types.${(this as Armors).type}`).toString(),
      meta: [
        {
          property: 'og:title',
          content: `${this.$t(`armor.types.${(this as Armors).type}`)} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
      ],
    };
  },
})
export default class Armors extends Vue {
  armor: IArmorData = {}

  type = 'light';

  async asyncData({ app, params }: { app: any, params: any }): Promise<any> {
    const armor = await app.$getArmor(params.type)
    return {
      armor: armor,
      type: params.type,
    };
  }
}
</script>
