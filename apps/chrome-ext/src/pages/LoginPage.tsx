import { useState, useEffect } from "react";
import { useNavigator, ScreenHelmet } from "@karrotframe/navigator";
import ThemeService from "@services/theme.service";
import { Button } from "@UI";

function LoginPage() {
  const theme = ThemeService.getTheme();
  const { push } = useNavigator();
  const [darkEnabled, setDarkEnabled] = useState(false);

  useEffect(() => {
    setDarkEnabled(ThemeService.getTheme() !== "light");
  }, []);

  return (
    <div className="h-full p-[1rem]">
      <ScreenHelmet title="" />
      <SwitchTest
        checked={darkEnabled}
        setChecked={(val) => {
          ThemeService.setCustomTheme(val ? "dark" : "light");
          setDarkEnabled(val);
        }}
      />
      <h1 className="text-3xl font-bold mb-5">Github DM</h1>
      <Button onClick={() => push("/list")} color="black">
        <img
          src={`/images/github/Github-Mark-${theme}-32px.png`}
          alt="github logo"
        />
        <p className="w-full text-center ">Sign in with Github</p>
      </Button>
    </div>
  );
}

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

export default LoginPage;
