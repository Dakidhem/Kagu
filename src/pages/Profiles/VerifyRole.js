import React from "react";
import { Redirect } from "react-router-dom";
export const VerifyRole = ({ authorized, Role }) => {
  if (authorized) {
    if (Role !== "") {
      if (Role === "ROLE_USER") {
        return <Redirect to="/UserDashboard" />;
      } else if (Role === "ROLE_ADMIN") {
        return <Redirect to="/AdminDashboard" />;
      } else if (Role === "ROLE_SUPER-ADMIN") {
        return <Redirect to="/SuperAdminDashboard" />;
      }
    }
  }
  return <Redirect to="/LogIn" />;
};
export default VerifyRole;
