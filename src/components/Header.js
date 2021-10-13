import React, { forwardRef } from "react";
import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LoginSignUpButton from "./LoginSignUpButton";
import UserHeader from "./UserHeader";

const Header = forwardRef((props, ref) => {
  const { isLoggedIn, children, sx, ...otherProps } = props;

  return (
    <Box
      sx={{
        marginLeft: { xs: "10px", sm: "30px" },
        marginRight: { xs: "10px", sm: "30px" },
        minHeight: "30px",
        borderBottom: "1px solid #4D618E",
        padding: "1em",
        display: "flex",
        alignItems: "center",
        gap: "2em",
        opacity: "1",
        sx,
      }}
      ref={ref}
      {...otherProps}
    >
      {/* title */}
      <Link component={RouterLink} to="/" underline="none" variant="body1">
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.2rem",
            color: "white",
            fontWeight: "bold",
            display: "inline",
          }}
        >
          My
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.2rem",
            color: "#43AFFF",
            fontWeight: "bold",
            display: "inline",
          }}
        >
          Jobs
        </Typography>
      </Link>
      {/* spacer */}
      <Box sx={{ flexGrow: "1" }}></Box>

      {/* if logged in show dashbaord header else show simple header */}
      {isLoggedIn ? (
        <>
          {/* posting job button */}
          <Link
            component={RouterLink}
            to="/post-job"
            underline="none"
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "white",
            }}
          >
            Post a Job
          </Link>

          {/* user icon */}
          <UserHeader></UserHeader>
        </>
      ) : (
        <LoginSignUpButton>
          {/* login sign up button */}
          <Typography variant="h4" sx={{ fontSize: "0.9rem", color: "white" }}>
            Login/Sign Up
          </Typography>
        </LoginSignUpButton>
      )}
    </Box>
  );
});

export default Header;
