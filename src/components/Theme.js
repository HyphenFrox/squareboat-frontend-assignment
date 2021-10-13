import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

const Theme = (props) => {
  const { children } = props;

  const appTheme = createTheme({
    palette: {
      background: {
        default: "#EDF6FF",
      },
    },
    typography: {
      fontFamily: "'Open Sans', sans-serif",
    },
  });
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline></CssBaseline>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
