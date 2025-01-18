import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/AuthContext";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import PageTitle from "../../Components/PageTitle/PageTitle";
import BiodataCard from "../../Components/BiodataCard/BiodataCard";

const BiodataDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const axiosInstance = useAxios();
  const {
    data: biodata = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["biodataDetails", id],
    queryFn: async () => {
      const result = await axiosInstance.post(`/biodata?id=${id}`, {
        email: user?.email,
      });
      return result.data;
    },
  });
  const { data: suggested = [] } = useQuery({
    queryKey: ["suggestedBiodatas", biodata],
    queryFn: async () => {
      const result = await axiosInstance.get(
        `/suggestedBiodatas?bioType=${biodata?.bioType}`
      );
      return result.data;
    },
  });

  return (
    <div className="mt-4">
      <PageTitle title={"Details"} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center paragraph text-left">
            <img
              className="max-w-xs w-full"
              src={biodata?.profileImg}
              alt="profile"
            />
            <div className="grid grid-cols-2">
              <p>Name:</p> <p>{biodata?.name}</p>
              <p>Bio Type:</p> <p>{biodata?.bioType}</p>
              <p>Date of Birth:</p> <p>{biodata?.dob}</p>
              <p>Age:</p> <p>{biodata?.age}</p>
              <p>Race:</p> <p>{biodata?.race}</p>
              <p>Height:</p> <p>{biodata?.height}</p>
              <p>Weight:</p> <p>{biodata?.weight}</p>
              <p>Occupation:</p> <p>{biodata?.occupation}</p>
              <p>Email:</p> <p>{biodata?.contactEmail}</p>
              <p>Mobile:</p> <p>{biodata?.mobileNumber}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Father Name:</p> <p>{biodata?.fatherName}</p>
              <p>Mother Name:</p> <p>{biodata?.mothersName}</p>
              <p>Perm Div:</p> <p>{biodata?.permanentDivision}</p>
              <p>Pres Div:</p> <p>{biodata?.presentDivision}</p>
              <p>Exp Partner Age:</p> <p>{biodata?.expectedPartnerAge}</p>
              <p>Exp Partner Height:</p>
              <p>{biodata?.expectedPartnerHeight}</p>
              <p>Exp Partner Weight:</p>
              <p>{biodata?.expectedPartnerWeight}</p>
              <p>User Type:</p>
              <p>{biodata?.userType}</p>
            </div>
          </div>
          <div className="my-4">
            <h1 className="heading mb-4">You may also like</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggested.map((user) => (
                <BiodataCard key={user._id} user={user} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BiodataDetails;
