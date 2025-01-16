import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import SigninWithGoogle from "../../Components/SigninWithGoogle/SigninWithGoogle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PasswordField from "../../Components/PasswordField/PasswordField";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import PageTitle from "../../Components/PageTitle/PageTitle";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signinUser, setLoading } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    signinUser(email, password)
      .then(() => {
        toast.success("Welcome back");
        navigate(state?.from?.pathname || "/");
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <PageTitle title={"Login"} />
      <div className="w-full mx-auto my-4 max-w-md p-8 space-y-3 rounded-xl bg-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit" className="btn-primary py-3 rounded-md">
            Sign in
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
          Don't have an account{" "}
          <Link
            to={"/register"}
            rel="noopener noreferrer"
            className="underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
