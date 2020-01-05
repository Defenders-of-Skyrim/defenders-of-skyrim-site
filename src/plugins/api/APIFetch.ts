import authInstance from './axiosInstances';
import i18n from '@/i18n';

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

  static getSingleCharacter(universe: string, slug: string) {
    return authInstance({
      method: 'post',
      url: '/collections/get/characters',
      data: {
        filter: {
          slug,
          universe_slug: universe,
        },
        lang: i18n.locale,
      },
    });
  }

  static getCharactersList(universe: string) {
    return authInstance({
      method: 'post',
      url: '/collections/get/characters',
      data: {
        filter: {
          universe_slug: universe,
        },
        fields: {
          _id: 1,
          title: 1,
          slug: 1,
        },
        lang: i18n.locale,
      },
    });
  }
}
