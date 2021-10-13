import { Typography, Box, Link } from "@mui/material";
import React, { forwardRef, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import MyButton from "./MyButton";
import MainText from "./MyText";
import PaperBox from "./PaperBox";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PeopleIcon from "@mui/icons-material/People";
import FieldLabel from "./FieldLabel";
import FieldInput from "./FieldInput";
import { signUp } from "../utilities/apiFunctions";
import ErrorMessage from "./ErrorMessage";

const SignUpForm = forwardRef((props, ref) => {
  const { sx: passedSX, ...otherProps } = props;

  const history = useHistory();

  // input states
  const [userRole, setUserRole] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  //

  // error states
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  //

  const [errors, setErrors] = useState([]);

  const handleSignUpButton = async () => {
    let isError = false;

    if (!nameInput) {
      // removing this log generates error in validation.
      // dont know why. just leave it.
      console.log(nameInput);
      setIsNameError(true);
      isError = true;
    } else {
      setIsEmailError(false);
    }
    if (!emailInput) {
      setIsEmailError(true);
      isError = true;
    } else {
      setIsEmailError(false);
    }
    if (!passwordInput || !confirmPasswordInput) {
      setIsPasswordError(true);
      isError = true;
    } else {
      setIsPasswordError(false);
    }

    if (!isError) {
      await signUp({
        signUpData: {
          name: nameInput,
          email: emailInput,
          userRole,
          password: passwordInput,
          confirmPassword: confirmPasswordInput,
          skills: skillsInput,
        },
        history,
        setErrors,
      });
    }
  };

  return (
    <PaperBox
      sx={{ minHeight: "400px", padding: "1em", ...passedSX }}
      ref={ref}
      {...otherProps}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: "1.5rem", fontWeight: "500", color: "#303F60" }}
      >
        Sign Up
      </Typography>

      {/* user role section */}
      <MainText
        variant="h5"
        sx={{
          marginTop: "1em",
          fontSize: "1rem",
          fontWeight: "500",
          color: "#303F60",
        }}
      >
        I'm a*
      </MainText>

      <Box sx={{ marginTop: "0.5em", display: "flex", gap: "1em" }}>
        <MyButton
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5em",
          }}
          role={userRole === 0 ? "primary" : "secondary"}
          onClick={() => setUserRole(0)}
        >
          <PersonSearchIcon
            color={userRole === 0 ? "white" : "#303F60"}
            fontSize="small"
          ></PersonSearchIcon>
          <Typography variant="h4" sx={{ fontSize: "0.8rem" }}>
            Recruiter
          </Typography>
        </MyButton>
        <MyButton
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5em",
          }}
          role={userRole === 1 ? "primary" : "secondary"}
          onClick={() => setUserRole(1)}
        >
          <PeopleIcon
            color={userRole === 1 ? "white" : "#303F60"}
            fontSize="small"
          ></PeopleIcon>
          <Typography variant="h4" sx={{ fontSize: "0.8rem" }}>
            Recruiter
          </Typography>
        </MyButton>
      </Box>

      {/* full name */}
      <FieldLabel htmlFor="full-name-input" sx={{ marginTop: "0.75em" }}>
        Full Name*
      </FieldLabel>
      <FieldInput
        id="full-name-input"
        placeholder="Enter your full name"
        value={nameInput}
        isError={isNameError}
        onChange={(event) => setNameInput(event.target.value)}
      ></FieldInput>
      {isNameError && <ErrorMessage>This field is mandatory</ErrorMessage>}

      {/* email */}
      <FieldLabel htmlFor="email-input" sx={{ marginTop: "0.75em" }}>
        Email Address*
      </FieldLabel>
      <FieldInput
        id="email-input"
        placeholder="Enter your email address"
        value={emailInput}
        isError={isEmailError}
        onChange={(event) => setEmailInput(event.target.value)}
      ></FieldInput>
      {isNameError && <ErrorMessage>This field is mandatory</ErrorMessage>}

      {/* password box */}
      <Box
        sx={{
          display: "flex",
          marginTop: "0.75em",
          gap: "1em",
          "& > *": {
            flexBasis: "100%",
          },
        }}
      >
        {/* password */}
        <Box>
          <FieldLabel htmlFor="password-input">Create Password*</FieldLabel>
          <FieldInput
            id="password-input"
            type="password"
            placeholder="Enter your password"
            value={passwordInput}
            isError={isPasswordError}
            onChange={(event) => setPasswordInput(event.target.value)}
          ></FieldInput>
        </Box>

        {/* confirm password */}
        <Box>
          <FieldLabel htmlFor="confirm-password-input">
            Confirm Password*
          </FieldLabel>
          <FieldInput
            id="confirm-password-input"
            type="password"
            placeholder="Enter your password"
            value={confirmPasswordInput}
            isError={isPasswordError}
            onChange={(event) => setConfirmPasswordInput(event.target.value)}
          ></FieldInput>
        </Box>
      </Box>
      {isNameError && <ErrorMessage>This field is mandatory</ErrorMessage>}

      {/* skills */}
      <FieldLabel htmlFor="skills-input" sx={{ marginTop: "0.75em" }}>
        Skills*
      </FieldLabel>
      <FieldInput
        id="skills-input"
        placeholder="Enter comma seperated skills"
        value={skillsInput}
        onChange={(event) => setSkillsInput(event.target.value)}
      ></FieldInput>

      {/* sign up button */}
      <MyButton
        role="primary"
        onClick={handleSignUpButton}
        sx={{ display: "block", margin: "1em auto 0 auto" }}
      >
        <Typography variant="h5" sx={{ fontSize: "1rem" }}>
          Sign Up
        </Typography>
      </MyButton>

      {/* all the errors */}
      {errors.map((error, index) => (
        <ErrorMessage key={index}>
          {error.name ||
            error.email ||
            error.password ||
            error.confirmPassword ||
            error.userRole}
        </ErrorMessage>
      ))}

      {/* login message */}
      <Box sx={{ display: "flex", marginTop: "2em", justifyContent: "center" }}>
        <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            textAlign: "center",
            fontSize: "1rem",
          }}
        >
          Have an account?
        </Typography>
        <Link
          component={RouterLink}
          to="/login"
          underline="none"
          variant="body1"
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            color: "#43AFFF",
          }}
        >
          {" Login"}
        </Link>
      </Box>
    </PaperBox>
  );
});
export default SignUpForm;
