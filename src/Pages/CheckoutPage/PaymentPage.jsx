// const PaymentPage = () => {
//   const { user } = useContext(AuthContext);
//   const { id } = useParams();
//   const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
//   return (
//     <div>
//       <PageTitle title={"Checkout"} />
//       <div className="w-full mx-auto my-4 max-w-md p-8 space-y-3 rounded-xl bg-gray-800">
//         <h1 className="text-2xl font-bold text-center">Checkout</h1>
//         <div className="space-y-6">
//           <div className="space-y-1 text-sm">
//             <label htmlFor="biodataID" className="block">
//               Biodata ID
//             </label>
//             <input
//               type="text"
//               value={id}
//               readOnly
//               className="w-full px-4 py-3 rounded-md text-white dark:border-gray-300 dark:bg-gray-400 focus:dark:border-violet-600"
//             />
//           </div>
//           <div className="space-y-1 text-sm">
//             <label htmlFor="yourEmail" className="block">
//               Your Email
//             </label>
//             <input
//               type="email"
//               readOnly
//               value={user?.email}
//               className="w-full px-4 py-3 rounded-md text-white dark:border-gray-300 dark:bg-gray-400 focus:dark:border-violet-600"
//             />
//           </div>

//           <Elements stripe={stripePromise}>
//             <CheckoutForm />
//           </Elements>
//           <button type="submit" className="btn-primary py-3 rounded-md">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const PaymentPage = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentPage;
