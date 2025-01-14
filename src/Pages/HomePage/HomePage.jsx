import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Banner from "../../Components/Banner/Banner";
import PremiumMembers from "../../Components/PremiumMembers/PremiumMembers";

const HomePage = () => {
  return (
    <div className="space-y-4 sm:space-y-8 md:space-y-12 lg:space-y-16">
      <PageTitle title={"Home"} />
      <Banner />
      <PremiumMembers />
    </div>
  );
};

export default HomePage;
