import { Theme } from "@/constants/common";
import { StorageKeys } from "@/constants/storageKeys";
import { createContext, FC, ReactNode, useState } from "react";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(StorageKeys.THEME) as Theme) || Theme.CODIUM_LIGHT
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme =
        prevTheme === Theme.CODIUM_LIGHT
          ? Theme.CODIUM_DARK
          : Theme.CODIUM_LIGHT;

      localStorage.setItem(StorageKeys.THEME, newTheme);

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
