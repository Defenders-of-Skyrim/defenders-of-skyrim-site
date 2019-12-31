import Vue from 'vue';
import Vuex from 'vuex';
import APIFetch from '@/plugins/api/APIFetch';
import { IChangelog, IMod } from '../plugins/api/interfaces';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    isLoaded: false,
  },
  mutations: {
    setPageData(state, data): void {
      state.data = data;
    },
    setLoadStatus(state, data): void {
      state.isLoaded = data;
    },
  },
  actions: {
    getChangelog({ commit }): Promise<any> {
      const data: any = {
        logs: {
          armory: [],
          main: [],
        },
        mods: [],
      };

      return APIFetch.getChangelog().then((response: any) => {
        response.data.entries.forEach((element: IChangelog) => {
          if (element.mod_name === 'Defenders of Skyrim - Оружейная') {
            data.logs.armory.push(element);
          } else if (element.mod_name === 'Defenders of Skyrim') {
            data.logs.main.push(element);
          }
        });
      })
        .then(() => APIFetch.getMods())
        .then((response: any) => {
          data.mods = response.data.entries;
          commit('setPageData', data);
        });
    },
    getPage({ commit }, title: string): Promise<any> {
      return APIFetch.getPage(title).then((response: any) => {
        commit('setPageData', response.data.entries[0].text);
      });
    },
  },
});
