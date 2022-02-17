import React from "react";
import { Navigator, Screen } from "@karrotframe/navigator";
import { ThemeProvider } from "@primer/react";

import { ColorSchemeProvider } from "@contexts/ColorScheme.context";
import LoginPage from "@pages/LoginPage";
import MainTabsPage from "@pages/TabsPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <ColorSchemeProvider>
      {({ scheme, systemEnabled }) => (
        <ThemeProvider colorMode={systemEnabled ? "auto" : scheme === "light" ? "day" : "night"}>
          <Navigator theme="Cupertino">
            <Screen path="/login" component={LoginPage} />
            <Screen path="/" component={MainTabsPage} />
          </Navigator>
        </ThemeProvider>
      )}
    </ColorSchemeProvider>
  );
};

export default App;
