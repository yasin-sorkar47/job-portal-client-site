import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../context";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //   create user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   login with google
  const loginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   log out user
  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("http://localhost:3000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setUser(currentUser);
            setLoader(false);
          });
      } else {
        axios
          .post("http://localhost:3000/logout", {}, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setUser(null);
            setLoader(false);
          });
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loader,
    createUser,
    loginUser,
    loginWithGoogle,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
