import React, { forwardRef } from "react";
import Header from "../components/Header";
import GenericPage from "./GenericPage";

const Dashboard = forwardRef((props, ref) => {
  const { ...otherProps } = props;
  return (
    <GenericPage ref={ref} {...otherProps}>
      <Header></Header>
    </GenericPage>
  );
});

export default Dashboard;
