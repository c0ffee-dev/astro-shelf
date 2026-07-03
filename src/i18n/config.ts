import ja from './locales/ja';
import en from './locales/en';
import ko from './locales/ko';

import config from '../../typewriter.config';

export const defaultLang = config.i18n.defaultLang;

export const ui = {
  ja,
  en,
//  ko,
} as const;

export const Langs = Object.keys(ui);
export type Lang = keyof typeof ui;
