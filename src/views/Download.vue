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
import Vue from 'vue';
import Component from 'vue-class-component';
import CardMod from '@/components/Cards/CardMod.vue';
import PageHeader from '@/components/PageHeader.vue';
import CardChangelog from '@/components/Cards/CardChangelog.vue';
import APIFetch from '@/plugins/api/APIFetch';
import { IMod } from '@/plugins/api/interfaces';

@Component({
  components: {
    CardMod,
    PageHeader,
    CardChangelog,
  },
  metaInfo() {
    return {
      title: (this.$t('pages.download') as string),
      meta: [
        {
          property: 'og:title',
          content: `${this.$t('pages.download')} - Defenders of Skyrim`,
          vmid: 'og:title',
        },
      ],
    };
  },
  async beforeRouteEnter(to, from, next) {
    const data = await APIFetch.getDownloadPage();
    next((vm: any) => {
      vm.logs = Object.freeze(data.logs);
      vm.mods = Object.freeze(data.mods);
    });
  },
  async beforeRouteUpdate(to, from, next) {
    const data = await APIFetch.getDownloadPage();
    (this as Download).logs = Object.freeze(data.logs);
    (this as Download).mods = Object.freeze(data.mods);
    next();
  },
  watch: {
    '$i18n.locale': async function () {
      const data = await APIFetch.getDownloadPage();
      (this as Download).logs = Object.freeze(data.logs);
      (this as Download).mods = Object.freeze(data.mods);
    },
  },
})
export default class Download extends Vue {
  logs: any = {}

  mods: IMod[] = []
}
</script>
