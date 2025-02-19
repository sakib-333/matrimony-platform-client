import React from "react";
import { FaComments, FaHeart, FaShieldAlt, FaUserCheck } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaUserCheck className="text-pink-600 text-4xl" />,
    title: "Verified Profiles",
    description:
      "We ensure 100% verified profiles for a safe and secure matchmaking experience.",
  },
  {
    id: 2,
    icon: <FaShieldAlt className="text-pink-600 text-4xl" />,
    title: "Privacy & Security",
    description:
      "Your personal data is protected with advanced security measures.",
  },
  {
    id: 3,
    icon: <FaHeart className="text-pink-600 text-4xl" />,
    title: "Success Stories",
    description:
      "Thousands of happy couples have found their perfect match with us.",
  },
  {
    id: 4,
    icon: <FaComments className="text-pink-600 text-4xl" />,
    title: "Personalized Support",
    description:
      "Our expert team is here to guide you throughout your journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-8 bg-gray-800 text-white">
      <h1 className="heading">Why Choose Us</h1>
      <div className="max-w-6xl mx-auto px-6 pt-4">
        <p className="text-center paragraph">
          Find out why thousands trust us to help them find their life partner.
        </p>

        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="border border-gray-400 rounded-xl p-6 text-center transition-transform transform hover:scale-105"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">
                {benefit.title}
              </h3>
              <p className="text-gray-500 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
