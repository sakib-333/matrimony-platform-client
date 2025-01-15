import React from "react";
import { MdWorkspacePremium } from "react-icons/md";
import { Link } from "react-router-dom";

const BiodataCard = ({ user }) => {
  const {
    _id,
    userType,
    profileImg,
    age,
    bioType,
    permanentDivision,
    occupation,
  } = user;
  return (
    <div className="border relative p-4 w-full ">
      {userType == "premium" && (
        <MdWorkspacePremium className="absolute left-0 top-0 text-2xl" />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center items-center">
        <div className="text-center">
          <img
            className="max-w-[150px] aspect-square rounded-full"
            src={profileImg}
          />
          <p className="text-xs mt-2 font-bold max-w-[150px] ">{"ABC999"}</p>
        </div>
        <ul className="space-y-1">
          <li>Age: {age}</li>
          <li>Type: {bioType}</li>
          <li>Division: {permanentDivision}</li>
          <li>Occupation: {occupation}</li>
          <li>
            <Link
              to={`/biodata/${_id}`}
              className=" text-sm font-semibold text-violet-500"
            >
              View Profile
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="flex justify-center md:justify-end">
        <Link
          to={"#"}
          className="px-4 py-1 text-sm font-semibold rounded-full  border"
        >
          View Profile
        </Link>
      </div> */}
    </div>
  );
};

export default BiodataCard;
