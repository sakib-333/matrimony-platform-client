import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logout from "../DashboardPage/Logout";
import { AuthContext } from "../../Provider/AuthContext";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <aside className="max-w-max p-6 sm:w-60 text-white">
      <nav className="space-y-8 text-sm">
        <div className="space-y-2">
          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12 rounded-full" src={user?.photoURL} />
            <div>
              <p className="text-[18px]">{user?.displayName}</p>
              <p className="text-gray-400 text-center text-xs capitalize">
                {user?.userType}
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Link to={"#"} className="hover:underline w-fit">
              Admin Dashboard
            </Link>
            <Link to={"#"} className="hover:underline w-fit">
              Manage Users
            </Link>
            <Link to={"#"} className="hover:underline w-fit">
              Approved Premium
            </Link>
            <Link to={"#"} className="hover:underline w-fit">
              Approved Contact Request
            </Link>
            <Logout />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default AdminDashboard;
