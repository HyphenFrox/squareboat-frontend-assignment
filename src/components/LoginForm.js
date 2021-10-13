import React, { forwardRef, useState } from "react";
import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { login } from "../utilities/apiFunctions";
import MyButton from "./MyButton";
import FieldLabel from "./FieldLabel";
import FieldInput from "./FieldInput";
import ErrorMessage from "./ErrorMessage";

const LoginForm = forwardRef((props, ref) => {
  const { sx, ...otherPops } = props;
  const history = useHistory();

  // input states
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoginError, setIsLoginError] = useState(false);

  //   input handle functions
  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value);
  };
  const handlePasswordInputChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleLoginButton = async () => {
    await login({
      loginData: { email: emailInput, password: passwordInput },
      history,
      setIsLoginError,
    });
  };
  //

  return (
    <Box
      sx={{
        minHeight: "200px",
        backgroundColor: "white",
        boxShadow: "0px 30px 36px #557DA526",
        borderRadius: "20px",
        padding: "2em",
        ...sx,
      }}
      ref={ref}
      {...otherPops}
    >
      {/* login heading */}
      <Typography
        variant="h3"
        sx={{
          fontSize: "1.5rem",
          fontWeight: "500",
          color: "#303F60",
        }}
      >
        Login
      </Typography>

      {/* email heading */}
      <FieldLabel htmlFor="email-input" sx={{ marginTop: "1em" }}>
        Email address
      </FieldLabel>

      {/* email input */}
      <FieldInput
        id="email-input"
        type="email"
        placeholder="Enter your email"
        value={emailInput}
        isError={isLoginError}
        onChange={handleEmailInputChange}
      ></FieldInput>

      {/* password heading */}
      <Box
        sx={{
          marginTop: "0.75em",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FieldLabel htmlFor="password-input" sx={{ marginTop: "0" }}>
          Password
        </FieldLabel>
        <Link
          component={RouterLink}
          to="/forgot-password"
          underline="none"
          variant="h4"
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            color: "#43AFFF",
          }}
        >
          Forgot your password?
        </Link>
      </Box>

      {/* password input */}
      <FieldInput
        id="password-input"
        type="password"
        placeholder="Enter your password"
        value={passwordInput}
        isError={isLoginError}
        onChange={handlePasswordInputChange}
      ></FieldInput>

      {/* login erorr message */}
      {isLoginError && <ErrorMessage>Incorrect email or password</ErrorMessage>}

      {/* login button */}
      <MyButton
        role="primary"
        onClick={handleLoginButton}
        sx={{ display: "block", margin: "1em auto 0 auto" }}
      >
        <Typography variant="h5" sx={{ fontSize: "1rem" }}>
          Login
        </Typography>
      </MyButton>

      {}

      {/* create account text */}
      <Box sx={{ display: "flex", marginTop: "2em", justifyContent: "center" }}>
        <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            textAlign: "center",
            fontSize: "1rem",
          }}
        >
          New to MyJobs?
        </Typography>
        <Link
          component={RouterLink}
          to="/signup"
          underline="none"
          variant="body1"
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            color: "#43AFFF",
          }}
        >
          {" Create an account"}
        </Link>
      </Box>
    </Box>
  );
});

export default LoginForm;
