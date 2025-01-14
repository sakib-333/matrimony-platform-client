import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { Navigate } from "react-router-dom";

const CheckUserExistence = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default CheckUserExistence;
