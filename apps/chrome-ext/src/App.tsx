import React, { useEffect, useState } from "react";

import { Navigator, Screen } from "@karrotframe/navigator";
import { fetchMessage } from "@github-dm/messaging";
import ThemeService from "./services/theme.service";

import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";

import "@karrotframe/navigator/index.css";
import "./App.css";

const App: React.FC = () => {
  fetchMessage();
  const [darkEnabled, setDarkEnabled] = useState(false);

  useEffect(() => {
    setDarkEnabled(ThemeService.getTheme() !== "light");
  }, []);

  return (
    <div className="App bg-white dark:bg-black min-h-screen min-w-[380px] p-[1rem]">
      <SwitchTest
        checked={darkEnabled}
        setChecked={(val) => {
          ThemeService.setCustomTheme(val ? "dark" : "light");
          setDarkEnabled(val);
        }}
      />
      <Navigator theme="Cupertino">
        <Screen path="/" component={LoginPage} />
        <Screen path="/list" component={ListPage} />
      </Navigator>
    </div>
  );
};

const SwitchTest: React.FC<{
  checked: boolean;
  setChecked: (val: boolean) => void;
}> = ({ checked, setChecked }) => {
  return (
    <label className={"flex relative cursor-pointer"}>
      <input
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className={"peer hidden"}
        type={"checkbox"}
        role={"switch"}
      />
      <span className={"bg-blue-300 px-6 py-3 rounded-full"} />
      <span
        className={
          "absolute transition left-0 bg-blue-100 p-3 rounded-full peer-checked:translate-x-6 peer-checked:bg-blue-500"
        }
      />
    </label>
  );
};

export default App;
