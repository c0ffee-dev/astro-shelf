import { ui, defaultLang, type Lang } from './config';
import type { i18nTranslation } from './types';

type Leaves<T, P extends string = ""> = T extends (...args: any[]) => any
  ? P
  : T extends object
    ? { [K in keyof T]-?: K extends string ? Leaves<T[K], P extends "" ? K : `${P}.${K}`> : never }[keyof T]
    : P;

type UIKeys = Leaves<i18nTranslation>;

type SearchType<T, K extends string> = K extends `${infer Head}.${infer Tail}`
  ? Head extends keyof T ? SearchType<T[Head], Tail> : never
  : K extends keyof T ? T[K] : never;

type KeyType<K extends string> = SearchType<i18nTranslation, K>;

function getNestedValue(obj: any, path: string): any {
  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (current === null || current === undefined) return undefined;
    current = current[key];
  }

  return current;
}

export function useTranslations(lang?: Lang) {
  const tLang = lang ?? defaultLang
  return function t<K extends UIKeys>(
    key: K,
    ...args: KeyType<K> extends (...args: infer Args) => any ? Args : [params?: Record<string, string>]
  ): string {
    let target = getNestedValue(ui[tLang], key as string);

    if (target === undefined) {
      target = getNestedValue(ui[defaultLang], key as string);
    }

    if (target === undefined) {
      return String(key);
    }

    if (typeof target === 'function') {
      return target(...args);
    }

    let translation = String(target);
    const params = args[0] as Record<string, string> | undefined;
    if (params && typeof params === 'object') {
      Object.entries(params).forEach(([k, v]) => {
        translation = translation.replace(`{${k}}`, v);
      });
    }

    return translation;
  };
}
