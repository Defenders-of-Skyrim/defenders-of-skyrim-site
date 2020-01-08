import { AxiosResponse } from 'axios';
import authInstance from './axiosInstances';
import i18n from '@/i18n';
import {
  IChangelog,
  IListAccordionData,
  IWeaponData,
  IWeapon,
  IArmor,
  IArmorData,
  ICharacter,
} from './interfaces';
import { getAbsoluteImageURL } from './functions';

export default class APIFetch {
  static getChangelog() {
    return authInstance({
      method: 'post',
      url: 'collections/get/changelog',
      data: {
        sort: { _created: -1 },
        lang: i18n.locale,
      },
    });
  }

  static getMods() {
    return authInstance({
      method: 'get',
      url: 'collections/get/mods',
      data: {
        lang: i18n.locale,
      },
    });
  }

  static async getDownloadPage() {
    const data: any = {
      logs: {
        armory: [],
        main: [],
      },
      mods: [],
    };
    const logs = await this.getChangelog();
    const mods = await this.getMods();
    logs.data.entries.forEach((element : IChangelog) => {
      if (element.mod_name === 'Defenders of Skyrim - Оружейная') {
        data.logs.armory.push(element);
      } else if (element.mod_name === 'Defenders of Skyrim') {
        data.logs.main.push(element);
      }
    });
    data.mods = mods.data.entries;
    return data;
  }

  static getPage(name: string) {
    return authInstance({
      method: 'post',
      url: 'collections/get/pages',
      data: {
        filter: {
          title: name,
        },
        lang: i18n.locale,
      },
    }).then((response: AxiosResponse) => response.data.entries[0].text);
  }

  static getWeapons(type: string) {
    return authInstance({
      method: 'post',
      url: 'collections/get/weapons',
      data: {
        filter: { type },
        sort: { title: 1 },
        lang: i18n.locale,
      },
    })
      .then((response: AxiosResponse) => {
        const elements: IWeapon[] = response.data.entries;
        const data: IWeaponData = {
          daggers: [],
          swords: [],
          warAxes: [],
          maces: [],
          greatswords: [],
          battleAxes: [],
          warhammers: [],
          bows: [],
          crossbows: [],
        };

        switch (type) {
          case 'onehanded': {
            elements.forEach((element: IWeapon) => {
              if (element.subtype === 'dagger') data.daggers.push(element);
              if (element.subtype === 'sword') data.swords.push(element);
              if (element.subtype === 'waraxe') data.warAxes.push(element);
              if (element.subtype === 'mace') data.maces.push(element);
            });
            return data;
          }
          case 'twohanded': {
            elements.forEach((element: IWeapon) => {
              if (element.subtype === 'greatsword') data.greatswords.push(element);
              if (element.subtype === 'battleaxe') data.battleAxes.push(element);
              if (element.subtype === 'warhammer') data.warhammers.push(element);
            });
            return data;
          }
          case 'ranged': {
            elements.forEach((element: IWeapon) => {
              if (element.subtype === 'bow') data.bows.push(element);
              if (element.subtype === 'crossbow') data.crossbows.push(element);
            });
            return data;
          }
          default: {
            return (elements as IWeapon[]);
          }
        }
      });
  }

  static getArmor(type: string) {
    return authInstance({
      method: 'post',
      url: 'collections/get/armor',
      data: {
        filter: { type },
        sort: { title: 1 },
        lang: i18n.locale,
      },
    })
      .then((response: AxiosResponse) => {
        const elements: IArmor[] = response.data.entries;
        const data: IArmorData = {
          helmet: [],
          cuirass: [],
          gauntlet: [],
          boots: [],
          shield: [],
          cloak: [],
        };
        elements.forEach(async (element: IArmor) => {
          if (element.thumbnail !== '') {
            const { path } = (element.thumbnail as any);
            (element.thumbnail as any).path = getAbsoluteImageURL(path);
          }
          if (element.background !== '') {
            const { path } = (element.background as any);
            (element.background as any).path = getAbsoluteImageURL(path);
          }
          data[element.subtype].push(element);
        });
        return data;
      });
  }

  static getCharacters(type: string) {
    return authInstance({
      method: 'post',
      url: '/collections/get/characters',
      data: {
        filter: { metaType: type },
        lang: i18n.locale,
      },
    }).then((response: AxiosResponse) => response.data.entries);
  }

  static getSingleWeapon(slug: string) {
    return authInstance({
      method: 'post',
      url: '/collections/get/weapons',
      data: {
        filter: { slug },
        lang: i18n.locale,
      },
    }).then((response: AxiosResponse) => response.data.entries[0]);
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
    }).then((response: AxiosResponse) => response.data.entries[0]);
  }

  static getSingleArmor(slug: string) {
    return authInstance({
      method: 'post',
      url: '/collections/get/armor',
      data: {
        filter: { slug },
        lang: i18n.locale,
        populate: 1,
      },
    }).then((response: AxiosResponse) => {
      const armor = response.data.entries[0];
      if (armor.thumbnail !== '') {
        const { path } = (armor.thumbnail as any);
        (armor.thumbnail as any).path = getAbsoluteImageURL(path);
      }
      if (armor.background !== '') {
        const { path } = (armor.background as any);
        (armor.background as any).path = getAbsoluteImageURL(path);
      }
      return armor;
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
    }).then((response: AxiosResponse) => {
      const { entries } = response.data;
      const data: IListAccordionData[] = [];

      entries.forEach((element: any) => {
        const entry = {
          _id: element._id,
          title: element.title,
          link: `/characters/${universe}/${element.slug}`,
        };
        data.push(entry);
      });
      return data;
    });
  }
}
