import React, { forwardRef, useState } from "react";
import FieldInput from "./FieldInput";
import FieldLabel from "./FieldLabel";
import MyButton from "./MyButton";
import MyText from "./MyText";
import PaperBox from "./PaperBox";
import ErrorMessage from "./ErrorMessage";
import { getResetToken } from "../utilities/apiFunctions";
import { Typography } from "@mui/material";

const ForgotPasswordForm = forwardRef((props, ref) => {
  const { setResetPasswordToken, sx, ...otherProps } = props;

  const [emailAddressInput, setEmailAddressInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmitButton = async () => {
    await getResetToken({ emailAddressInput, setResetPasswordToken, setError });
  };

  return (
    <PaperBox ref={ref} sx={{ padding: "1em", ...sx }} {...otherProps}>
      <MyText sx={{ fontSize: "1.5rem", fontWeight: "500" }}>
        Forgot your password?
      </MyText>
      <MyText sx={{ marginTop: "1em", fontSize: "1rem" }}>
        Enter the email associated with your account and we’ll send you
        instructions to reset your password.
      </MyText>

      {/* input lable */}
      <FieldLabel sx={{ marginTop: "1em" }}>Email address</FieldLabel>

      {/* input */}
      <FieldInput
        value={emailAddressInput}
        isError={Boolean(error)}
        placeholder="Enter your email"
        onChange={(event) => setEmailAddressInput(event.target.value)}
      ></FieldInput>

      {/* error */}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* submit button */}
      <MyButton
        role="primary"
        sx={{
          display: "block",
          padding: "1em 3em",
          margin: "1em auto 0 auto",
        }}
        onClick={handleSubmitButton}
      >
        <Typography sx={{ fontSize: "1rem" }}>Submit</Typography>
      </MyButton>
    </PaperBox>
  );
});
export default ForgotPasswordForm;
