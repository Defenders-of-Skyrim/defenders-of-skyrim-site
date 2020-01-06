import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

/* export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    setLoadingStatus(state, loading): void {
      state.isLoading = loading;
    },
  },
  actions: {
  },
}); */

export const store = Vue.observable({
  isLoading: false,
});

export const mutations = {
  setLoadingStatus(loading: boolean): void {
    store.isLoading = loading;
  },
};
