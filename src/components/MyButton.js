import { styled } from "@mui/system";
import React, { forwardRef } from "react";

const StyledButton = styled("button")({});

const MyButton = forwardRef((props, ref) => {
  const { role, children, sx, ...otherProps } = props;
  return (
    <StyledButton
      ref={ref}
      sx={{
        display: "inline-block",
        padding: "0.5em 1.5em 0.5em 1.5em",
        borderRadius: "5px",
        cursor: "pointer",
        border: `${role === "primary" ? "none" : "1px solid #C6C6C6"}`,
        backgroundColor: `${role === "primary" ? "#43AFFF" : "#E8E8E833"}`,
        color: `${role === "primary" ? "white" : "#303F60"}`,
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
});
export default MyButton;
