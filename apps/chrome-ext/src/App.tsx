import { Navigator, Screen } from "@karrotframe/navigator";
import { fetchMessage } from "@github-dm/messaging";

import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";

import "@karrotframe/navigator/index.css";
import "./App.css";

const App: React.FC = () => {
  fetchMessage();

  return (
    <Navigator theme="Cupertino">
      <Screen path="/" component={LoginPage} />
      <Screen path="/list" component={ListPage} />
    </Navigator>
  );
};

export default App;
