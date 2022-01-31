import type React from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchMessage } from "@github-dm/messaging";
import { useState } from "react";

const App: React.FC = () => {
  fetchMessage();
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>counter {count}</h1>
        <button onClick={() => setCount((p) => p + 1)}>increase</button>
      </header>
    </div>
  );
};

export default App;
