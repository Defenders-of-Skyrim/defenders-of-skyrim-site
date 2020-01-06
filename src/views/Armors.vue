<template>
  <div>
    <page-header
      :title="$t(`armor.types.${type}`)"
      image="require(`@/assets/images/backgrounds/${type}.jpg`)"
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
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CardArmor from '@/components/Cards/CardArmor.vue';
import PageHeader from '@/components/PageHeader.vue';
import { IArmorData, IArmor } from '@/plugins/api/interfaces';
import APIFetch from '@/plugins/api/APIFetch';

@Component({
  components: {
    CardArmor,
    PageHeader,
  },
  metaInfo() {
    return {
      title: (this.$t(`armor.types.${(this as Armors).type}`) as string),
      meta: [
        {
          property: 'og:title',
          content: `${this.$t(`armor.types.${(this as Armors).type}`)} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
      ],
    };
  },
  async beforeRouteEnter(to: any, from: any, next: any) {
    const armor = await APIFetch.getArmor(to.params.type);
    next((vm: any) => {
      vm.armor = armor;
      vm.type = to.params.type;
    });
  },
  async beforeRouteUpdate(to: any, from: any, next: any) {
    const armor = await APIFetch.getArmor(to.params.type);
    (this as Armors).armor = armor;
    (this as Armors).type = to.params.type;
    next();
  },
})
export default class Armors extends Vue {
  armor: IArmorData = {}

  type = 'light';
}
</script>
