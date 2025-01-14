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
              .post("/saveUserInfo", { email, userType: "general" })
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
      {/* <form className="my-4 max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="heading">Registeration</h1>
        <fieldset className="w-full space-y-1 dark:text-gray-800">
          <label htmlFor="price" className="block text-sm font-medium">
            Your Name
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder="Your Name"
              {...register("displayName", { required: true })}
              className="flex flex-1 py-2 px-4 border sm:text-sm focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
            />
          </div>
        </fieldset>
        <fieldset className="w-full space-y-1 dark:text-gray-800">
          <label htmlFor="price" className="block text-sm font-medium">
            Your Email
          </label>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="flex flex-1 py-2 px-4 border sm:text-sm focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
            />
          </div>
        </fieldset>
        <PasswordField register={register} errors={errors} />
        <fieldset className="w-full space-y-1 dark:text-gray-800">
          <label htmlFor="price" className="block text-sm font-medium">
            Your Photo URL
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder="Your Photo URL"
              {...register("photoURL", { required: true })}
              className="flex flex-1 py-2 px-4 border sm:text-sm focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
            />
          </div>
        </fieldset>
        <button
          type="submit"
          className="px-8 py-3 mt-4 w-full font-semibold rounded dark:bg-gray-800 dark:text-gray-100"
        >
          Registeration
        </button>
        <div className="my-4">
          <SigninWithGoogle />
        </div>
        <p className="mt-4">
          Already have an account? Please
          <Link className="text-[#00f]" to={"/login"}>
            {" "}
            log in{" "}
          </Link>
          here.
        </p>
      </form> */}
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
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
          >
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
