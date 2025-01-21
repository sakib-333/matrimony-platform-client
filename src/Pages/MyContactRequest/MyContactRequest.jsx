import React from "react";

const MyContactRequest = () => {
  return (
    <div className="w-full">
      <div>
        <div className="container p-2 mx-auto sm:p-4">
          <h2 className="heading">Your Contact Request</h2>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="paragraph border text-white">
                <tr className="text-left">
                  <th className="p-3 border">Biodata Id</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Mobile No</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Status</th>
                  <th className="p-3 border">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-20 dark:border-gray-300 ">
                  <td className="p-3 border">
                    <p>{"123"}</p>
                  </td>
                  <td className="p-3 border">
                    <p>{"AA BB"}</p>
                  </td>
                  <td className="p-3 border">
                    <p>{"01955111111"}</p>
                  </td>
                  <td className="p-3 border">
                    <p>{"aa@gmail.com"}</p>
                  </td>
                  <td className="p-3 border">
                    <p>{"Approve"}</p>
                  </td>
                  <td className="p-3 border">
                    <button className="btn-primary px-2 py-1">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <h1 className="heading h-full flex items-center justify-center">
          No data found
        </h1> */}
    </div>
  );
};

export default MyContactRequest;
