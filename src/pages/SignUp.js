import React, { forwardRef } from "react";

import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import GenericPage from "./GenericPage";

const SignUp = forwardRef((props, ref) => {
  const { sx, ...otherProps } = props;
  return (
    <GenericPage ref={ref} {...otherProps}>
      <Header></Header>
      {/* sign up area */}
      <SignUpForm
        sx={{
          margin: "1em auto 0 auto",
          width: { xs: "100%", sm: "50%" },
          ...sx,
        }}
      ></SignUpForm>
    </GenericPage>
  );
});
export default SignUp;
