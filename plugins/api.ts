import { getAbsoluteImageURL } from '@/functions';
import { characterMetaTypes } from '@/functions/constants';
import type {
  IArmor,
  ICharacter,
  IChangelog,
  IListAccordionData,
  IWeapon,
  IWeaponData,
} from '@/types/types';
import { backendURL } from './axios';

export default function (context: any, inject: Function) {
  const apiGetChangelog = async (): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/changelog`, {
      sort: { _created: -1 },
      lang: context.app.i18n.locale,
    });
    return response;
  };

  const apiGetMods = async (): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/mods`, {
      lang: context.app.i18n.locale,
    });
    return response;
  };

  const apiGetBlogPosts = async (): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/blog`, {
      lang: context.app.i18n.locale,
    });
    return response.data.entries;
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
        artifacts: [],
        wardrobe: [],
        main: [],
      },
      mods: [],
    };
    const logs = await apiGetChangelog();
    const mods = await apiGetMods();
    logs.data.entries.forEach((element : IChangelog) => {
      switch (element.mod_name) {
        case 'Defenders of Skyrim - Оружейная': {
          data.logs.armory.push(element);
          break;
        }
        case 'Defenders of Skyrim - Артефакты': {
          data.logs.artifacts.push(element);
          break;
        }
        case 'Defenders of Skyrim - Гардероб': {
          data.logs.wardrobe.push(element);
          break;
        }
        case 'Defenders of Skyrim': {
          data.logs.main.push(element);
          break;
        }
        default: {
          break;
        }
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

  const apiGetArmor = async (type: string, subtype?: string, set?: string): Promise<any> => {
    const filter: any = {
      type,
    };
    if (subtype !== undefined) {
      filter.subtype = subtype;
    }
    if (set !== undefined) {
      filter['stats.set.display'] = set;
    }

    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/armor`, {
      filter,
      sort: { title: 1 },
      lang: context.app.i18n.locale,
    });

    const elements: IArmor[] = response.data.entries;
    return elements;
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
      };
    } else {
      data = {
        lang: context.app.i18n.locale,
        sort: { title: 1 },
      };
    }

    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/characters`, {
      ...data,
    });

    const elements = response.data.entries;
    return elements.sort((a: ICharacter, b: ICharacter) => a.title
      .localeCompare(b.title, ['ru', 'en'], { sensitivity: 'accent' }));
  };

  const apiGetSingleWeapon = async (slug: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/weapons`, {
      filter: {
        slug,
      },
      lang: context.app.i18n.locale,
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
    });
    return response.data.entries[0];
  };

  const apiGetSingleArmor = async (slug: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/armor`, {
      filter: { slug },
      lang: context.app.i18n.locale,
      populate: 1,
    });

    const armor = response.data.entries[0];
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

  const apiGetItemSets = async (): Promise<any> => {
    const response = (await context.app.$axios.post(`${backendURL}/api/collections/get/sets`, {
      lang: context.app.i18n.locale,
    })).data.entries;

    const items: any[] = [
      { value: 'none', text: context.app.i18n.t('options.none') },
    ];

    if (response.length > 0) {
      response.forEach((element: any) => {
        items.push({
          value: element.title, text: element.title,
        });
      });
    }

    return items;
  };

  const apiGetSingleLocationMap = async (slug: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/maps`, {
      filter: { slug },
      lang: context.app.i18n.locale,
      populate: 1,
    });

    const location = response.data.entries[0];
    return location;
  };

  const apiGetSingleBlogPost = async (slug: string): Promise<any> => {
    const response = await context.app.$axios.post(`${backendURL}/api/collections/get/blog`, {
      filter: { slug },
      lang: context.app.i18n.locale,
    });

    const post = response.data.entries[0];
    return post;
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
  inject('getItemSets', apiGetItemSets);
  inject('getSingleLocationMap', apiGetSingleLocationMap);
  inject('getBlogPosts', apiGetBlogPosts);
  inject('getSingleBlogPost', apiGetSingleBlogPost);

  inject('getAbsoluteImageURL', getAbsoluteImageURL);
}
