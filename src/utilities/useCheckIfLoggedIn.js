import localforage from "localforage";
import { useState, useEffect } from "react";

const useCheckIfLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    async function checkIfLoggedIn() {
      try {
        if ((await localforage.getItem("userDetails")) !== null) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log(error);
      }
    }

    checkIfLoggedIn();
  }, []);

  return isLoggedIn;
};

export default useCheckIfLoggedIn;
