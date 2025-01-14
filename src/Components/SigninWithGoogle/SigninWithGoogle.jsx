import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";

const SigninWithGoogle = () => {
  const { setLoading, signinWithGoogle } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  const handleSigninWithGoogle = () => {
    signinWithGoogle()
      .then((res) => {
        axiosInstance
          .post("/saveUserInfo", {
            email: res?.user?.email,
            userType: "general",
          })
          .then(() => {
            toast.success("Welcome");
          })
          .catch(() => toast.error("Something went wrong"));

        navigate(state?.from?.pathname || "/");
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setLoading(false));
  };
  return (
    <button
      onClick={handleSigninWithGoogle}
      type="button"
      className="w-full px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 flex items-center justify-center gap-2"
    >
      <FcGoogle /> <span>Signin With Google</span>
    </button>
  );
};

export default SigninWithGoogle;
