type PromiseExecutor<T> = (resolve: (val: T) => void, reject: (error: Error) => void) => any;

let initialized = false;
const promisify = <Return>(fn: PromiseExecutor<Return>) => {
  return new Promise<Return>((resolve, reject) => fn(resolve, reject));
};
const sender = <T>(data: T) => {
  return promisify<void>((resolve, reject) => {
    chrome.runtime.sendMessage(data, response => (response ? reject(response) : resolve()));
  });
};
const send = async <Return, T extends { command: string }>(data: T) => {
  await sender(data);
  return promisify<Return>(resolve => {
    const receiver = (msg: { command: string; data: any }, _: any, sendResponse: any) => {
      sendResponse();
      chrome.runtime.onMessage.removeListener(receiver);
      if (data.command === msg.command) resolve(msg.data);
    };
    chrome.runtime.onMessage.addListener(receiver);
  });
};
export const sendEvent = async <Return, Data extends { command: string; config: object }>(data: Data) => {
  if (!initialized) initialized = await send({ command: "init", config: data.config });
  return send<Return, Data>(data);
};
