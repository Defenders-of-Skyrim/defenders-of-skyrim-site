<template>
  <div>
    <page-header
      title="Загрузить мод"
      image="http://placeimg.com/640/480/any"
    />
    <b-container v-if="$store.state.isLoaded === true">
      <b-row>
        <b-col
          hg="3"
          lg="4"
          md="6"
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
                Загрузить мод (версия {{ mod.version }})
              </b-button>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12">
          <h2>Список изменений</h2>
          <div class="my-4">
            <h3 class="d-block mb-4">Defenders of Skyrim</h3>
            <card-changelog
              v-for="log in logs.main"
              :key="log._id"
              :version="log.version"
              :description="log.description"
            />
          </div>
          <div class="my-4">
            <h3 class="d-block mb-4">Defenders of Skyrim - Оружейная</h3>
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
/* eslint-disable no-param-reassign */
import Vue from 'vue';
import NProgress from 'nprogress';
import Component from 'vue-class-component';
import PageHeader from '@/components/PageHeader.vue';
import CardChangelog from '@/components/Download/CardChangelog.vue';
import store from '@/store/index';

@Component({
  components: {
    PageHeader,
    CardChangelog,
  },
  metaInfo: {
    title: 'Загрузить мод',
  },
  beforeRouteEnter(to: any, from: any, next: any) {
    store.dispatch('getChangelog').then(() => {
      NProgress.done();
      next((vm: any) => {
        vm.logs = vm.$store.state.data.logs;
        vm.mods = vm.$store.state.data.mods;
        vm.$store.commit('setLoadStatus', true);
      });
    });
  },
  beforeRouteUpdate(to: any, from: any, next: any) {
    store.dispatch('getChangelog').then(() => {
      NProgress.done();
      this.logs = this.$store.state.data.logs;
      this.mods = this.$store.state.data.mods;
      next();
    });
  },
})
export default class Download extends Vue {
  logs: any = {}

  mods: any[] = []
}
</script>
