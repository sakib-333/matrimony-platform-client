import React from "react";
import CountUp from "react-countup";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const SuccessCounter = () => {
  const axiosInstance = useAxios();
  const { data = {} } = useQuery({
    queryKey: ["successCounter"],
    queryFn: async () => {
      const result = await axiosInstance.get(`/totalBiodatas`);
      return result.data;
    },
  });

  return (
    <div className="py-8 bg-gray-800 text-white">
      <h1 className="heading">Success Counter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 w-full text-center mx-auto max-w-[300px] flex flex-col items-center">
          <h1 className="text-5xl">
            <CountUp end={data?.girlsBiodata} duration={15} />
          </h1>
          <h1 className="text-2xl">Girls Biodata</h1>
        </div>
        <div className="p-4 w-full text-center mx-auto max-w-[300px] flex flex-col items-center">
          <h1 className="text-5xl">
            <CountUp end={data?.boysBiodata} duration={15} />
          </h1>
          <h1 className="text-2xl">Boys Biodata</h1>
        </div>
        <div className="p-4 w-full text-center mx-auto max-w-[300px] flex flex-col items-center">
          <h1 className="text-5xl">
            <CountUp end={data?.completedMarriages} duration={15} />
          </h1>
          <h1 className="text-2xl">Completed marriages</h1>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
