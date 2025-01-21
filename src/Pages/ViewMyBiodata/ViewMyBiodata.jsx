import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/AuthContext";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const ViewMyBiodata = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const { data: myBiodata = {}, isLoading } = useQuery({
    queryKey: ["getMyBiodata"],
    queryFn: async () => {
      const res = await axiosInstance.post("/getMyBiodata", {
        email: user?.email,
      });
      return res.data;
    },
  });

  return (
    <div className="w-full">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
      )}
    </div>
  );
};

export default ViewMyBiodata;
