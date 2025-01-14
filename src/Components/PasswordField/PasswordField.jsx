import React from "react";

const PasswordField = ({ register, errors }) => {
  return (
    // <fieldset className="w-full space-y-1 dark:text-gray-800">
    //   <label htmlFor="price" className="block text-sm font-medium">
    //     Password
    //   </label>
    //   <div className="flex">
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       {...register("password", {
    //         required: true,
    //         pattern: {
    //           value: /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d)).{6,}$/,
    //           message:
    //             "Must contain at least one lower case, one upper case, one number, and length at least 6 characters.",
    //         },
    //       })}
    //       className="flex flex-1 py-2 px-4 border sm:text-sm focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
    //     />
    //   </div>
    //   {errors?.password?.message && (
    //     <p className="text-[#f00] text-justify mt-2 text-xs">
    //       {errors?.password?.message}
    //     </p>
    //   )}
    // </fieldset>
    <div className="space-y-1 text-sm">
      <label htmlFor="password" className="block">
        Password
      </label>
      <input
        type="password"
        name="password"
        {...register("password", {
          required: true,
          pattern: {
            value: /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d)).{6,}$/,
            message:
              "Must contain at least one lower case, one upper case, one number, and length at least 6 characters.",
          },
        })}
        placeholder="Password"
        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
      />
      {errors?.password?.message && (
        <p className="text-[#f00] text-justify mt-2 text-xs">
          {errors?.password?.message}
        </p>
      )}
    </div>
  );
};

export default PasswordField;
