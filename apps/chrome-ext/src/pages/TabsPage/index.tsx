import React from "react";
import styled from "styled-components";
import { Tabs } from "@karrotframe/tabs";
import { themeGet } from "@primer/react";
import { CommentDiscussionIcon, GearIcon } from "@primer/octicons-react";
import ChatList from "./ChatList";
import Setting from "./Setting";

const tabs = [
  {
    key: "CHAT_LIST",
    buttonLabel: <CommentDiscussionIcon size={20} />,
    buttonAriaLabel: "Chat_list",
    render: () => <ChatList />
  },
  {
    key: "SETTING",
    buttonLabel: <GearIcon size={20} />,
    buttonAriaLabel: "Setting",
    render: () => <Setting />
  }
];

export default function MainTabsPage() {
  const [activeTabKey, setActiveTabKey] = React.useState("CHAT_LIST");
  return (
    <LeftTabs
      activeTabKey={activeTabKey}
      tabs={tabs}
      onTabChange={key => {
        setActiveTabKey(key);
      }}
    />
  );
}

const LeftTabs = styled(Tabs)`
  --kf_tabs_tabBar-baseFontColor: ${themeGet("colors.fg.subtle")};
  --kf_tabs_tabBar-activeFontColor: ${themeGet("colors.fg.default")};
  & > :first-child {
    border-right: 1px solid ${themeGet("colors.border.default")};
    position: fixed;
    left: 0;
    top: 0;
    width: 48px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    background-color: ${themeGet("colors.canvas.inset")};
    z-index: 100;
    & > :first-child {
      display: none;
    }
    & > a {
      margin: 4px;
      flex-grow: 0;
      text-align: left;
    }
  }
  & > :last-child > div {
    padding-left: 48px;
  }
`;
