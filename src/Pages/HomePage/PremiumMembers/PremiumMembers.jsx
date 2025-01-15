import React, { useState } from "react";
import BiodataCard from "../../../Components/BiodataCard/BiodataCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

const PremiumMembers = () => {
  const axiosInstance = useAxios();
  const [sortType, setSortType] = useState("ascending");
  const { data = [], isLoading } = useQuery({
    queryKey: ["premiumUsers", sortType],
    queryFn: async () => {
      const result = await axiosInstance.get(
        `/getPremiumUsers?age=${sortType}`
      );
      return result.data;
    },
  });

  return (
    <div className="bg-gray-800 text-white py-8">
      <h1 className="heading">Premium Members</h1>
      <select
        onChange={(e) => setSortType(e.target.value)}
        defaultValue={""}
        className="my-4 bg-gray-800 text-white px-4 py-1 border border-gray-100"
      >
        <option disabled value={""}>
          Sort by Age
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((user) => (
            <BiodataCard key={user._id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PremiumMembers;
