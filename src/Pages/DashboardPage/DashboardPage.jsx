import React, { useContext } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { AuthContext } from "../../Provider/AuthContext";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";

const DashboardPage = () => {
  const { user, setUser, signoutUser, setLoading } = useContext(AuthContext);
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

  const handleLogout = () => {
    signoutUser()
      .then(() => {
        setUser(() => null);
        toast.success("Logout successfull.");
      })
      .catch(() => toast.error("Something went wrong."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <PageTitle title="Dashboard" />
      <aside className="w-full p-6 sm:w-60 text-white">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img className="w-12 h-12 rounded-full" src={user?.photoURL} />
              <div>
                <p className="text-[18px]">{user?.displayName}</p>
                <p className="text-gray-400 text-xs capitalize">
                  {user?.userType}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Link
                to={"/dashboard/myBiodata"}
                className="hover:underline w-fit"
                rel="noopener noreferrer"
              >
                {biodata ? "Edit" : "Add"} Biodata
              </Link>
              <Link
                to={"/dashboard"}
                className="hover:underline w-fit"
                rel="noopener noreferrer"
              >
                View Biodata
              </Link>
              <Link
                to={"/dashboard/myContactRequest"}
                className="hover:underline w-fit"
                rel="noopener noreferrer"
              >
                My Contact Request
              </Link>
              <Link
                to={"/dashboard/myFavouritesBiodatas"}
                className="hover:underline w-fit"
                rel="noopener noreferrer"
              >
                Favourites Biodata
              </Link>
              <button className="text-left" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </div>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
};

export default DashboardPage;
