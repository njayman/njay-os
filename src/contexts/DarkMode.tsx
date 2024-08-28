import { createContext, FC, PropsWithChildren, useState } from "react";

export const DarkModeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {
    return;
  },
});

export const DarkModeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
