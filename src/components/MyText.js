import React, { forwardRef } from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const StyledText = styled(Typography)({
  color: "#303F60",
});

const MyText = forwardRef((props, ref) => {
  const { children, sx, ...otherProps } = props;
  return (
    <StyledText ref={ref} sx={{ ...sx }} {...otherProps}>
      {children}
    </StyledText>
  );
});

export default MyText;
