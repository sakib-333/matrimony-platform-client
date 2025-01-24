import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthContext";
import useAxios from "../../../Hooks/useAxios";

const useMakePremium = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const handleMakePremium = (email, refetch) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be premium.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .post("/makeUserPremium", { email: user.email, approvedEmail: email })
          .then(({ data }) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Success!",
                text: "User is premium now",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };
  return handleMakePremium;
};

export default useMakePremium;
