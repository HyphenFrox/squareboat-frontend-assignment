import React, { forwardRef } from "react";
import { styled } from "@mui/system";

const StyledInput = styled("input")({});

const FieldInput = forwardRef((props, ref) => {
  const { isError, sx, ...otherProps } = props;
  return (
    <StyledInput
      ref={ref}
      sx={{
        outline: "none",
        marginTop: "0.3em",
        width: "100%",
        minHeight: "40px",
        backgroundColor: "#E8E8E833",
        border: `1px solid ${isError ? "#FF333380" : "#C6C6C6"}`,
        "&:focus": {
          border: "1px solid #43AFFF",
        },
        "&::placeholder": {
          color: "rgba(48, 63, 96, 0.4)",
        },
        borderRadius: "5px",
        paddingLeft: "1em",
        paddingRight: "1em",
        ...sx,
      }}
      {...otherProps}
    ></StyledInput>
  );
});
export default FieldInput;
