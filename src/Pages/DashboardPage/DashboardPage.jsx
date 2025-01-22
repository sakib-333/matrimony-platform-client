import React, { useContext } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { AuthContext } from "../../Provider/AuthContext";
import GeneralDashboard from "./GeneralDashboard";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col sm:flex-row">
      <PageTitle title="Dashboard" />
      {user?.userType === "admin" ? <AdminDashboard /> : <GeneralDashboard />}
    </div>
  );
};

export default DashboardPage;
