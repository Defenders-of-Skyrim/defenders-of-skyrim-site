import authInstance from './axiosInstances';

export default class APIFetch {
  static getChangelog() {
    return authInstance({
      method: 'post',
      url: 'collections/get/changelog',
      data: {
        sort: { _created: -1 },
      },
    });
  }

  static getMods() {
    return authInstance({
      method: 'get',
      url: 'collections/get/mods',
    });
  }
}
