import React from "react";
import { howItWorks } from "../Assets/howItWorks";

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h1 className="heading">How matrimony works</h1>
      <p className="text-center text-sm">
        Get started in bdmarriage.com in 3 easy steps
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {howItWorks.map((item) => (
          <div
            key={item.id}
            className="p-4 w-full text-center mx-auto max-w-[300px] flex flex-col items-center"
          >
            <img src={item.thubnail} />
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
