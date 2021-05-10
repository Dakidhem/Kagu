import React from "react";
import { Redirect } from "react-router-dom";

export const Profile = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/LogIn" />;
  }
  return (
    <div>
      <h1>DashBoard</h1>
    </div>
  );
};

export default Profile;
