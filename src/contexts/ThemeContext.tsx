/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { defaultTheme } from '../styles/themes/default';
import { darkTheme } from '../styles/themes/dark';

export enum ThemeType {
   default = 'default',
   dark = 'dark',
}
interface ThemeContextType {
   theme: 'default' | 'dark';
   toggleTheme: () => void;
}
interface ThemeProviderProps {
   children: ReactNode;
}

const themes = {
   default: defaultTheme,
   dark: darkTheme,
};

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }: ThemeProviderProps) {
   const [theme, setTheme] = useState(ThemeType.default);

   function toggleTheme() {
      if (theme === ThemeType.default) {
         setTheme(ThemeType.dark);
      } else {
         setTheme(ThemeType.default);
      }
   }
   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         <ThemeProviderStyled theme={themes[theme]}>
            {children}
         </ThemeProviderStyled>
      </ThemeContext.Provider>
   );
}
