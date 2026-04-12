"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

export type Language = "es" | "en";

type LanguageContextValue = {
  language: Language;
  mounted: boolean;
  setLanguage: (language: Language) => void;
};

const LANGUAGE_STORAGE_KEY = "language";
const languageListeners = new Set<() => void>();

const LanguageContext = createContext<LanguageContextValue | null>(null);
const emptySubscribe = () => () => {};

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "es";
  }

  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const language = useSyncExternalStore<Language>(
    subscribeLanguage,
    getStoredLanguage,
    () => "es",
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
    startTransition(() => {
      languageListeners.forEach((listener) => listener());
    });
  };

  return (
    <LanguageContext.Provider value={{ language, mounted, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

export function useLanguageValue<T>(values: Record<Language, T>) {
  const { language } = useLanguage();
  return values[language];
}

function subscribeLanguage(listener: () => void) {
  languageListeners.add(listener);

  return () => {
    languageListeners.delete(listener);
  };
}
