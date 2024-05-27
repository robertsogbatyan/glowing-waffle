import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import {Theme} from '../data-structures';

const ThemeContext = createContext<Theme>(Theme.LIGHT);
const SetThemeContext = createContext<Dispatch<SetStateAction<Theme>>>(() => Theme.LIGHT);

type TThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: React.FC<TThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>{children}</SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

const useTheme = (): Theme => {
  const theme: Theme = useContext(ThemeContext);

  return theme;
};

const useSetTheme = (): Dispatch<SetStateAction<Theme>> => {
  const setTheme: Dispatch<SetStateAction<Theme>> = useContext(SetThemeContext);

  return setTheme;
};

export {ThemeProvider, useSetTheme, useTheme};
