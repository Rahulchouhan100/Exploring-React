import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    console.log("helo");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      //   console.log("email" + email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const signOutUser = async () => {
    try {
      await signOut(auth);
      console.log("logout");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <input
        type="emai"
        placeholder="Email...."
        // value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={signIn}>Sign in</button> <br />
      <button onClick={signWithGoogle}>sign in with google </button> <br />
      <button onClick={signOutUser}>Log out</button>
    </div>
  );
};

export default Auth;
