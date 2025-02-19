import React, { useState } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import BiodataCard from "../../Components/BiodataCard/BiodataCard";

const BiodatasPage = () => {
  const axiosInstance = useAxios();
  const [selPage, setSelPage] = useState(0);
  const [query, setQuery] = useState({
    age: "0-100",
    bioType: "",
    permanentDivision: "",
    start: 0,
  });

  const { data = [], isLoading } = useQuery({
    queryKey: ["allBioDatas", query],
    queryFn: async () => {
      const result = await axiosInstance.post("/allBiodatas", query);
      return result.data;
    },
  });
  const { data: total = 0 } = useQuery({
    queryKey: ["totalBiodata"],
    queryFn: async () => {
      const result = await axiosInstance.get("/totalBiodatas");
      return Math.ceil(
        (result.data.girlsBiodata + result.data.boysBiodata) / 20
      );
    },
  });

  const totalPage = [];
  for (let i = 0; i < total; i++) {
    totalPage.push(i);
  }

  return (
    <div>
      <PageTitle title="Biodatas" />
      <div className="sm:flex gap-4 space-y-4 sm:space-y-0 my-4 pt-4">
        <div className="w-full sm:w-3/12 space-y-4">
          <h1 className="heading text-left">Filter Options</h1>
          <div>
            <select
              defaultValue={""}
              onChange={(e) => {
                setQuery((currQuery) => ({
                  ...currQuery,
                  bioType: e.target.value,
                  start: 0,
                }));
                setSelPage(0);
              }}
              className="bg-gray-800 text-white px-4 py-1 w-full"
            >
              <option value={""}>Filter By Type</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <select
              defaultValue={""}
              onChange={(e) => {
                setQuery((currQuery) => ({
                  ...currQuery,
                  age: e.target.value,
                  start: 0,
                }));
                setSelPage(0);
              }}
              className="bg-gray-800 text-white px-4 py-1 w-full"
            >
              <option value={""}>Filter By Age</option>
              <option value={"20-25"}>20-25</option>
              <option value={"26-31"}>26-31</option>
              <option value={"32-35"}>32-35</option>
              <option value={"36-+"}>36+</option>
            </select>
          </div>
          <div>
            <select
              defaultValue={""}
              onChange={(e) => {
                setQuery((currQuery) => ({
                  ...currQuery,
                  permanentDivision: e.target.value,
                  start: 0,
                }));
                setSelPage(0);
              }}
              className="bg-gray-800 text-white px-4 py-1 w-full"
            >
              <option value={""}>Filter By Division</option>
              <option value={"Dhaka"}>Dhaka</option>
              <option value={"Chattagram"}>Chattagram</option>
              <option value={"Rangpur"}>Rangpur</option>
              <option value={"Barisal"}>Barisal</option>
              <option value={"Khulna"}>Khulna</option>
              <option value={"Mymensingh"}>Mymensingh</option>
              <option value={"Sylhet"}>Sylhet</option>
            </select>
          </div>
        </div>
        <div className="w-full sm:w-9/12">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {!data.length && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <h1 className="heading">No data found</h1>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((user) => (
                  <BiodataCard key={user._id} user={user} />
                ))}
              </div>
              <div className="flex justify-center mt-4 gap-3">
                {totalPage.map((item) => (
                  <button
                    onClick={() => {
                      setSelPage(item);
                      setQuery((currQuery) => ({
                        ...currQuery,
                        start: item * 20,
                      }));
                    }}
                    className={`p-2 border ${
                      selPage === item && "border-violet-500 text-violet-500"
                    }`}
                    key={item}
                  >
                    {item + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiodatasPage;
