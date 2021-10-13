import React, { forwardRef, useState } from "react";
import GenericPage from "./GenericPage";
import Header from "../components/Header";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import ResetPasswordForm from "../components/ResetPasswordForm";

const ForgotPassword = forwardRef((props, ref) => {
  const { sx, ...otherProps } = props;
  const [resetPasswordToken, setResetPasswordToken] = useState("");

  return (
    <GenericPage ref={ref} sx={{ ...sx }} {...otherProps}>
      {/* header */}
      <Header></Header>

      {/* the form */}
      {resetPasswordToken ? (
        <ResetPasswordForm
          resetPasswordToken={resetPasswordToken}
          sx={{
            margin: "1em auto 0 auto",
            width: { xs: "100%", sm: "50%" },
          }}
        ></ResetPasswordForm>
      ) : !resetPasswordToken ? (
        <ForgotPasswordForm
          setResetPasswordToken={setResetPasswordToken}
          sx={{
            margin: "1em auto 0 auto",
            width: { xs: "100%", sm: "50%" },
          }}
        ></ForgotPasswordForm>
      ) : null}
    </GenericPage>
  );
});
export default ForgotPassword;
