import { createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import { theme } from "./theme";
import type { Theme } from "./theme";

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  useEffect(() => {
    // Inject theme variables into CSS
    const root = document.documentElement;

    // Colors
    root.style.setProperty("--primary", theme.colors.primary);
    root.style.setProperty("--primary-dark", theme.colors.primaryDark);
    root.style.setProperty("--primary-light", theme.colors.primaryLight);
    root.style.setProperty("--secondary", theme.colors.secondary);
    root.style.setProperty("--accent", theme.colors.accent);

    // Text colors
    root.style.setProperty("--text-primary", theme.colors.text.primary);
    root.style.setProperty("--text-secondary", theme.colors.text.secondary);
    root.style.setProperty("--text-light", theme.colors.text.light);

    // Background colors
    root.style.setProperty("--bg-dark", theme.colors.background.dark);
    root.style.setProperty("--bg-darker", theme.colors.background.darker);
    root.style.setProperty("--bg-card", theme.colors.background.card);

    // Border
    root.style.setProperty("--border", theme.colors.border);

    // Glow effects
    root.style.setProperty("--glow-primary", theme.colors.glow.primary);
    root.style.setProperty("--glow-secondary", theme.colors.glow.secondary);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
