import React, { useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import AuthContext from "./AuthContext";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const forgotPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const createUserWithEP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    loginWithGoogle,
    loginWithEP,
    forgotPass,
    createUserWithEP,
    updateUser,
    logOut,
    user,
    setUser,
    loading,
    setLoading,
  };
  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
