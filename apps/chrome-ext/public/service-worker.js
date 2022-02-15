try {
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.command === "sign-in") {
      console.log("run sign in");
    }
  });
} catch (err) {
  console.error(err);
}
