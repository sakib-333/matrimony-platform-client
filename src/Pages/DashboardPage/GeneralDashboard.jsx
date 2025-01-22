import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import useAxios from "../../Hooks/useAxios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logout from "./Logout";
import { AuthContext } from "../../Provider/AuthContext";

const GeneralDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const { data: biodata = null } = useQuery({
    queryKey: ["checkBioExist"],
    queryFn: async () => {
      const res = await axiosInstance.post("/myBiodata", {
        email: user?.email,
        action: "get",
      });
      return res.data;
    },
  });

  useEffect(() => {
    navigate("/dashboard/myBiodata");
  }, []);

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start w-full">
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
              <Link
                to={"/dashboard/myBiodata"}
                className="hover:underline w-fit"
              >
                {biodata ? "Edit" : "Add"} Biodata
              </Link>
              <Link
                to={"/dashboard/viewMyBiodata"}
                className="hover:underline w-fit"
              >
                View Biodata
              </Link>
              <Link
                to={"/dashboard/myContactRequest"}
                className="hover:underline w-fit"
              >
                My Contact Request
              </Link>
              <Link
                to={"/dashboard/myFavouritesBiodatas"}
                className="hover:underline w-fit"
              >
                Favourites Biodata
              </Link>
              <Logout />
            </div>
          </div>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
};

export default GeneralDashboard;
