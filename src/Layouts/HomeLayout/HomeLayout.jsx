import React, { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { AuthContext } from "../../Provider/AuthContext";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="max-w-screen-2xl mx-auto bg-black text-white">
      <Navbar />
      <div className="min-h-screen px-2 mt-[95px]">
        {loading ? <LoadingSpinner /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
