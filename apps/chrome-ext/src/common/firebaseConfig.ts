declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_KEY: string;
      REACT_APP_AUTH_DOMAIN: string;
      REACT_APP_PROJECT_ID: string;
      REACT_APP_MSG_SENDER_ID: string;
      REACT_APP_APP_ID: string;
      REACT_APP_MEASUREMENT_ID: string;
    }
  }
}

const {
  REACT_APP_API_KEY,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_MSG_SENDER_ID
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  messagingSenderId: REACT_APP_MSG_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID
};

export default firebaseConfig;
