import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../../Hooks/useAxios";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import StoryCard from "../../../Components/StoryCard/StoryCard";

const SuccessStory = () => {
  const axiosInstance = useAxios();
  const { data = [], isLoading } = useQuery({
    queryKey: ["getSuccessStory"],
    queryFn: async () => {
      const res = await axiosInstance.get("getSuccessStory");
      return res.data;
    },
  });

  console.log(data);

  return (
    <div className=" text-white py-8">
      <h1 className="heading">Success Story</h1>
      <div className="my-4">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {data.map((story) => (
              <StoryCard key={story._id} story={story} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessStory;
