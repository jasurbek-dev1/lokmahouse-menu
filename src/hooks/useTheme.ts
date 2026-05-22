import { useState, useEffect, useCallback } from "react";

export type Theme = "light" | "strawberry" | "dark";

const THEME_LABELS: Record<Theme, string> = {
  light: "Оқ режим",
  strawberry: "Қулупнай режим",
  dark: "Қора режим",
};

const THEMES: Theme[] = ["light", "strawberry", "dark"];

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("dessert-cafe-theme");
    return (THEMES.includes(saved as Theme) ? saved : "light") as Theme;
  });

  useEffect(() => {
    localStorage.setItem("dessert-cafe-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const cycleTheme = useCallback(() => {
    setTheme((prev) => {
      const idx = THEMES.indexOf(prev);
      return THEMES[(idx + 1) % THEMES.length];
    });
  }, []);

  return { theme, setTheme, cycleTheme, themeLabel: THEME_LABELS[theme], themes: THEMES, themeLabels: THEME_LABELS };
}
