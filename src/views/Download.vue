<template>
  <div>
    <page-header
      :title="$t('pages.download')"
      :image="require('@/assets/images/backgrounds/download_mod.jpg')"
    />
    <b-container>
      <b-row>
        <fragment v-if="mods.length !== 0">
          <b-col
            hg="6"
            lg="8"
            md="12"
            v-for="mod in mods"
            :key="mod._id"
          >
            <b-card
              class="mb-4 equal"
              bg-variant="skyrim"
              text-variant="white"
              no-body
            >
              <b-card-img-lazy
                :src="mod.thumbnail.path"
                v-if="mod.thumbnail !== ''"
                top
              />

              <b-card-body>
                <b-card-title>{{ mod.title }}</b-card-title>
                <b-button
                  class="mt-2"
                  :href="mod.link"
                  :disabled="mod.link === ''"
                  variant="skyrim"
                  block
                >
                  {{ $t('buttons.download', { version: mod.version }) }}
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
        </fragment>
        <b-col cols="24">
          <h2 v-t="'changelog'"></h2>
          <div
            class="my-4"
            v-if="logs.hasOwnProperty('main')"
          >
            <h3 class="d-block mb-4" v-t="'mods.dos'"></h3>
            <card-changelog
              v-for="log in logs.main"
              :key="log._id"
              :version="log.version"
              :description="log.description"
            />
          </div>
          <div
            class="my-4"
            v-if="logs.hasOwnProperty('armory')"
          >
            <h3 class="d-block mb-4" v-t="'mods.dosArmory'"></h3>
            <card-changelog
              v-for="log in logs.armory"
              :key="log._id"
              :version="log.version"
              :description="log.description"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import PageHeader from '@/components/PageHeader.vue';
import CardChangelog from '@/components/Download/CardChangelog.vue';
import store from '@/store/index';
import { IMod } from '@/plugins/api/interfaces';

@Component({
  components: {
    PageHeader,
    CardChangelog,
  },
  metaInfo() {
    return {
      title: (this.$t('pages.download') as string),
    };
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('getChangelog').then(() => {
      next((vm: any) => {
        vm.logs = vm.$store.state.data.logs;
        vm.mods = vm.$store.state.data.mods;
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    store.dispatch('getChangelog').then(() => {
      (this as Download).logs = this.$store.state.data.logs;
      (this as Download).mods = this.$store.state.data.mods;
      next();
    });
  },
})
export default class Download extends Vue {
  logs: any = {}

  mods: IMod[] = []
}
</script>
