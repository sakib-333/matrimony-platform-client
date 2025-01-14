import React from "react";
import BiodataCard from "../BiodataCard/BiodataCard";

const users = [1, 2, 3, 4, 5, 6];

const PremiumMembers = () => {
  return (
    <div>
      <h1 className="heading mb-4">Premium Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <BiodataCard key={user} premium={true} />
        ))}
      </div>
    </div>
  );
};

export default PremiumMembers;
