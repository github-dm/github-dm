try {
  self.importScripts("firebase/firebase-app.js", "firebase/firebase-auth.js");

  firebase.initializeApp();

  chrome.runtime.onMessage.addListener(async (msg, sender, response) => {
    console.log("firebase", firebase);
    if (msg.command === "sign-in") {
      // not working provider sign-in
      // const provider = new firebase.auth.GithubAuthProvider();
      // await firebase.auth().signInWithPopup(provider);

      const user = await firebase.auth().signInWithEmailAndPassword("test@dot.com", "password");
      response(user);
    }
  });
} catch (err) {
  console.error(err);
}
