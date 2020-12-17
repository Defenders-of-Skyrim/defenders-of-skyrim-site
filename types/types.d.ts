/* eslint-disable camelcase */
import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $getPage(name: string): string;
  }
}

type IChangelog = {
  _by: string,
  _created: number,
  _id: string,
  _mby: string,
  _modified: number,
  description: string,
  mod_name: string,
  version: string,
}

type IMod = {
  _by: string,
  _created: number,
  _id: string,
  _mby: string,
  _modified: number,
  link: string,
  thumbnail: string | Object,
  title: string,
  version: string,
}

type IWeapon = {
  _by: string,
  _created: number,
  _id: string,
  _mby: string,
  _modified: number,
  background: string | Object,
  description: string,
  slug: string,
  stats: {
    character: string,
    cost: string,
    damage: string,
    enchantment: string,
    obtain: string,
    reach: string,
    speed: string,
    temperable: boolean,
    weight: string,
  },
  subtype: string,
  thumbnail: string | Object,
  title: string,
  type: string,
}

type IWeaponData = {
  [propName: string]: IWeapon[],
}

type ICharacter = {
  _by: string,
  _created: number,
  _id: string,
  _mby: string,
  _modified: number,
  alias: string,
  background: string | Object,
  description: string,
  slug: string,
  display?: any,
  stats: {
    class: string,
    followable: boolean,
    health: string,
    hireable: boolean,
    level: string,
    mana: string,
    marriable: boolean,
    otherServices: string,
    race: string,
    stamina: string,
    trader: string,
    trainer: string,
    trainerLevel: string,
  },
  thumbnail: string | Object,
  title: string,
  universe: string,
  universe_slug: string,
}

type IListAccordionData = {
  _id: string,
  title: string,
  link: string,
}

type IArmor = {
  _link?: string,
  _by: string,
  _created: number,
  _id: string,
  _mby: string,
  _modified: number,
  background: string | Object,
  description: string,
  slug: string,
  stats: {
    character: ICharacter | null,
    cost: string,
    enchantment: string,
    obtain: string,
    resist: string,
    set: ISet | null,
    temperable: boolean,
    weight: string,
  },
  subtype: string,
  thumbnail: string | Object,
  title: string,
  type: string,
}

type IArmorData = {
  [propName: string]: IArmor[],
}

type ISet = {
  _link: string,
  _by: string,
  _created: number,
  _id: string,
  _mby: string,
  _modified: number,
  title: string,
  slug: string,
}
