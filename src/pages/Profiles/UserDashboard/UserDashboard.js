import React from "react";
import { Redirect } from "react-router-dom";
import {
  DashboardContainer,
  Dashboard,
  DashboardList,
  DashboardListItem,
  Listp,
} from "../AdminDashboard/AdminDashboardElements.js";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const UserDashboard = ({ authorized }) => {
  if (authorized === false) {
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
            <DashboardListItem to="/Panier">
              <AiOutlineShoppingCart size="32" />
              <Listp>Mon Panier</Listp>
            </DashboardListItem>
          </DashboardList>
        </Dashboard>
      </DashboardContainer>
    </div>
  );
};

export default UserDashboard;
