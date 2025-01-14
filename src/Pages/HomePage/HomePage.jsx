import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import PremiumMembers from "./PremiumMembers/PremiumMembers";
import HowItWorks from "./HowItWorks/HowItWorks";
import Banner from "./Banner/Banner";
import SuccessCounter from "./SuccessCounter/SuccessCounter";

const HomePage = () => {
  return (
    <div className="space-y-4 sm:space-y-8 md:space-y-12 lg:space-y-16">
      <PageTitle title={"Home"} />
      <Banner />
      <PremiumMembers />
      <HowItWorks />
      <SuccessCounter />
    </div>
  );
};

export default HomePage;
