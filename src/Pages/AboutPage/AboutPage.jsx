import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";

const AboutPage = () => {
  return (
    <div>
      <PageTitle title={"About"} />
      <button
        type="button"
        className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100"
      >
        Basic
      </button>
    </div>
  );
};

export default AboutPage;
