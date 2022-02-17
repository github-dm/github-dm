let initialized = false;
self.importScripts("firebase/firebase-app.js", "firebase/firebase-auth.js");

const createCommandHandler = (command, handler) => {
  return async (...args) => {
    console.log("receive command:", command);
    try {
      const data = await handler(...args);
      chrome.runtime.sendMessage({ command, data });
    } catch (error) {
      console.log(`${command} handler error:`, error);
    }
  };
};

const onInit = createCommandHandler("init", config => {
  if (!initialized) {
    firebase.initializeApp(config);
    initialized = true;
  }
  return initialized;
});
const onSignIn = createCommandHandler("sign-in", async (id, pwd) => {
  // not working provider sign-in
  // const provider = new firebase.auth.GithubAuthProvider();
  // await firebase.auth().signInWithPopup(provider);
  return firebase.auth().signInWithEmailAndPassword(id, pwd);
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  try {
    if (msg.command === "init") onInit(msg.config);
    if (msg.command === "sign-in") onSignIn("test@dot.com", "password");
    response();
  } catch (error) {
    console.log("service-worker error:", error);
    response(error);
  }
});

function responseHandler() {}
