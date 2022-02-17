import { sendEvent } from "../utils/eventHandler.chrome";
import type { AuthModuleFactory } from "../types";

const createAuthModule: AuthModuleFactory = config => ({
  signIn: () => sendEvent({ command: "sign-in", config })
});

export default createAuthModule;
