import React, { forwardRef } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import GenericPage from "./GenericPage";

const Login = forwardRef((props, ref) => {
  const { ...otherProps } = props;
  return (
    <GenericPage ref={ref} {...otherProps}>
      <Header></Header>

      {/* login area */}
      <LoginForm
        sx={{
          margin: "1em auto 0 auto",
          width: { xs: "100%", sm: "50%" },
        }}
      ></LoginForm>
    </GenericPage>
  );
});

export default Login;
