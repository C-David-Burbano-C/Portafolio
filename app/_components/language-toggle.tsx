"use client";

import { LanguagesIcon } from "./icons";
import { useLanguage, useLanguageValue, type Language } from "../language";

export default function LanguageToggle() {
  const { language, mounted, setLanguage } = useLanguage();
  const copy = useLanguageValue({
    es: {
      aria: "Cambiar idioma",
      title: "Cambiar a ingles",
    },
    en: {
      aria: "Change language",
      title: "Switch to Spanish",
    },
  });

  const toggleLanguage = () => {
    const nextLanguage: Language = language === "es" ? "en" : "es";
    setLanguage(nextLanguage);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className="h-10 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 rounded-full border-2 border-sky-100 bg-[linear-gradient(135deg,#ffffff_0%,#e0f2fe_100%)] px-3 py-2 text-slate-900 shadow-sm transition-colors hover:border-sky-200 hover:bg-sky-50 dark:border-slate-600 dark:bg-none dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
      aria-label={copy.aria}
      title={copy.title}
    >
      <LanguagesIcon className="h-5 w-5" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em]">
        {language}
      </span>
    </button>
  );
}
