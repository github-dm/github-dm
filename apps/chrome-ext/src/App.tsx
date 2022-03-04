import React from "react";
import { Navigator, Screen } from "@karrotframe/navigator";
import { ThemeProvider } from "@primer/react";

import { ColorSchemeProvider } from "@contexts/ColorScheme.context";
import LoginPage from "@pages/LoginPage";
import MainTabsPage from "@pages/TabsPage";
import ChatPage from "@pages/ChatPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <ColorSchemeProvider>
      {({ scheme, systemEnabled }) => (
        <ThemeProvider colorMode={systemEnabled ? "auto" : scheme === "light" ? "day" : "night"}>
          <Navigator className="navigator" theme="Cupertino">
            <Screen path="/login" component={LoginPage} />
            <Screen path="/" component={MainTabsPage} />
            <Screen path="/chat">
              <ChatPage userName="ne-eun" />
            </Screen>
          </Navigator>
        </ThemeProvider>
      )}
    </ColorSchemeProvider>
  );
};

export default App;
