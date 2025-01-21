import React, { useContext } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/AuthContext";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const divisions = [
  "Dhaka",
  "Chattagram",
  "Rangpur",
  "Barisal",
  "Khulna",
  "Mymensingh",
  "Sylhet",
];

const MyBiodata = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const { register, handleSubmit } = useForm();
  const { isLoading, data: myBiodata = null } = useQuery({
    queryKey: ["myBiodata"],
    queryFn: async () => {
      const res = await axiosInstance.post("/myBiodata", {
        email: user?.email,
        action: "get",
      });
      return res.data;
    },
  });
  const height = myBiodata?.height?.split(" ");
  const expHeight = myBiodata?.expectedPartnerHeight?.split(" ");

  const onSubmit = (data) => {
    const height = data.heightFeet + " " + data.heightInch;
    delete data.heightFeet;
    delete data.heightInch;
    data.height = height;

    const expectedPartnerHeight = data.expHeightFeet + " " + data.expHeightInch;
    delete data.expHeightFeet;
    delete data.expHeightInch;
    data.expectedPartnerHeight = expectedPartnerHeight;

    data.age = Number(data.age);
    data.expectedPartnerAge = Number(data.expectedPartnerAge);
    data.userType = user.userType;

    const action = myBiodata ? "update" : "add";

    axiosInstance
      .post("/myBiodata", { email: user?.email, action, data })
      .then(({ data }) => {
        if (data.acknowledged) {
          Swal.fire({
            title: action === "update" ? "Updated" : "Added",
            text: `Your biodata has ${
              action === "update" ? "updated" : "added"
            } successfully.`,
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full">
      <PageTitle title={"My Biodata"} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <form
          className="mt-4 flex flex-col items-center p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="heading">{myBiodata ? "Edit" : "Add"} Your Biodata</h1>
          <div className="w-full mx-auto mt-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Biodata type start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="bioType" className="block">
                Biodata Type
              </label>
              <select
                defaultValue={myBiodata?.bioType ? myBiodata.bioType : ""}
                {...register("bioType", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="bioType"
              >
                <option disabled value="">
                  Select biodata type
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {/* Biodata type end */}
            {/* Name start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="name" className="block">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                defaultValue={myBiodata?.name ? myBiodata.name : ""}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="name"
              />
            </div>
            {/* Name type end */}
            {/* Profile image link start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="profileImageLink" className="block">
                Profile Image Link
              </label>
              <input
                type="text"
                {...register("profileImg", { required: true })}
                defaultValue={myBiodata?.profileImg ? myBiodata.profileImg : ""}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="profileImageLink"
              />
            </div>
            {/* Profile image link end */}
            {/* Date of birth start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="dob" className="block">
                Date of birth
              </label>
              <input
                type="date"
                {...register("dob", { required: true })}
                defaultValue={myBiodata?.dob ? myBiodata.dob : ""}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="dob"
              />
            </div>
            {/* Date of birth end */}
            {/* Height start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="height" className="block">
                Height
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  defaultValue={height ? height[0] : ""}
                  {...register("heightFeet", { required: true })}
                  className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                >
                  <option disabled value="">
                    Select feet
                  </option>
                  <option value="4ft">4 feet</option>
                  <option value="5ft">5 feet</option>
                  <option value="6ft">6 feet</option>
                </select>
                <select
                  defaultValue={height ? height[1] : ""}
                  {...register("heightInch", { required: true })}
                  className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                >
                  <option disabled value="">
                    Select inch
                  </option>
                  {nums.map((val) => (
                    <option key={val} value={`${val}inch`}>
                      {val} inch
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Height end */}
            {/* Weight start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="weight" className="block">
                Weight
              </label>
              <select
                defaultValue={myBiodata?.weight ? myBiodata.weight : ""}
                {...register("weight", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="weight"
              >
                <option disabled value="">
                  Select weight
                </option>
                {nums.map((weight) => (
                  <option key={weight} value={`${weight + 50}kg`}>
                    {weight + 50}kg
                  </option>
                ))}
              </select>
            </div>
            {/* Weight end */}
            {/* Age start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="age" className="block">
                Your age
              </label>
              <input
                type="text"
                {...register("age", { required: true })}
                defaultValue={myBiodata?.age ? myBiodata.age : ""}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="age"
              />
            </div>
            {/* Age end */}
            {/* Occupation start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="occupation" className="block">
                Occupation
              </label>
              <select
                defaultValue={myBiodata?.occupation ? myBiodata.occupation : ""}
                {...register("occupation", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="occupation"
              >
                <option disabled value="">
                  Select occupation
                </option>
                <option value="Engineer, IT">Engineer, IT</option>
                <option value="Engineer, Non-IT">Engineer, Non-IT</option>
                <option value="Teacher">Teacher</option>
                <option value="Businessman">Businessman</option>
                <option value="Salesman">Salesman</option>
                <option value="Employee">Employee</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {/* Occupation end */}
            {/* Race start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="race" className="block">
                Race &#10629;Skin color&#10630;
              </label>
              <select
                defaultValue={myBiodata?.race ? myBiodata.race : ""}
                {...register("race", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="race"
              >
                <option disabled value="">
                  Select race
                </option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Pale white">Pale white</option>
                <option value="Beige">Beige</option>
              </select>
            </div>
            {/* Race end */}
            {/* Father's name start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="fatherName" className="block">
                Your Father Name
              </label>
              <input
                type="text"
                {...register("fatherName", { required: true })}
                defaultValue={myBiodata?.fatherName ? myBiodata.fatherName : ""}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="fatherName"
              />
            </div>
            {/* Father's name end */}
            {/* Mother's name start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="mothersName" className="block">
                Your Mother Name
              </label>
              <input
                type="text"
                {...register("mothersName", { required: true })}
                defaultValue={
                  myBiodata?.mothersName ? myBiodata.mothersName : ""
                }
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="mothersName"
              />
            </div>
            {/* Mother's name end */}
            {/* Permanent Division name start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="permanentDivision" className="block">
                Permanent Division name
              </label>
              <select
                defaultValue={
                  myBiodata?.permanentDivision
                    ? myBiodata.permanentDivision
                    : ""
                }
                {...register("permanentDivision", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="permanentDivision"
              >
                <option disabled value="">
                  Select Permanent Division
                </option>
                {divisions.map((div) => (
                  <option key={div} value={div}>
                    {div}
                  </option>
                ))}
              </select>
            </div>
            {/* Permanent Division name end */}
            {/* Present Division name start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="presentDivision" className="block">
                Present Division name
              </label>
              <select
                defaultValue={
                  myBiodata?.presentDivision ? myBiodata.presentDivision : ""
                }
                {...register("presentDivision", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="presentDivision"
              >
                <option disabled value="">
                  Select Present Division
                </option>
                {divisions.map((div) => (
                  <option key={div} value={div}>
                    {div}
                  </option>
                ))}
              </select>
            </div>
            {/* Present Division name end */}
            {/* Expected Partner Age start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="expectedPartnerAge" className="block">
                Expected Partner Age
              </label>
              <input
                type="text"
                {...register("expectedPartnerAge", { required: true })}
                defaultValue={
                  myBiodata?.expectedPartnerAge
                    ? myBiodata.expectedPartnerAge
                    : ""
                }
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="expectedPartnerAge"
              />
            </div>
            {/* Expected Partner Age end */}
            {/* Expected Partner Height start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="height" className="block">
                Expected Partner Height
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  defaultValue={expHeight ? expHeight[0] : ""}
                  {...register("expHeightFeet", { required: true })}
                  className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                >
                  <option disabled value="">
                    Select feet
                  </option>
                  <option value="4ft">4 feet</option>
                  <option value="5ft">5 feet</option>
                  <option value="6ft">6 feet</option>
                </select>
                <select
                  defaultValue={expHeight ? expHeight[1] : ""}
                  {...register("expHeightInch", { required: true })}
                  className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                >
                  <option disabled value="">
                    Select inch
                  </option>
                  {nums.map((val) => (
                    <option key={val} value={`${val}inch`}>
                      {val} inch
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Expected Partner Height end */}
            {/* Expected Partner Weight start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="expectedPartnerWeight" className="block">
                Expected Partner Weight
              </label>
              <select
                defaultValue={
                  myBiodata?.expectedPartnerWeight
                    ? myBiodata.expectedPartnerWeight
                    : ""
                }
                {...register("expectedPartnerWeight", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="expectedPartnerWeight"
              >
                <option disabled value="">
                  Select weight
                </option>
                {nums.map((weight) => (
                  <option key={weight} value={`${weight + 50}kg`}>
                    {weight + 50}kg
                  </option>
                ))}
              </select>
            </div>
            {/* Expected Partner Weight end */}
            {/* Contact Email start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="contactEmail" className="block">
                Contact Email
              </label>
              <input
                type="email"
                {...register("contactEmail", { required: true })}
                defaultValue={
                  myBiodata?.contactEmail ? myBiodata.contactEmail : user?.email
                }
                readOnly
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="contactEmail"
              />
            </div>
            {/* Contact Email end */}
            {/* Mobile Number start */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="mobileNumber" className="block">
                Mobile Number
              </label>
              <input
                type="text"
                {...register("mobileNumber", { required: true })}
                defaultValue={
                  myBiodata?.mobileNumber ? myBiodata.mobileNumber : ""
                }
                className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
                id="mobileNumber"
              />
            </div>
            {/* Mobile Number end */}
          </div>
          <button className="btn-primary px-4 py-3 max-w-md mx-auto mt-8">
            Save And Publish Now
          </button>
        </form>
      )}
    </div>
  );
};

export default MyBiodata;
