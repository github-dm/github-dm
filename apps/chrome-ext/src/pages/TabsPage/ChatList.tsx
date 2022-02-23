import React from "react";
import { useNavigator } from "@karrotframe/navigator";
import { Box, Avatar, Text, ButtonInvisible } from "@primer/react";
import { PlusIcon } from "@primer/octicons-react";
import { Page } from "@components";

const data = [
  {
    id: "ne-eun",
    name: "ne-eun",
    lastChat: "안녕안녕하세요~"
  },
  {
    id: "bang9",
    name: "bang9",
    lastChat: "하루가 왜이렇게 빨리 가는지 모르겠어....ㅠㅠ"
  },
  {
    id: "ne-eun",
    name: "ne-eun",
    lastChat: "안녕안녕하세요~~~ 코딩너모재미써효"
  },
  {
    id: "bang9",
    name: "bang9",
    lastChat: "졸려"
  },
  {
    id: "ne-eun",
    name: "ne-eun",
    lastChat: "안녕안녕하세요~"
  },
  {
    id: "bang9",
    name: "bang9",
    lastChat: "하루가 왜이렇게 빨리 가는지 모르겠어....ㅠㅠ"
  },
  {
    id: "ne-eun",
    name: "ne-eun",
    lastChat: "안녕안녕하세요~~~ 코딩너모재미써효"
  },
  {
    id: "bang9",
    name: "bang9",
    lastChat: "졸려"
  },
  {
    id: "ne-eun",
    name: "ne-eun",
    lastChat: "안녕안녕하세요~"
  },
  {
    id: "bang9",
    name: "bang9",
    lastChat: "하루가 왜이렇게 빨리 가는지 모르겠어....ㅠㅠ"
  },
  {
    id: "ne-eun",
    name: "ne-eun",
    lastChat: "안녕안녕하세요~~~ 코딩너모재미써효"
  },
  {
    id: "bang9",
    name: "bang9",
    lastChat: "이게 마지막입니닷!"
  }
];

function ChatList() {
  const { push } = useNavigator();

  return (
    <Page>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text
          sx={{
            marginLeft: "12px",
            fontWeight: "bold"
          }}
          color="accent.fg"
        >
          Github DM
        </Text>
        <ButtonInvisible
          sx={{
            padding: "8px",
            marginLeft: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <PlusIcon size={24} />
        </ButtonInvisible>
      </Box>
      <Box
        sx={{
          overflow: "auto",
          height: "calc(100% - 60px)"
        }}
      >
        {data.map((item, index) => (
          <ListRow key={index} id={item.id} lastChat={item.lastChat} onClick={() => push("/chat")} />
        ))}
      </Box>
    </Page>
  );
}

type RowProps = {
  id: string;
  lastChat: string;
  onClick: () => void;
};
export const ListRow: React.FC<RowProps> = ({ id, lastChat, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        padding: "12px",
        alignItems: "center",
        "& + div": {
          borderTop: "1px solid",
          borderColor: "border.muted"
        },
        "&:hover": {
          borderRadius: "5px",
          backgroundColor: "canvas.subtle"
        }
      }}
    >
      <Avatar
        sx={{
          minWidth: "48px",
          marginRight: "12px"
        }}
        src={`https://github.com/${id}.png`}
      />
      <Box overflow="hidden">
        <Text
          as="p"
          sx={{
            fontSize: "16px",
            color: "fg.default"
          }}
        >
          {id}
        </Text>
        <Text
          as="p"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontSize: "14px",
            color: "fg.default"
          }}
        >
          {lastChat}
        </Text>
      </Box>
    </Box>
  );
};

export default ChatList;
