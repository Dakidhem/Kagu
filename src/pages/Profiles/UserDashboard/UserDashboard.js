import React from "react";
import { Redirect } from "react-router-dom";
import {
  DashboardContainer,
  Dashboard,
  DashboardList,
  DashboardListItem,
  Listp,
} from "../AdminDashboard/AdminDashboardElements.js";
import { BiPackage, BiUserCircle } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
export const UserDashboard = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/LogIn" />;
  }
  return (
    <div>
      <DashboardContainer>
        <Dashboard>
          <DashboardList>
            <DashboardListItem to="/SuperAdminDashboard/MonProfile">
              <BiUserCircle size="32" />
              <Listp>Mon Profil </Listp>
            </DashboardListItem>
          </DashboardList>
        </Dashboard>
      </DashboardContainer>
    </div>
  );
};

export default UserDashboard;
