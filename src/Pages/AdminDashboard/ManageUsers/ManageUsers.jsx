import React, { useContext, useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Provider/AuthContext";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const [searchKey, setSearchKey] = useState("");
  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageUsers", searchKey],
    queryFn: async () => {
      const res = await axiosInstance.post("/getAllUsers", {
        email: user?.email,
        key: searchKey,
      });
      return res.data;
    },
  });

  console.log(data);

  const handleSearchUser = (e) => {
    setSearchKey(e.target.value);
  };

  const handleMakeAdmin = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .post("/makeAdmin", { email: user?.email, adminEmail: email })
          .then(({ data }) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Success!",
                text: "The user is admin now",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <input
        className="mt-4 bg-black border px-3 py-1 rounded"
        type="text"
        value={searchKey}
        onChange={handleSearchUser}
        placeholder="Search user"
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="container p-2 mx-auto sm:p-4">
            <h2 className="heading">Manage Users</h2>
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
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Email</th>
                    <th className="p-3 border">Option</th>
                    <th className="p-3 border">Option</th>
                    <th className="p-3 border">Info</th>
                  </tr>
                </thead>
                <tbody>
                  {data.result.map((user) => (
                    <tr
                      key={user?._id}
                      className="border-b border-opacity-20 dark:border-gray-300 "
                    >
                      <td className="p-3 border">
                        <p>{user?.name}</p>
                      </td>
                      <td className="p-3 border">
                        <p>{user?.email}</p>
                      </td>
                      <td className="p-3 border">
                        <button
                          onClick={() => handleMakeAdmin(user.email)}
                          disabled={user?.userType === "admin"}
                          className="btn-primary"
                        >
                          {user?.userType === "admin" ? "Admin" : "Make Admin"}
                        </button>
                      </td>
                      <td className="p-3 border">
                        <button
                          disabled={user?.userType === "premium"}
                          className="btn-primary"
                        >
                          {user?.userType === "premium"
                            ? "Premium"
                            : "Make Premium"}
                        </button>
                      </td>
                      <td className="p-3 border">
                        <p>
                          {data.requestedUsers.premiumReq.includes(user.email)
                            ? "Requested"
                            : "-"}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
