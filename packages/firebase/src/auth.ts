// import { auth } from "./instance";
// import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

export const signIn = async (): Promise<any> => {
  // const provider = new GithubAuthProvider();
  // await signInWithPopup(auth, provider);
  return new Promise(resolve => {
    chrome.runtime.sendMessage({ command: "sign-in" }, (res: any) => {
      resolve(res);
    });
  });
};
