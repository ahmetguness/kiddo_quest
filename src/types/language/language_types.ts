import { translations } from "../../locales";

export type SupportedLanguage = keyof typeof translations;

export const getTranslation = (lang: string) => {
  const supported: SupportedLanguage[] = [
    "en",
    "tr",
    "de",
    "fr",
    "id",
    "it",
    "ja",
    "ms",
    "th",
  ];
  const safeLang: SupportedLanguage = supported.includes(
    lang as SupportedLanguage
  )
    ? (lang as SupportedLanguage)
    : "en";
  return translations[safeLang];
};
