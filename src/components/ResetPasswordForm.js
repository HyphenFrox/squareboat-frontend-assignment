import { Typography } from "@mui/material";
import React, { forwardRef, useState } from "react";
import { resetPassword } from "../utilities/apiFunctions";
import FieldInput from "./FieldInput";
import FieldLabel from "./FieldLabel";
import MyButton from "./MyButton";
import MyText from "./MyText";
import { useHistory } from "react-router";
import PaperBox from "./PaperBox";
import ErrorMessage from "./ErrorMessage";

const ResetPasswordForm = forwardRef((props, ref) => {
  const { resetPasswordToken, sx, ...otherProps } = props;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handlePasswordReset = async () => {
    await resetPassword({
      password,
      confirmPassword,
      resetPasswordToken,
      setError,
      history,
    });
  };

  return (
    <PaperBox ref={ref} sx={{ padding: "1em", ...sx }} {...otherProps}>
      <MyText sx={{ fontSize: "1.5rem", fontWeight: "500" }}>
        Reset your password
      </MyText>
      <MyText sx={{ marginTop: "1em" }}>Enter your new password below.</MyText>

      {/* new password */}
      <FieldLabel sx={{ marginTop: "2em" }}>New password:</FieldLabel>
      <FieldInput
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      ></FieldInput>

      {/*confirm new password */}
      <FieldLabel sx={{ marginTop: "1em" }}>Confirm new password</FieldLabel>
      <FieldInput
        placeholder="Enter your password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      ></FieldInput>

      {/* errror message */}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* reset button */}
      <MyButton
        role="primary"
        onClick={handlePasswordReset}
        sx={{
          display: "block",
          margin: "1em auto 0 auto",
          padding: "1em 3em",
        }}
      >
        <Typography sx={{ fontSize: "1rem" }}>Reset</Typography>
      </MyButton>
    </PaperBox>
  );
});
export default ResetPasswordForm;
