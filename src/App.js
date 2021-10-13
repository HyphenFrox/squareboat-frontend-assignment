import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import localforage from "localforage";
import "./App.scss";
import ProtectedRoute from "./utilities/ProtectedRoute";
import Theme from "./components/Theme";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Box } from "@mui/system";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

localforage.config({
  name: "squareboat-frontend-assignment",
});

const App = () => {
  return (
    <Theme>
      <Router>
        {/* the app begins here */}
        <Box sx={{ height: "100%" }}>
          <Switch>
            <Route exact path="/">
              <ProtectedRoute>
                <Dashboard></Dashboard>
              </ProtectedRoute>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPassword></ForgotPassword>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </Box>
      </Router>
    </Theme>
  );
};

export default App;
