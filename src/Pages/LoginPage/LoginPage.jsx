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

      <form className="my-4 max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="heading">Login</h1>
        <fieldset className="w-full space-y-1 dark:text-gray-800">
          <label htmlFor="price" className="block text-sm font-medium">
            Email
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
              className="flex flex-1 py-2 px-4 border sm:text-sm focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
            />
          </div>
        </fieldset>
        <PasswordField register={register} errors={errors} />
        <button
          type="submit"
          className="px-8 py-3 mt-4 w-full font-semibold rounded dark:bg-gray-800 dark:text-gray-100"
        >
          Login
        </button>
        <div className="my-4">
          <SigninWithGoogle />
        </div>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link className="text-[#00f]" to={"/register"}>
            Register{" "}
          </Link>
          here.
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
