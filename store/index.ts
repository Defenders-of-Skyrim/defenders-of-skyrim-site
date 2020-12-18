/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
export const state = () => ({
  user: {
    showAds: false,
    showMatureContent: false,
    theme: 'skyrim',
  },
});

export const mutations = {
  setAdsVisibility(state: any, payload: boolean): void {
    state.user.showAds = payload;
  },
  setMatureContentVisibility(state: any, payload: boolean): void {
    state.user.showMatureContent = payload;
  },
  setTheme(state: any, payload: string): void {
    state.user.theme = payload;
  },
};

export const actions = {
  async nuxtServerInit({ commit }: { commit: Function }) {
    const theme = (this as any).$cookies.get('theme');
    if (theme) {
      commit('setTheme', theme);
    } else {
      (this as any).$cookies.set('theme', 'skyrim', {
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: false,
        sameSite: 'Strict',
        secure: false,
      });
    }

    const adultOnly = (this as any).$cookies.get('matureContent');
    if (adultOnly) {
      commit('setMatureContentVisibility', adultOnly);
    } else {
      (this as any).$cookies.set('matureContent', false, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: false,
        sameSite: 'Strict',
        secure: false,
      });
    }
  },
};
