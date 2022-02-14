import type SendBird from "sendbird";

async function connect(
  sdk: SendBird.SendBirdInstance,
  userId: string
): Promise<void> {
  await sdk.connect(userId);
}

export const createUserModule = (sdk: SendBird.SendBirdInstance) => ({
  connect: (userId: string) => connect(sdk, userId),
});
