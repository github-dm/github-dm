import { Page } from "@components";
import { useNavigator } from "@karrotframe/navigator";
import { Button } from "@primer/react";

function ChatList() {
  const { push } = useNavigator();

  return (
    <Page>
      <Button onClick={() => push("/login")}>로그인 가자</Button>
    </Page>
  );
}

export default ChatList;
