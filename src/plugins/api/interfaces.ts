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
