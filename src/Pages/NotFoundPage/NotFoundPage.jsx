import React from "react";
import notFoundBanner from "../Assets/404-error.svg";
import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";

const NotFoundPage = () => {
  return (
    <>
    <PageTitle title="Not Found"/>
    <div className="w-full mx-auto md:w-9/12 flex flex-col justify-center items-center">
      <img className="w-full max-h-[400px]" src={notFoundBanner} alt="image" />
      <Link className="px-8 py-3 w-fit btn-primary">
        Go Home
      </Link>
    </div>
    </>
  );
};

export default NotFoundPage;
