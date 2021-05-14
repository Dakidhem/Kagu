import React from "react";
import { Redirect } from "react-router-dom";

export const UserDashboard = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/LogIn" />;
  }
  return (
    <div>
      <h1>User DashBoard</h1>
    </div>
  );
};

export default UserDashboard;
