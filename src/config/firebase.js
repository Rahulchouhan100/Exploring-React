import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI4qQus2SjujD1RQMZtM9gdC74J1bFpiQ",
  authDomain: "fir-learning-2d70f.firebaseapp.com",
  projectId: "fir-learning-2d70f",
  storageBucket: "fir-learning-2d70f.appspot.com",
  messagingSenderId: "433165925888",
  appId: "1:433165925888:web:85b46475ab4b137543a2e5",
  measurementId: "G-0MEG13HSEP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
