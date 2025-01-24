import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const GotMarried = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axiosInstance
      .post("/addSuccessStory", {
        email: user.email,
        successStory: {
          selfBiodataID: data.selfBiodataID,
          partnerBiodataID: data.partnerBiodataID,
          coupleImageLink: data.coupleImageLink,
          successStoryReview: data.successStoryReview,
        },
      })
      .then(({ data }) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Good job!",
            text: "Success story added",
            icon: "success",
          });
          reset();
        }
      })
      .catch(() => toast.error("Something went wrong."));
  };
  return (
    <div className="w-full">
      <h1 className="heading space-y-4">Got Married</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-3xl mx-auto"
      >
        <div className="space-y-1 text-sm w-full">
          <label htmlFor="age" className="block">
            Self Biodata ID
          </label>
          <input
            placeholder="Self Biodata ID"
            type="text"
            {...register("selfBiodataID", { required: true })}
            className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
            id="selfBiodataID"
          />
        </div>
        <div className="space-y-1 text-sm w-full">
          <label htmlFor="age" className="block">
            Partner Biodata ID
          </label>
          <input
            placeholder="Partner Biodata ID"
            type="text"
            {...register("partnerBiodataID", { required: true })}
            className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
            id="partnerBiodataID"
          />
        </div>
        <div className="space-y-1 text-sm w-full">
          <label htmlFor="age" className="block">
            Couple Image Link
          </label>
          <input
            placeholder="Couple Image Link"
            type="text"
            {...register("coupleImageLink", { required: true })}
            className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
            id="coupleImageLink"
          />
        </div>
        <div className="space-y-1 text-sm w-full">
          <label htmlFor="age" className="block">
            Success Story Review
          </label>
          <textarea
            placeholder="Success Story Review"
            className="w-full px-4 py-3 rounded-md bg-black border text-gray-400"
            {...register("successStoryReview", { required: true })}
            rows={5}
          ></textarea>
        </div>
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default GotMarried;
