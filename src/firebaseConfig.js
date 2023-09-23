import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUkIrnhkB_uZmf3Fc2W5Wc0PCTYAe0Lzc",
  authDomain: "user-info-e6aaa.firebaseapp.com",
  projectId: "user-info-e6aaa",
  storageBucket: "user-info-e6aaa.appspot.com",
  messagingSenderId: "323716735980",
  appId: "1:323716735980:web:757df2ee4b76f1b333d6c9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
