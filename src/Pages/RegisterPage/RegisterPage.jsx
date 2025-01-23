import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SigninWithGoogle from "../../Components/SigninWithGoogle/SigninWithGoogle";
import PasswordField from "../../Components/PasswordField/PasswordField";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAxios from "../../Hooks/useAxios";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signupUser, updateUserProfile, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  const onSubmit = ({ email, password, displayName, photoURL }) => {
    signupUser(email, password)
      .then(() => {
        updateUserProfile({ displayName, photoURL })
          .then(() => {
            axiosInstance
              .post("/saveUserInfo", {
                email,
                userType: "general",
                name: displayName,
              })
              .then(() => {
                toast.success("Registration successfull");
              })
              .catch(() => toast.error("Something went wrong."));
            navigate("/");
          })
          .catch(() => toast.error("Something went wrong."));
      })
      .catch(() => toast.error("Something went wrong."))
      .fially(() => setLoading(false));
  };

  return (
    <div>
      <PageTitle title={"Register"} />
      <div className="w-full mx-auto my-4 max-w-md p-8 space-y-3 rounded-xl bg-gray-800">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Your Name
            </label>
            <input
              type="text"
              {...register("displayName", { required: true })}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Your Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <PasswordField register={register} errors={errors} />
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Your photo URL
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="Your photo URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button type="submit" className="btn-primary py-3 rounded-md">
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <SigninWithGoogle />
        </div>
        <p className="text-xs text-center sm:px-6">
          Already have an account{" "}
          <Link to={"/login"} rel="noopener noreferrer" className="underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
