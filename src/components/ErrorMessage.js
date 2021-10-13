import React, { forwardRef } from "react";
import { Typography } from "@mui/material";

const ErrorMessage = forwardRef((props, ref) => {
  const { children, sx, ...otherProps } = props;
  return (
    <Typography
      ref={ref}
      variant="h6"
      sx={{ color: "#FF0000", fontSize: "0.8rem", textAlign: "right", ...sx }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
});
export default ErrorMessage;
