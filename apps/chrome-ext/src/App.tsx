import type React from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchMessage } from "@github-dm/messaging";
import { useState } from "react";
import ThemeService from "./services/theme.service";

const App: React.FC = () => {
  fetchMessage();
  const [count, setCount] = useState(0);
  const [darkEnabled, setDarkEnabled] = useState(
    ThemeService.getTheme() !== "light"
  );
  return (
    <div className="App bg-white dark:bg-black">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SwitchTest
          checked={darkEnabled}
          setChecked={(val) => {
            ThemeService.setCustomTheme(val ? "dark" : "light");
            setDarkEnabled(val);
          }}
        />
        <h1 className="text-3xl dark:text-white">
          theme {darkEnabled ? "dark" : "light"}
        </h1>

        <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              />
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            Writes Upside-Down
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>

        <h1 className="text-3xl font-bold underline">counter {count}</h1>
        <button
          className={
            "transition bg-orange-400 rounded-full px-4 hover:bg-orange-300 hover:scale-110 sm:bg-cyan-400 sm:hover:bg-cyan-300"
          }
          onClick={() => setCount((p) => p + 1)}
        >
          increase
        </button>
      </header>
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
