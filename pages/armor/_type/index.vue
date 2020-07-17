<template>
  <div>
    <page-header
      :title="$t(`armor.types.${type}`)"
      image="require(`@/assets/images/backgrounds/${type}.jpg`)"
    />
    <div class="container">
      <div class="row">
        <div class="col">
          <b-card-group
            class="card-deck-narrow"
            deck
          >
            <card-armor
              v-for="armor in armors"
              :key="armor._id"
              :armor="armor"
              :link="`/armor/${$route.params.type}/${armor.subtype}/${armor.slug}`"
            />
          </b-card-group>
        </div>
        <div class="col-24 col-xl-6 col-lg-8 col-md-10">
          <div class="card bg-skyrim text-white">
            <div class="card-body">
              <h4 class="card-title">
                Filters
              </h4>
              <label for="subtype">Item type</label>
              <b-form-select
                id="subtype"
                :value="subtype"
                :options="subtypeOptions"
                @change="selectSubtype"
              />
              <label for="set">Item set</label>
              <b-form-select
                id="set"
                :value="set"
                :options="setsOptions"
                @change="selectItemSet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CardArmor from '@/components/Cards/CardArmor.vue';
import type {
  IArmor,
} from '@/types/types';

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
  armors: IArmor[] = [];

  subtype = 'all';

  subtypeOptions: object[] = [
    { value: 'all', text: 'all' },
    { value: 'helmet', text: 'Шлем/головной убор' },
    { value: 'cuirass', text: 'Кираса/нагрудник' },
    { value: 'gauntlet', text: 'Наручи/перчатки' },
    { value: 'boots', text: 'Ботинки' },
    { value: 'shield', text: 'Щит' },
    { value: 'cloak', text: 'Плащ' },
  ]

  setsOptions: object[] = [
    { value: 'none', text: 'none' },
  ]

  set = 'none';

  type = 'light';

  async asyncData({ app, params }: { app: any, params: any }): Promise<any> {
    const armors = await app.$getArmor(params.type);
    const itemSets = await app.$getItemSets();
    return {
      armors,
      setsOptions: itemSets,
      type: params.type,
    };
  }

  async selectSubtype(value: string): Promise<void> {
    this.subtype = value;
    await this.updateItems();
  }

  async selectItemSet(value: string): Promise<void> {
    this.set = value;
    await this.updateItems();
  }

  async updateItems(): Promise<void> {
    const subtype = this.subtype !== 'all' ? this.subtype : undefined;
    const set = this.set !== 'none' ? this.set : undefined;
    const armors = await (this as any).$getArmor(this.type, subtype, set);
    this.armors = armors;
  }
}
</script>
