import { Button } from "@primer/react";
import { ScreenHelmet, useNavigator, useParams } from "@karrotframe/navigator";
import { Page } from "@components";

function ChatPage() {
  const { push } = useNavigator();
  let { targetUser } = useParams<{ targetUser: string }>();
  return (
    <Page>
      <ScreenHelmet title={targetUser} />
      <Button onClick={() => push("/login")}>로그인 가자</Button>
    </Page>
  );
}

export default ChatPage;
