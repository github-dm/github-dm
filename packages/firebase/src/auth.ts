// import { auth } from "./instance";
// import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

export const signIn = async () => {
  // const provider = new GithubAuthProvider();
  // await signInWithPopup(auth, provider);
  chrome.runtime.sendMessage({ command: "sign-in" }, res => {
    console.log("done!", res);
  });
};
