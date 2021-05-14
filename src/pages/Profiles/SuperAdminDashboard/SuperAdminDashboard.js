import React from "react";
import { Redirect } from "react-router-dom";
export const SuperAdminDashboard = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/LogIn" />;
  }
  return (
    <div>
      <h1>Super-admin DashBoard</h1>
    </div>
  );
};
export default SuperAdminDashboard;
