import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const Logout = () => {
  const { setUser, signoutUser, setLoading } = useContext(AuthContext);

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
    <button className="text-left" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
