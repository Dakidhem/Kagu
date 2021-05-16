import React from "react";
import { Redirect } from "react-router-dom";

import {
  DashboardContainer,
  Dashboard,
  DashboardList,
  DashboardListItem,
  Listp,
} from "../AdminDashboard/AdminDashboardElements";
import { BiPackage, BiUserCircle } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";

export const SuperAdminDashboard = ({ authorized }) => {
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
            <DashboardListItem to="/SuperAdminDashboard/GestionProduit">
              <BiPackage size="32" />
              <Listp>
                Gestion des <br />
                produits
              </Listp>
            </DashboardListItem>
            <DashboardListItem to="/SuperAdminDashboard/AjouterAdmin">
              <FaUserFriends size="32" />
              <Listp>Ajouter Admin</Listp>
            </DashboardListItem>
          </DashboardList>
        </Dashboard>
      </DashboardContainer>
    </div>
  );
};
export default SuperAdminDashboard;
