/* eslint-disable import/prefer-default-export */
/* eslint-disable no-prototype-builtins */
import { parse } from 'node-html-parser';
import { backendURL } from '@/plugins/axios';
import type {
  ICharacter,
} from '@/types/types';

export function getAbsoluteImageURL(path: string) {
  if (path.includes('backend')) {
    return `${backendURL}/${path.substring(9)}`;
  }
  if (path.includes('storage')) {
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
  const root = parse(html);
  const tags = root.querySelectorAll('p');

  if (tags.length !== 0) {
    let { text } = tags[0];
    if (multiple === true) {
      tags.forEach((tag: any) => {
        text += ` ${tag.text}`;
      });
    }
    return (text.match(/.{0,300}\./gmu) as RegExpMatchArray)[0];
  }
  return '';
}

/**
 * Returns character string with alias (if exists)
 * @param character - character object
 */
export function getCharacterName(character: ICharacter | null): string {
  if (character === null) {
    return '';
  }
  let title = character.display ?? character.title ?? '';
  if (Object.hasOwnProperty.call(character, 'alias')) {
    title += ` (${character!.alias})`;
  }
  return title;
}
