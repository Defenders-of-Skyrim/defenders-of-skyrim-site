/* eslint-disable import/prefer-default-export */
import i18n from '@/i18n';
import { backendURL } from './axiosInstances';

export function setLanguage(lang: string): void {
  localStorage.language = lang;
  i18n.locale = lang;
}

export function getAbsoluteImageURL(path: string) {
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
