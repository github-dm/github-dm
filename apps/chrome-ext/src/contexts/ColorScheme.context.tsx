import React, { useContext, useState } from "react";
import ColorSchemeService, { ColorScheme } from "@services/color-scheme.service";

type ContextType = {
  colorMode: { scheme: ColorScheme; systemEnabled: boolean };
  setColorMode: (system: boolean, scheme?: ColorScheme) => void;
};
const ColorSchemeContext = React.createContext<ContextType>({
  colorMode: { scheme: "light", systemEnabled: false },
  setColorMode: () => {}
});

export const ColorSchemeProvider: React.FC<{
  children: (param: { scheme: ColorScheme; systemEnabled: boolean }) => JSX.Element;
}> = ({ children }) => {
  const [colorMode, setColorMode] = useState(() => ColorSchemeService.initScheme());

  return (
    <ColorSchemeContext.Provider
      value={{
        colorMode,
        setColorMode: (system, scheme = "light") => {
          setColorMode(system ? ColorSchemeService.setSystemScheme() : ColorSchemeService.setUserScheme(scheme));
        }
      }}
    >
      {children(colorMode)}
    </ColorSchemeContext.Provider>
  );
};

export const useColorScheme = () => {
  return useContext(ColorSchemeContext);
};
