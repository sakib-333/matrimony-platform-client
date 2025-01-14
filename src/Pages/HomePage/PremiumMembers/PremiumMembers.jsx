import React, { useState } from "react";
import BiodataCard from "../../../Components/BiodataCard/BiodataCard";

const users = [1, 2, 3, 4, 5, 6];

const PremiumMembers = () => {
  const [sortType, setSortType] = useState("ascending");

  return (
    <div>
      <h1 className="heading mb-4">Premium Members</h1>
      <select
        onChange={(e) => setSortType(e.target.value)}
        defaultValue={""}
        className="my-4 border p-2 border-black"
      >
        <option disabled value={""}>
          Sort by
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <BiodataCard key={user} premium={true} />
        ))}
      </div>
    </div>
  );
};

export default PremiumMembers;
