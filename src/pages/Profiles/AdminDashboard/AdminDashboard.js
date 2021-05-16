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

export const AdminDashboard = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/LogIn" />;
  }

  return (
    <DashboardContainer>
      <Dashboard>
        <DashboardList>
          <DashboardListItem to="/AdminDashboard/MonProfile">
            <BiUserCircle size="32" />
            <Listp>Mon Profil </Listp>
          </DashboardListItem>
          <DashboardListItem to="/AdminDashboard/GestionProduit">
            <BiPackage size="32" />
            <Listp>
              Gestion des <br />
              produits
            </Listp>
          </DashboardListItem>
        </DashboardList>
      </Dashboard>
    </DashboardContainer>
  );
};
export default AdminDashboard;
