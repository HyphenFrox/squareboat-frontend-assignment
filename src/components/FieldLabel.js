import React, { forwardRef } from "react";
import { Typography } from "@mui/material";

const FieldLabel = forwardRef((props, ref) => {
  const { children, sx, ...otherProps } = props;
  return (
    <Typography
      ref={ref}
      variant="h4"
      sx={{
        display: "block",
        fontSize: "1rem",
        fontWeight: "500",
        color: "#303F60",
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
});
export default FieldLabel;
