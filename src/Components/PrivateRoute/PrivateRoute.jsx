import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to={"/login"} state={{ from: location?.pathname }} replace />
  );
};

export default PrivateRoute;
