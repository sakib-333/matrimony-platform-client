import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const MyFavouritesBiodatas = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const { data = [], isLoading } = useQuery({
    queryKey: ["getMyFavBios"],
    queryFn: async () => {
      const res = await axiosInstance.post("/getMyFavBiodatas", {
        email: user?.email,
      });
      return res.data;
    },
  });

  return (
    <div className="w-full">
      {isLoading ? (
        <LoadingSpinner />
      ) : data.length ? (
        <div>
          <div className="container p-2 mx-auto sm:p-4">
            <h2 className="heading">Your Favourite Biodatas</h2>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="paragraph border text-white">
                  <tr className="text-left">
                    <th className="p-3 border">Biodata Id</th>
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Permanent Address</th>
                    <th className="p-3 border">Occupation</th>
                    <th className="p-3 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((bio) => (
                    <tr
                      key={bio?._id}
                      className="border-b border-opacity-20 dark:border-gray-300 "
                    >
                      <td className="p-3 border">
                        <p>{bio?.BiodataId}</p>
                      </td>
                      <td className="p-3 border">
                        <p>{bio?.name}</p>
                      </td>
                      <td className="p-3 border">
                        <p>{bio?.permanentDivision}</p>
                      </td>
                      <td className="p-3 border">
                        <p>{bio?.occupation}</p>
                      </td>
                      <td className="p-3 border">
                        <button className="btn-primary px-2 py-1">Delete</button>
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

export default MyFavouritesBiodatas;
