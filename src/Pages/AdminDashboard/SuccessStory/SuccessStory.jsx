import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const SuccessStory = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const { data = [], isLoading } = useQuery({
    queryKey: ["getSuccessStory"],
    queryFn: async () => {
      const res = await axiosInstance.post("/getSuccessStory", {
        email: user.email,
      });
      return res.data;
    },
  });

  const handleViewSuccessStory = (story) => {
    Swal.fire({
      text: story,
    });
  };

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <LoadingSpinner />
      ) : data.length ? (
        <div>
          <div className="container p-2 mx-auto sm:p-4">
            <h2 className="heading">Success Story</h2>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="paragraph border text-white">
                  <tr className="text-left">
                    <th className="p-3 border">Male Biodata Id</th>
                    <th className="p-3 border">Female Biodata Id</th>
                    <th className="p-3 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((story) => (
                    <tr
                      key={story?._id}
                      className="border-b border-opacity-20 dark:border-gray-300 "
                    >
                      <td className="p-3 border">
                        <p>{story?.selfBiodataID}</p>
                      </td>
                      <td className="p-3 border">
                        <p>{story?.partnerBiodataID}</p>
                      </td>
                      <td className="p-3 border">
                        <button
                          className="btn-primary"
                          onClick={() =>
                            handleViewSuccessStory(story.successStoryReview)
                          }
                        >
                          View Story
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="heading h-full flex items-center justify-center">
          No data found
        </h1>
      )}
    </div>
  );
};

export default SuccessStory;
