import React from "react";
import { Avatar, SubNav, Box, Text, ButtonInvisible } from "@primer/react";
import { useColorScheme } from "@contexts/ColorScheme.context";
import { ColorScheme } from "@services/ColorScheme.service";
import { Page } from "@components";

const userID = "ne-eun";
function Setting() {
  return (
    <Page>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Avatar
          sx={{
            marginTop: -10
          }}
          size={100}
          src={`https://github.com/${userID}.png`}
        />
        <Text
          sx={{
            color: "fg.default",
            fontSize: "20px",
            marginBottom: 4
          }}
        >
          {userID}
        </Text>
        <SchemeSelector />
        <ButtonInvisible
          sx={{
            marginTop: 20
          }}
        >
          Sign out
        </ButtonInvisible>
      </Box>
    </Page>
  );
}

type SchemeItem = {
  selected: boolean;
  text: ColorScheme | "system";
  onClick: () => void;
  id: number;
};
const SchemeSelector: React.FC = () => {
  const { colorMode, setColorMode } = useColorScheme();
  const items: SchemeItem[] = [
    {
      selected: !colorMode.systemEnabled && colorMode.scheme === "light",
      text: "light",
      onClick: () => setColorMode(false, "light"),
      id: 1
    },
    {
      selected: !colorMode.systemEnabled && colorMode.scheme === "dark",
      text: "dark",
      onClick: () => setColorMode(false, "dark"),
      id: 2
    },
    {
      selected: colorMode.systemEnabled,
      text: "system",
      onClick: () => setColorMode(true),
      id: 3
    }
  ];

  return (
    <SubNav aria-label="Main">
      <SubNav.Links sx={{ cursor: "pointer" }}>
        {items.map(item => (
          <SubNav.Link key={item.id} onClick={item.onClick} selected={item.selected}>
            {item.text}
          </SubNav.Link>
        ))}
      </SubNav.Links>
    </SubNav>
  );
};

export default Setting;
