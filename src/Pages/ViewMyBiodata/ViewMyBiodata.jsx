import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/AuthContext";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const ViewMyBiodata = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const { data: myBiodata = null, isLoading } = useQuery({
    queryKey: ["getMyBiodata"],
    queryFn: async () => {
      const res = await axiosInstance.post("/getMyBiodata", {
        email: user?.email,
      });
      return res.data;
    },
  });

  const handleReqForPremium = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "A request will be sent to the admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .post("/requestForPremium", { email: user?.email })
          .then(({ data }) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Success!",
                text: "Your request is under processing",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <LoadingSpinner />
      ) : myBiodata ? (
        <>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center paragraph text-left">
            <img
              className="max-w-xs w-full"
              src={myBiodata?.profileImg}
              alt="profile"
            />
            <div className="grid grid-cols-2">
              <p>Name:</p> <p>{myBiodata?.name}</p>
              <p>Bio Type:</p> <p>{myBiodata?.bioType}</p>
              <p>Date of Birth:</p> <p>{myBiodata?.dob}</p>
              <p>Age:</p> <p>{myBiodata?.age}</p>
              <p>Race:</p> <p>{myBiodata?.race}</p>
              <p>Height:</p> <p>{myBiodata?.height}</p>
              <p>Weight:</p> <p>{myBiodata?.weight}</p>
              <p>Occupation:</p> <p>{myBiodata?.occupation}</p>
              <p>Email:</p>
              <p>{myBiodata?.contactEmail}</p>
              <p>Mobile:</p>
              <p>{myBiodata?.mobileNumber}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Father Name:</p> <p>{myBiodata?.fatherName}</p>
              <p>Mother Name:</p> <p>{myBiodata?.mothersName}</p>
              <p>Perm Div:</p> <p>{myBiodata?.permanentDivision}</p>
              <p>Pres Div:</p> <p>{myBiodata?.presentDivision}</p>
              <p>Exp Partner Age:</p> <p>{myBiodata?.expectedPartnerAge}</p>
              <p>Exp Partner Height:</p>
              <p>{myBiodata?.expectedPartnerHeight}</p>
              <p>Exp Partner Weight:</p>
              <p>{myBiodata?.expectedPartnerWeight}</p>
              <p>User Type:</p>
              <p>{myBiodata?.userType}</p>
            </div>
          </div>
          {user.userType === "general" && (
            <button
              className="btn-primary w-fit mt-4"
              onClick={handleReqForPremium}
            >
              Request for Premium
            </button>
          )}
        </>
      ) : (
        <h1 className="heading h-full flex items-center justify-center">
          You have not added your biodata
        </h1>
      )}
    </div>
  );
};

export default ViewMyBiodata;
