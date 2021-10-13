import axios from "axios";
import localforage from "localforage";

const login = async ({ loginData, history, setIsLoginError }) => {
  try {
    const response = await axios.post(
      "https://jobs-api.squareboat.info/api/v1/auth/login",
      JSON.stringify(loginData),
      { headers: { "Content-Type": "application/json" } }
    );
    setIsLoginError(false);
    localforage.setItem("userDetails", response.data.data);
    history.push("/");
  } catch (error) {
    console.log(error);
    console.log(error.response);
    setIsLoginError(true);
  }
};

const signUp = async ({ signUpData, history, setErrors }) => {
  try {
    await axios.post(
      "https://jobs-api.squareboat.info/api/v1/auth/register",
      JSON.stringify(signUpData),
      { headers: { "Content-Type": "application/json" } }
    );
    history.push("/login");
  } catch (error) {
    console.log(error);
    console.log(error.response);
    setErrors(error.response.data.errors);
  }
};

const getResetToken = async ({
  emailAddressInput,
  setResetPasswordToken,
  setError,
}) => {
  try {
    const response = await axios.get(
      `https://jobs-api.squareboat.info/api/v1//auth/resetpassword?email=${emailAddressInput}`
    );
    setResetPasswordToken(response.data.data.token);
  } catch (error) {
    console.log(error);
    console.log(error.response);
    setError(error.response.data.message);
  }
};

const resetPassword = async ({
  password,
  confirmPassword,
  resetPasswordToken: token,
  setError,
  history,
}) => {
  try {
    // verify first
    await axios.get(
      `https://jobs-api.squareboat.info/api/v1//auth/resetpassword/${token}`
    );

    // then reset
    try {
      await axios.post(
        "https://jobs-api.squareboat.info/api/v1//auth/resetpassword",
        JSON.stringify({ password, confirmPassword, token }),
        { headers: { "Content-Type": "application/json" } }
      );
      await localforage.removeItem("userDetails");
      history.push("/login");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      setError(error.response.data.message);
    }
  } catch (error) {
    console.log(error);
    console.log(error.response);
    history.push("/reset-password");
  }
};
export { login, signUp, getResetToken, resetPassword };
