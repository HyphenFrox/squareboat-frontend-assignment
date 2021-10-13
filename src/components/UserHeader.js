import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import localforage from "localforage";
import React, { forwardRef, useState } from "react";
import useGetUserDetails from "../utilities/useGetUserDetails";
import LogOutArrow from "./LogOutArrow";
import PaperBox from "./PaperBox";

const UserHeader = forwardRef((props, ref) => {
  const { sx, ...otherProps } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const userDetails = useGetUserDetails();

  const handleLogOutButton = async () => {
    try {
      await localforage.removeItem("userDetails");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //   user box
    <Box
      ref={ref}
      sx={{
        display: "flex",
        gap: "0.5em",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* user icon */}
      <Box
        sx={{
          position: "relative",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#D9EFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...sx,
        }}
        {...otherProps}
      >
        <Typography>
          {userDetails !== null ? `${userDetails.name.charAt(0)}` : ""}
        </Typography>
      </Box>

      {/* arrow icon */}
      <LogOutArrow
        onClick={() => setIsDrawerOpen((state) => !state)}
      ></LogOutArrow>
      {isDrawerOpen && (
        <PaperBox
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: "-30px",
            width: "100px",
            borderRadius: "10px",
            padding: "1em",
          }}
        >
          <Button
            disableRipple
            sx={{ display: "block", padding: "0" }}
            onClick={handleLogOutButton}
          >
            <Typography
              variant="h4"
              sx={{ color: "black", fontSize: "0.8rem" }}
            >
              Log Out
            </Typography>
          </Button>
        </PaperBox>
      )}
    </Box>
  );
});
export default UserHeader;
