import React, { forwardRef } from "react";
import { Box } from "@mui/system";

const GenericPage = forwardRef((props, ref) => {
  const { isLoggedIn, children, sx, ...otherProps } = props;

  let newChildren;
  if (isLoggedIn) {
    newChildren = React.cloneElement(children, { isLoggedIn });
  }

  return (
    <Box
      ref={ref}
      sx={{
        height: "100%",
        padding: "1em",
        position: "relative",
        "&:after": {
          content: "''",
          position: "absolute",
          zIndex: "10",
          top: "0",
          right: "0",
          bottom: "50%",
          left: "0",
          backgroundImage: "linear-gradient(253deg, #303F60, #1A253C)",
        },
        "& > *": {
          position: "relative",
          zIndex: "20",
        },
        ...sx,
      }}
      {...otherProps}
    >
      {isLoggedIn ? newChildren : children}
    </Box>
  );
});
export default GenericPage;
