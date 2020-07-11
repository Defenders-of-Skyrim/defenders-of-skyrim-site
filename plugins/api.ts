import { backendURL } from './axios';
import { getAbsoluteImageURL } from '@/functions';
import { characterMetaTypes } from '@/functions/constants';
import type {
  IArmor,
  IArmorData,
  ICharacter,
  IChangelog,
  IListAccordionData,
  IWeapon,
  IWeaponData,
} from '@/types/types';

export default function (context: any, inject: Function) {
  const apiGetChangelog = async (): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/changelog`, {
      sort: { _created: -1 },
      lang: context.app.i18n.locale,
    });
    return response;
  };

  const apiGetMods = async (): Promise<any> => {
    const response = await context.app.$axios.get(`${backendURL}/api/collections/get/mods`, {
      lang: context.app.i18n.locale,
    });
    return response;
  };

  const apiGetPage = async (name: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/pages`, {
      filter: {
        title: name,
      },
      lang: context.app.i18n.locale,
    });
    return response.data.entries[0].text;
  };

  const apiGetDownloads = async (): Promise<any> => {
    const data: any = {
      logs: {
        armory: [],
        main: [],
      },
      mods: [],
    };
    const logs = await apiGetChangelog();
    const mods = await apiGetMods();
    logs.data.entries.forEach((element : IChangelog) => {
      if (element.mod_name === 'Defenders of Skyrim - Оружейная') {
        data.logs.armory.push(element);
      } else if (element.mod_name === 'Defenders of Skyrim') {
        data.logs.main.push(element);
      }
    });
    data.mods = mods.data.entries;
    return data;
  };

  const apiGetWeapons = async (type: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/weapons`, {
      filter: { type },
      sort: { title: 1 },
      lang: context.app.i18n.locale,
      previewToken: '9c4b45782de3b8c48cd19439687cee',
    });

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
  };

  const apiGetArmor = async (type: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/armor`, {
      filter: { type },
      sort: { title: 1 },
      lang: context.app.i18n.locale,
      previewToken: '9c4b45782de3b8c48cd19439687cee',
    });

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
  };

  const apiGetCharacters = async (slug?: string): Promise<ICharacter[]> => {
    let data;
    if (slug !== undefined) {
      const type = characterMetaTypes.includes(slug) ? slug : null;
      const universe = !characterMetaTypes.includes(slug) ? slug : null;
      data = {
        filter: {
          ...(type ? { metaType: type } : ''),
          ...(universe ? { universe_slug: universe } : ''),
        },
        lang: context.app.i18n.locale,
        sort: { title: 1 },
        // previewToken: '9c4b45782de3b8c48cd19439687cee',
      };
    } else {
      data = {
        lang: context.app.i18n.locale,
        sort: { title: 1 },
        // previewToken: '9c4b45782de3b8c48cd19439687cee',
      };
    }

    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/characters`, {
      ...data,
    });

    const elements = response.data.entries;
    elements.forEach(async (element: ICharacter, index: number) => {
      if (element.thumbnail !== '') {
        const { path } = (element.thumbnail as any);
        (element.thumbnail as any).path = getAbsoluteImageURL(path);
      }
      if (element.background !== '') {
        const { path } = (element.background as any);
        (element.background as any).path = getAbsoluteImageURL(path);
      }
      elements[index] = element;
    });
    return elements.sort((a: ICharacter, b: ICharacter) => a.title
      .localeCompare(b.title, ['ru', 'en'], { sensitivity: 'accent' }));
  };

  const apiGetSingleWeapon = async (slug: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/weapons`, {
      filter: {
        slug,
      },
      lang: context.app.i18n.locale,
      previewToken: '9c4b45782de3b8c48cd19439687cee',
    });
    return response.data.entries[0];
  };

  const apiGetSingleCharacter = async (universe: string, slug: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/characters`, {
      filter: {
        slug,
        universe_slug: universe,
      },
      lang: context.app.i18n.locale,
      previewToken: '9c4b45782de3b8c48cd19439687cee',
    });
    return response.data.entries[0];
  };

  const apiGetSingleArmor = async (slug: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/armor`, {
      filter: { slug },
      lang: context.app.i18n.locale,
      populate: 1,
      previewToken: '9c4b45782de3b8c48cd19439687cee',
    });

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
  };

  const apiGetCharactersList = async (universe: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/characters`, {
      filter: {
        universe_slug: universe,
      },
      fields: {
        _id: 1,
        title: 1,
        slug: 1,
      },
      lang: context.app.i18n.locale,
    });

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
  };

  inject('getChangelog', apiGetChangelog);
  inject('getMods', apiGetMods);
  inject('getPage', apiGetPage);
  inject('getDownloads', apiGetDownloads);
  inject('getWeapons', apiGetWeapons);
  inject('getArmor', apiGetArmor);
  inject('getCharacters', apiGetCharacters);
  inject('getSingleWeapon', apiGetSingleWeapon);
  inject('getSingleCharacter', apiGetSingleCharacter);
  inject('getSingleArmor', apiGetSingleArmor);
  inject('getCharactersList', apiGetCharactersList);
}
