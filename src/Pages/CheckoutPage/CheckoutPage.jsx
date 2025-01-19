import React, { useContext } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthContext";

const CheckoutPage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
  };

  return (
    <div>
      <PageTitle title={"Checkout"} />
      <div className="w-full mx-auto my-4 max-w-md p-8 space-y-3 rounded-xl bg-gray-800">
        <h1 className="text-2xl font-bold text-center">Checkout</h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1 text-sm">
            <label htmlFor="biodataID" className="block">
              Biodata ID
            </label>
            <input
              type="text"
              {...register("biodataID", { value: id, required: true })}
              readOnly
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="yourEmail" className="block">
              Your Email
            </label>
            <input
              type="email"
              {...register("email", { value: user?.email, required: true })}
              readOnly
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="stripeCardNum" className="block">
              Stripe Card Number
            </label>
            <input
              type="text"
              {...register("stripeCardNum", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button type="submit" className="btn-primary py-3 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
