import { Box } from "@mui/system";
import React, { forwardRef } from "react";

const LogOutArrow = forwardRef((props, ref) => {
  const { sx, children, ...otherProps } = props;

  return (
    <Box
      ref={ref}
      sx={{
        width: "0",
        height: "0",
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "10px solid white",
        position: "relative",
        cursor: "pointer",
        ...sx,
      }}
      {...otherProps}
    ></Box>
  );
});
export default LogOutArrow;
