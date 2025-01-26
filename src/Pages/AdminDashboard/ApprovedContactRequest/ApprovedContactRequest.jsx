import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const ApprovedContactRequest = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getContactRequest"],
    queryFn: async () => {
      const res = await axiosInstance.post("/getContactRequest", {
        email: user?.email,
      });
      return res.data;
    },
  });

  //   console.log(data);

  const handleApprovedContactRequest = (userEmail, reqID) => {
    // console.log(userEmail, reqID);
    axiosInstance
      .post("/approveContactRequest", {
        email: user?.email,
        userEmail,
        id: reqID,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Contact Request Approved",
            text: "You clicked the button!",
            icon: "success",
          });
          refetch();
        }
      });
  };

  console.log(data);

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <LoadingSpinner />
      ) : data.length ? (
        <div>
          <div className="container p-2 mx-auto sm:p-4">
            <h2 className="heading">Approved Contact Request</h2>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="paragraph border text-white">
                  <tr className="text-left">
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Email</th>
                    <th className="p-3 border">Biodata ID</th>
                    <th className="p-3 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user) => (
                    <tr
                      key={user?._id}
                      className="border-b border-opacity-20 dark:border-gray-300 "
                    >
                      <td className="p-3 border">
                        <p>{user?.name}</p>
                      </td>
                      <td className="p-3 border">
                        <p>{user?.contactEmail}</p>
                      </td>
                      <td className="p-3 border">
                        <p>{user?.BiodataId}</p>
                      </td>
                      <td className="p-3 border">
                        <button
                          className="btn-primary"
                          disabled={user?.approved}
                          onClick={() =>
                            handleApprovedContactRequest(
                              user?.contactEmail,
                              user?.requestedID
                            )
                          }
                        >
                          {user?.approved ? "Approved" : "Approve"}
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

export default ApprovedContactRequest;
