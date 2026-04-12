export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => void;
};

export function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function applyThemeWithTransition(theme: Theme) {
  if (typeof document === "undefined") {
    return;
  }

  const documentWithTransition = document as ViewTransitionDocument;

  if (typeof documentWithTransition.startViewTransition === "function") {
    documentWithTransition.startViewTransition(() => {
      applyTheme(theme);
    });
    return;
  }

  applyTheme(theme);
}
