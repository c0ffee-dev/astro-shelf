import localeJa from './locales/ja';

type LowercaseTwo = `${string}${string}`;
type UppercaseTwo = `${string}${string}`;

export type LocaleCode = `${LowercaseTwo}-${UppercaseTwo}`;

export type i18nTranslation = Omit<typeof localeJa, 'isoLocale'> & {
  isoLocale: LocaleCode;
};;
