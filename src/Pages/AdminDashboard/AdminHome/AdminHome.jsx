import React, { useContext } from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Provider/AuthContext";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const { data = {}, isLoading } = useQuery({
    queryKey: ["countBiodatas"],
    queryFn: async () => {
      const res = await axiosInstance.post("/countBiodatas", {
        email: user?.email,
      });
      return res.data;
    },
  });

  return (
    <div className="w-full">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={[
                  { name: "Total Biodata", value: data?.totalBios },
                  { name: "Male Biodata", value: data?.totalMaleBios },
                  { name: "Female Biodata", value: data?.totalFemaleBios },
                  { name: "Premium Biodata", value: data?.totalPremiumBios },
                  { name: "Total Revenue", value: data?.totalRevenue },
                ]}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
