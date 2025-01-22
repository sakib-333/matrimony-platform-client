import React, { useContext } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { AuthContext } from "../../Provider/AuthContext";
import GeneralDashboard from "./GeneralDashboard";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col sm:flex-row">
      <PageTitle title="Dashboard" />
      {typeof user.userType === "undefined" ? (
        <LoadingSpinner />
      ) : user?.userType === "admin" ? (
        <AdminDashboard />
      ) : (
        <GeneralDashboard />
      )}
    </div>
  );
};

export default DashboardPage;
