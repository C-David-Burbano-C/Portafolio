"use client";

import { useLanguageValue } from "../../language";

export default function PortfolioFooter() {
  const copy = useLanguageValue({
    es: {
      footerLabel: "Hecho por Carlos David Burbano Cuchala",
    },
    en: {
      footerLabel: "Made by Carlos David Burbano Cuchala",
    },
  });

  return (
    <footer className="border-t border-sky-200/70 bg-white/70 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-3 px-4 py-5 text-center text-sm text-slate-600 dark:text-slate-400 sm:px-6 lg:px-8">
        <p>{copy.footerLabel}</p>
        <p>2026</p>
      </div>
    </footer>
  );
}
