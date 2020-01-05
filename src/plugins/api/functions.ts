/* eslint-disable import/prefer-default-export */
import i18n from '@/i18n';

export function setLanguage(lang: string): void {
  localStorage.language = lang;
  i18n.locale = lang;
}
