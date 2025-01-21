import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import useAxios from "../Hooks/useAxios";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  // Google provider
  const googleProvider = new GoogleAuthProvider();

  // Sign in with google
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Signup user
  const signupUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Signin user
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUserProfile = (updatedInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedInfo);
  };

  // Tracing current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      if (currUser) {
        axiosInstance
          .post("/jwt", { email: currUser.email })
          .then(() => {
            // setLoading(false);
            axiosInstance
              .post("/getUserType", { email: currUser?.email })
              .then(({ data }) => {
                setUser((currState) => ({
                  ...currState,
                  userType: data.userType,
                }));
              });
          })
          .catch(() => toast.error("Something went wrong"))
          .finally(() => setLoading(false));
      } else {
        axiosInstance
          .post("/logout", {})
          .then(() => {
            setLoading(false);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    });
    return () => unsubscribe();
  }, []);

  // Signout user
  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signinWithGoogle,
    signupUser,
    updateUserProfile,
    signinUser,
    signoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
