import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthContext";
import { useParams } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxios from "../../Hooks/useAxios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState("");
  const axiosInstance = useAxios();
  const [clientSecret, setClientSecret] = useState("");

  const onSubmit = async (data) => {
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErr(error.message);
    } else {
      setErr("");
      // console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Anonymous",
            name: user?.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
      // console.log("Confirm error: ", confirmError);
      toast.error("Something went wrong");
    } else {
      // console.log(paymentIntent);
      // Call api here that payment has received
      axiosInstance
        .post("/addPaymentToDatabase", {
          email: user?.email,
          userEmail: data.email,
          requestedID: data.biodataID,
        })
        .then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              title: "Good job!",
              text: "Your payment is successful. An admin will accept your request.",
              icon: "success",
            });
          }
        });
    }
  };

  useEffect(() => {
    axiosInstance.post("/create-payment-intent", { price: 5 }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto my-4 max-w-md p-8 space-y-3 rounded-xl bg-gray-800"
    >
      <h1 className="text-2xl font-bold text-center">Checkout</h1>
      <div className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="biodataID" className="block">
            Biodata ID
          </label>
          <input
            type="text"
            {...register("biodataID")}
            value={id}
            readOnly
            className="w-full px-4 py-3 rounded-md text-white dark:border-gray-300 dark:bg-gray-400 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="yourEmail" className="block">
            Your Email
          </label>
          <input
            type="email"
            readOnly
            value={user?.email}
            {...register("email")}
            className="w-full px-4 py-3 rounded-md text-white dark:border-gray-300 dark:bg-gray-400 focus:dark:border-violet-600"
          />
        </div>
        {/* Card info start */}
        <div className="space-y-1 text-sm">
          <label htmlFor="yourEmail" className="block">
            Card Info
          </label>
          <CardElement
            className="px-4 py-3 bg-gray-400 rounded text-white"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#fff",
                  "::placeholder": {
                    color: "#fff",
                  },
                },
              },
            }}
          />
          <p className="text-red-500">{err}</p>
        </div>
        {/* Card info start */}

        {clientSecret ? (
          <button type="submit" className="btn-primary py-3 rounded-md">
            Submit
          </button>
        ) : (
          <button className="btn-primary bg-violet-400 hover:bg-none">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
