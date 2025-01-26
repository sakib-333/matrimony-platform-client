import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyContactRequest = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getMyContactRequest"],
    queryFn: async () => {
      const res = await axiosInstance.post("/getMyContactRequest", {
        email: user?.email,
      });
      return res.data;
    },
  });

  const handleDeleteMyReqContact = (email, id) => {
    // console.log(email, id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .post("/deleteMyContactRequest", { email, id })
          .then((res) => {
            if (res.data.acknowledged) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "One contact has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(() => toast.error("Something went wrong"));
      }
    });
  };

  // console.log(isLoading);
  if (isLoading) {
    return (
      <div className="w-full h-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {data.length ? (
        <div className="w-full">
          <div>
            <div className="container p-2 mx-auto sm:p-4">
              <h2 className="heading">Your Contact Request</h2>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border w-full text-xs">
                  <colgroup>
                    <col />
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
                      <th className="p-3 border">Mobile No</th>
                      <th className="p-3 border">Email</th>
                      <th className="p-3 border">Status</th>
                      <th className="p-3 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr
                        key={Math.random()}
                        className="border-b border-opacity-20 dark:border-gray-300 "
                      >
                        <td className="p-3 border">
                          <p>
                            {typeof item?.BiodataId === "undefined"
                              ? "-"
                              : item?.BiodataId}
                          </p>
                        </td>
                        <td className="p-3 border">
                          <p>{item?.name ? item?.name : "-"}</p>
                        </td>
                        <td className="p-3 border">
                          <p>{item?.mobileNumber ? item?.mobileNumber : "-"}</p>
                        </td>
                        <td className="p-3 border">
                          <p>{item?.contactEmail ? item?.contactEmail : "-"}</p>
                        </td>
                        <td className="p-3 border">
                          <p>{item?.approved ? "Approved" : "Pending"}</p>
                        </td>
                        <td className="p-3 border">
                          <button
                            className="btn-primary px-2 py-1"
                            onClick={() =>
                              handleDeleteMyReqContact(
                                item?.userEmail,
                                item?.requestedID
                              )
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

export default MyContactRequest;
