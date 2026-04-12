"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";
import { useLanguageValue } from "../language";
import {
  applyTheme,
  applyThemeWithTransition,
  getPreferredTheme,
  type Theme,
} from "../theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const copy = useLanguageValue({
    es: {
      aria: "Alternar tema",
      light: "Cambiar a claro",
      dark: "Cambiar a oscuro",
    },
    en: {
      aria: "Toggle theme",
      light: "Switch to light mode",
      dark: "Switch to dark mode",
    },
  });

  useEffect(() => {
    const currentTheme = getPreferredTheme();
    applyTheme(currentTheme);
    setTheme(currentTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    applyThemeWithTransition(nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className="h-10 w-10 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border-2 border-sky-100 bg-[linear-gradient(135deg,#ffffff_0%,#e0f2fe_100%)] p-2 text-slate-900 shadow-sm transition-colors hover:border-sky-200 hover:bg-sky-50 dark:border-slate-600 dark:bg-none dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
      title={theme === "dark" ? copy.light : copy.dark}
      aria-label={copy.aria}
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-slate-700" />
      )}
    </button>
  );
}
