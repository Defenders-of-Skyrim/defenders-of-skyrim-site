<template>
  <div>
    <page-header
      :title="$t('pages.download')"
      :image="require('@/assets/images/backgrounds/download_mod.jpg')"
    />
    <div class="container">
      <div class="row">
        <fragment v-if="mods.length !== 0">
          <div class="col-md-12 col-lg-8 col-hg-6"
            v-for="mod in mods"
            :key="mod._id"
          >
            <card-mod :mod="mod" />
          </div>
        </fragment>
        <div class="col-24">
          <h2>{{ $t('changelog') }}</h2>
          <div class="my-4">
            <h3 class="heading-secondary heading-greek">
              <span>{{ $t('mods.dos')}}</span>
            </h3>
            <card-changelog
              v-for="log in logs.main"
              :key="log._id"
              :version="log.version"
              :description="log.description"
            />
          </div>
          <div class="my-4">
            <h3 class="heading-secondary heading-greek">
              <span>{{ $t('mods.dosArmory') }}</span>
            </h3>
            <card-changelog
              v-for="log in logs.armory"
              :key="log._id"
              :version="log.version"
              :description="log.description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CardMod from '@/components/Cards/CardMod.vue';
import CardChangelog from '@/components/Cards/CardChangelog.vue';

@Component({
  components: {
    CardMod,
    CardChangelog,
  },
  head() {
    return {
      title: this.$t('pages.download').toString(),
      meta: [
        {
          property: 'og:title',
          content: `${this.$t('pages.download')} - Defenders of Skyrim`,
          hid: 'og:title',
        },
      ],
    };
  },
})
export default class Download extends Vue {
  logs: any = {}

  mods: IMod[] = []

  async asyncData({ app }: { app: any }): Promise<any> {
    const data = await app.$getDownloads()
    return {
      logs: data.logs,
      mods: data.mods,
    };
  }
}
</script>
