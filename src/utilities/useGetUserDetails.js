import { useEffect, useState } from "react";
import localforage from "localforage";

const useGetUserDetails = () => {
  const [userDeatils, setUserDetails] = useState(null);

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const userDetails = await localforage.getItem("userDetails");
        setUserDetails(userDetails);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserDetails();
  }, []);

  return userDeatils;
};

export default useGetUserDetails;
