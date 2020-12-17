/* eslint-disable import/prefer-default-export */
export const state = () => ({
  user: {
    email: 'johncena@google.com',
    group: 'tester',
    patronStatus: false,
    totalDonations: 0,
    showAds: false,
    showMatureContent: false,
  },
});

export const mutations = {
  // eslint-disable-next-line no-shadow
  setMatureContentVisibility(state: any, payload: boolean): void {
    state.user.showMatureContent = payload;
  },
};
