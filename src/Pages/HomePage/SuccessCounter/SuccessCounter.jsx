import React from "react";
import CountUp from "react-countup";

const SuccessCounter = () => {
  return (
    <div className="py-8 bg-gray-800 text-white">
      <h1 className="heading">Success Counter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 w-full text-center mx-auto max-w-[300px] flex flex-col items-center">
          <h1 className="text-5xl">
            <CountUp end={100} duration={10} />
          </h1>
          <h1 className="text-2xl">Girls Biodata</h1>
        </div>
        <div className="p-4 w-full text-center mx-auto max-w-[300px] flex flex-col items-center">
          <h1 className="text-5xl">
            <CountUp end={100} duration={10} />
          </h1>
          <h1 className="text-2xl">Boys Biodata</h1>
        </div>
        <div className="p-4 w-full text-center mx-auto max-w-[300px] flex flex-col items-center">
          <h1 className="text-5xl">
            <CountUp end={100} duration={10} />
          </h1>
          <h1 className="text-2xl">Completed marriages</h1>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
