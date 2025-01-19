import React, { useContext } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { AuthContext } from "../../Provider/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const { user, setUser, signoutUser,setLoading } = useContext(AuthContext);

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
    <div>
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
              <Link to={"#"} rel="noopener noreferrer">
                Edit Biodata
              </Link>
              <Link to={"#"} rel="noopener noreferrer">
                View Biodata
              </Link>
              <Link to={"#"} rel="noopener noreferrer">
                My Contact Request
              </Link>
              <Link to={"#"} rel="noopener noreferrer">
                Favourites Biodata
              </Link>
              <button className="text-left" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default DashboardPage;
