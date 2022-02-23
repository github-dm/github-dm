import { Button } from "@primer/react";
import { ScreenHelmet, useNavigator } from "@karrotframe/navigator";
import { Page } from "@components";

type Props = {
  userName: string;
};
function ChatPage({ userName }: Props) {
  const { push } = useNavigator();

  return (
    <Page>
      <ScreenHelmet title={userName} />
      <Button onClick={() => push("/login")}>로그인 가자</Button>
    </Page>
  );
}

export default ChatPage;
