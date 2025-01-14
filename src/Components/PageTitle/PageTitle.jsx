import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Matrimony | {title}</title>
    </Helmet>
  );
};

export default PageTitle;
