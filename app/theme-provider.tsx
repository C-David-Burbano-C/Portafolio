"use client";

import { useEffect } from "react";
import { applyTheme, getPreferredTheme } from "./theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyTheme(getPreferredTheme());
  }, []);

  return <>{children}</>;
}
