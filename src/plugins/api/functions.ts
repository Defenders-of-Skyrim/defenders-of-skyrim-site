/* eslint-disable import/prefer-default-export */
/* eslint-disable no-prototype-builtins */
import i18n from '@/i18n';
import { backendURL } from './axiosInstances';
import { ICharacter } from './interfaces';

export function setLanguage(lang: string): void {
  localStorage.language = lang;
  i18n.locale = lang;
}

export function getAbsoluteImageURL(path: string) {
  if (path.indexOf('backend') !== -1) {
    return `${backendURL}/${path.substring(9)}`;
  }
  if (path.indexOf('storage') !== -1) {
    return `${backendURL}/${path}`;
  }
  return path;
}

/**
 * Generate short description for SERP and meta tags.
 * @param html - html string
 * @param multiple - use multiple <p> tags for generation
 */
export function generateMetaDescription(html: string, multiple: boolean): string {
  const parse = new DOMParser().parseFromString(html, 'text/html');
  const tags = parse.querySelectorAll('p');
  let text = tags[0].innerText;
  if (multiple === true) {
    tags.forEach((tag: HTMLParagraphElement) => {
      text += ` ${tag.innerText}`;
    });
  }
  return (text.match(/.{0,300}\./gmu) as RegExpMatchArray)[0];
}

/**
 * Returns character string with alias (if exists)
 * @param character - character object
 */
export function getCharacterName(character: ICharacter | null): string {
  if (character === null) {
    return '';
  }
  let { title } = character!;
  if (character!.alias !== '') {
    title += ` (${character!.alias})`;
  }
  return title;
}
