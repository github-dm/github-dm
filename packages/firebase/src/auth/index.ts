import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import type { AuthModuleFactory } from "..//types";

const createAuthModule: AuthModuleFactory = config => {
  const app = initializeApp(config);
  const auth = getAuth(app);

  return {
    signIn: () => {
      const provider = new GithubAuthProvider();
      return signInWithPopup(auth, provider);
    }
  };
};

export default createAuthModule;
