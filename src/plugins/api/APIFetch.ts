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

  static getPage(name: string) {
    return authInstance({
      method: 'post',
      url: 'collections/get/pages',
      data: {
        filter: {
          title: name,
        },
      },
    });
  }

  static getWeapons(type: string) {
    return authInstance({
      method: 'post',
      url: 'collections/get/weapons',
      data: {
        filter: { type },
        sort: { title: 1 },
        lang: 'default',
      },
    });
  }

  static getSingleWeapon(slug: string) {
    return authInstance({
      method: 'post',
      url: '/collections/get/weapons',
      data: {
        filter: { slug },
        lang: 'default',
      },
    });
  }
}
