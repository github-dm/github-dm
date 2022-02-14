import React from "react";
import { ScreenHelmet, useNavigator } from "@karrotframe/navigator";
import { Box, Button, DropdownButton, DropdownMenu } from "@primer/react";
import { useColorScheme } from "@contexts/ColorScheme.context";
import { ColorScheme } from "@services/color-scheme.service";
import { MarkGithubIcon } from "@primer/octicons-react";

function LoginPage() {
  const { push } = useNavigator();

  return (
    <div className="h-full p-[1rem]">
      <ScreenHelmet title="Github DM" />
      <Box flexDirection={"column"} p={3}>
        <Box display={"flex"} flex={1} justifyContent={"flex-end"}>
          <SchemeSelector />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Button onClick={() => push("/list")}>
            <Box display={"flex"} alignItems={"center"}>
              <Box mr={2}>
                <MarkGithubIcon size={32} />
              </Box>
              <p className="w-full text-center ">Sign in with Github</p>
            </Box>
          </Button>
        </Box>
      </Box>
    </div>
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
