import React, { useState } from "react";
import { ScreenHelmet, useNavigator } from "@karrotframe/navigator";
import { Box, Button, DropdownButton, DropdownMenu } from "@primer/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import { useColorScheme } from "@contexts/ColorScheme.context";
import { ColorScheme } from "@services/ColorScheme.service";
import AuthModule from "../modules/auth.module";
import { Page } from "@components";

function LoginPage() {
  const { push } = useNavigator();

  const [email, setEmail] = useState("email");

  return (
    <Page>
      <ScreenHelmet title="Github DM" />
      <Box flexDirection={"column"} p={3}>
        <Box display={"flex"} flex={1} justifyContent={"flex-end"}>
          <SchemeSelector />
        </Box>
        <p>User Email: {email}</p>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            onClick={async () => {
              const u = await AuthModule.signIn();
              setEmail(u.user.email ?? "none");
              await push("/list");
            }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Box mr={2}>
                <MarkGithubIcon size={32} />
              </Box>
              <p className="w-full text-center ">Sign in with Github</p>
            </Box>
          </Button>
        </Box>
      </Box>
    </Page>
  );
}

type SchemeItem = {
  selected: boolean;
  text: ColorScheme | "system";
  id: number;
};
const SchemeSelector: React.FC = () => {
  const { colorMode, setColorMode } = useColorScheme();
  const items: SchemeItem[] = [
    {
      selected: !colorMode.systemEnabled && colorMode.scheme === "light",
      text: "light",
      id: 1
    },
    {
      selected: !colorMode.systemEnabled && colorMode.scheme === "dark",
      text: "dark",
      id: 2
    },
    {
      selected: colorMode.systemEnabled,
      text: "system",
      id: 3
    }
  ];

  return (
    <>
      <DropdownMenu
        renderAnchor={({ children, "aria-labelledby": ariaLabelledBy, ...anchorProps }) => (
          <DropdownButton aria-labelledby={`favorite-color-label ${ariaLabelledBy}`} {...anchorProps}>
            {children}
          </DropdownButton>
        )}
        placeholder="🎨"
        items={items}
        selectedItem={items.find(item => item.selected)}
        onChange={item => {
          if (!item) return;
          if (item.text === "system") setColorMode(true);
          else setColorMode(false, item.text as ColorScheme);
        }}
      />
    </>
  );
};

export default LoginPage;
