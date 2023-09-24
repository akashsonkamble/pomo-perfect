import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_API_KEY),
  authDomain: String(import.meta.env.VITE_AUTH_DOMAIN),
  projectId: String(import.meta.env.VITE_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_STORAGE_BUCKET),
  messagingSenderId: String(import.meta.env.VITE_MESSAGING_SENDER_ID),
  appId: String(import.meta.env.VITE_APP_ID),
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
const auth = getAuth(app);
export default auth;
