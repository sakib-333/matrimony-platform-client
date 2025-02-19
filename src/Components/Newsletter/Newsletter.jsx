import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail(""); // Clear input field after submitting
  };

  return (
    <div className="text-white py-8">
      <h1 className="heading">Newsletter</h1>
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <p className="paragraph mb-6">
          Get the latest updates, news, and exclusive offers delivered straight
          to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center space-x-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 w-64 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button type="submit" className="btn-primary w-fit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
