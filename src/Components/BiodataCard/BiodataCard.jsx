import React from "react";
import profile from "../../Assets/sakib.jpg";
import { MdWorkspacePremium } from "react-icons/md";

const BiodataCard = ({ premium = false }) => {
  return (
    <div className="bg-gray-200 relative p-4 w-full mx-auto max-w-[300px] flex flex-col items-center gap-2">
      {premium && <MdWorkspacePremium className="absolute left-4 text-2xl" />}
      <img className="w-[100px] h-[100px] rounded-full" src={profile} />
      <p className="text-xs font-bold">ID: {"ABC999"}</p>
      <p className="text-sm">
        {"22 yrs"}, {"Male"}, {"Student"}, {"Gopalganj"}
      </p>
      <button
        type="button"
        className="px-4 py-1 text-sm font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100"
      >
        View Profile
      </button>
    </div>
  );
};

export default BiodataCard;
