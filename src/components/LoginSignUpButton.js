import MyButton from "./MyButton";
import React, { forwardRef } from "react";

const LoginSignUpButton = forwardRef((props, ref) => {
  const { children, sx, ...otherProps } = props;
  return (
    <MyButton
      ref={ref}
      sx={{ backgroundColor: "#43AFFF33", border: "1px solid #43AFFF", ...sx }}
      {...otherProps}
    >
      {children}
    </MyButton>
  );
});
export default LoginSignUpButton;
