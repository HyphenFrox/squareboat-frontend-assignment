import React from "react";
import { useHistory } from "react-router";
import { Typography } from "@mui/material";
import useCheckIfLoggedIn from "./useCheckIfLoggedIn";

const ProtectedRoute = (props) => {
  const { children } = props;
  const history = useHistory();

  const isLoggedIn = useCheckIfLoggedIn();

  if (isLoggedIn === null) {
    return <Typography>Checking if logged In</Typography>;
  }

  if (isLoggedIn === true) {
    const newChildren = React.cloneElement(children, { isLoggedIn });
    return <>{newChildren}</>;
  }

  if (isLoggedIn === false) {
    history.push("/login");
  }

  return null;
};

export default ProtectedRoute;
