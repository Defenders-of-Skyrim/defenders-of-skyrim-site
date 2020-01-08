export interface IChangelog {
  _by: string,
  _created: number,
  _id: string,
  _mby: string,
  _modified: number,
  description: string,
  mod_name: string,
  version: string,
}

export interface IMod {
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

export interface IWeapon {
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

export interface IWeaponData {
  [propName: string]: IWeapon[],
}

export interface ICharacter {
  _by: string,
  _created: number,
  _id: string,
  _mby: string,
  _modified: number,
  alias: string,
  background: string | Object,
  description: string,
  slug: string,
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

export interface IListAccordionData {
  _id: string,
  title: string,
  link: string,
}

export interface IArmor {
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

export interface IArmorData {
  [propName: string]: IArmor[],
}

export interface ISet {
  _link: string,
  _by: string,
  _created: number,
  _id: string,
  _mby: string,
  _modified: number,
  title: string,
  slug: string,
}
