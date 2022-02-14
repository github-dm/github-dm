import { Navigator, Screen } from "@karrotframe/navigator";
import LoginPage from "@pages/LoginPage";
import ListPage from "@pages/ListPage";

import "@karrotframe/navigator/index.css";
import "./App.css";
import { ThemeProvider } from "@primer/react";
import React from "react";
import { ColorSchemeProvider } from "@contexts/ColorScheme.context";

const App: React.FC = () => {
  return (
    <ColorSchemeProvider>
      {({ scheme, systemEnabled }) => (
        <ThemeProvider colorMode={systemEnabled ? "auto" : scheme === "light" ? "day" : "night"}>
          <Navigator theme="Cupertino">
            <Screen path="/" component={LoginPage} />
            <Screen path="/list" component={ListPage} />
          </Navigator>
        </ThemeProvider>
      )}
    </ColorSchemeProvider>
  );
};

export default App;
