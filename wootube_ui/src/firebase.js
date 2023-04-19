import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  authDomain: "wootube-455aa.firebaseapp.com",
  projectId: "wootube-455aa",
  storageBucket: "wootube-455aa.appspot.com",
  messagingSenderId: "652414659066",
  appId: "1:652414659066:web:d36b105dd8aaf8995a5c43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;