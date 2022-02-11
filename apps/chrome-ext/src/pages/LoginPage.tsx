import { useNavigator, ScreenHelmet } from "@karrotframe/navigator";
import ThemeService from "@services/theme.service";
import { Button } from "@UI";

function LoginPage() {
  const theme = ThemeService.getTheme();
  const { push } = useNavigator();

  return (
    <>
      <ScreenHelmet title="" />
      <div>
        <h1 className="text-3xl font-bold mb-5">Github DM</h1>
        <Button onClick={() => push("/Login")} color="black">
          <img
            src={`/images/github/Github-Mark-${theme}-32px.png`}
            alt="github logo"
          />
          <p className="w-full text-center ">Sign in with Github</p>
        </Button>
      </div>
    </>
  );
}

export default LoginPage;
