import Vue from 'vue';
import Vuex from 'vuex';
import APIFetch from '@/plugins/api/APIFetch';
import {
  IChangelog, IMod, IWeapon, IWeaponData,
} from '../plugins/api/interfaces';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    isLoading: false,
  },
  mutations: {
    setPageData(state, data): void {
      state.data = data;
    },
    setLoadingStatus(state, loading): void {
      state.isLoading = loading;
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
          commit('setPageData', data as IMod[]);
        });
    },
    getPage({ commit }, title: string): Promise<any> {
      return APIFetch.getPage(title).then((response: any) => {
        commit('setPageData', response.data.entries[0].text);
      });
    },
    getWeapons({ commit }, type: string): Promise<any> {
      return APIFetch.getWeapons(type).then((response: any) => {
        const elements = response.data.entries;

        switch (type) {
          case 'onehanded': {
            const data: IWeaponData = {
              daggers: [],
              swords: [],
              warAxes: [],
              maces: [],
            };
            elements.forEach((element: IWeapon) => {
              if (element.subtype === 'dagger') data.daggers.push(element);
              if (element.subtype === 'sword') data.swords.push(element);
              if (element.subtype === 'waraxe') data.warAxes.push(element);
              if (element.subtype === 'mace') data.maces.push(element);
            });
            commit('setPageData', data);
            break;
          }
          case 'twohanded': {
            const data: IWeaponData = {
              greatswords: [],
              battleAxes: [],
              warhammers: [],
            };
            elements.forEach((element: IWeapon) => {
              if (element.subtype === 'greatsword') data.greatswords.push(element);
              if (element.subtype === 'battleaxe') data.battleAxes.push(element);
              if (element.subtype === 'warhammer') data.warhammers.push(element);
            });
            commit('setPageData', data);
            break;
          }
          case 'ranged': {
            const data: IWeaponData = {
              bows: [],
              crossbows: [],
            };
            elements.forEach((element: IWeapon) => {
              if (element.subtype === 'bow') data.bows.push(element);
              if (element.subtype === 'crossbow') data.crossbows.push(element);
            });
            commit('setPageData', data);
            break;
          }
          default: {
            commit('setPageData', elements as IWeapon[]);
          }
        }
      });
    },
    getSingleWeapon({ commit }, slug: string): Promise<any> {
      return APIFetch.getSingleWeapon(slug).then((response: any) => {
        commit('setPageData', response.data.entries[0]);
      });
    },
    getSingleCharacter({ commit }, params: any): Promise<any> {
      return APIFetch.getSingleCharacter(params.universe, params.slug)
        .then((response: any) => {
          console.log(response.data.entries[0]);
          commit('setPageData', response.data.entries[0]);
        });
    },
  },
});
