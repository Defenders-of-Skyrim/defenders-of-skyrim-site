<template>
  <div>
    <page-header
      title="Загрузить мод"
      image="http://placeimg.com/640/480/any"
    />
    <b-container>
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
              v-for="log in main"
              :key="log._id"
              :version="log.version"
              :description="log.description"
            />
          </div>
          <div class="my-4">
            <h3 class="d-block mb-4">Defenders of Skyrim - Оружейная</h3>
            <card-changelog
              v-for="log in armory"
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
import { IChangelog, IMod } from '../plugins/api/interfaces';

@Component({
  components: {
    PageHeader,
    CardChangelog,
  },
  metaInfo: {
    title: 'Загрузить мод',
  },
})
export default class Download extends Vue {
  mods: IMod[] = []

  main: IChangelog[] = []

  armory: IChangelog[] = []

  mounted(): void {
    this.$getChangelog().then((response: any) => {
      const logs = response.data.entries;

      logs.forEach((element: IChangelog) => {
        if (element.mod_name === 'Defenders of Skyrim - Оружейная') {
          this.armory.push(element);
        } else if (element.mod_name === 'Defenders of Skyrim') {
          this.main.push(element);
        }
      });
      console.log(response.data.entries);
    });

    this.$getMods().then((response: any) => {
      console.log(response.data.entries);
      this.mods = response.data.entries;
    });
  }
}
</script>
