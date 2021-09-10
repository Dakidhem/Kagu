import React from "react";
import { Redirect } from "react-router-dom";

import {
  DashboardContainer,
  Dashboard,
  DashboardList,
  DashboardListItem,
  Listp,
} from "../AdminDashboard/AdminDashboardElements";
import { BiPackage, BiUserCircle, BiUserPlus } from "react-icons/bi";
import { FaUserFriends, FaTruckLoading } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
              <BiUserPlus size="32" />
              <Listp>Ajouter Admin</Listp>
            </DashboardListItem>
            <DashboardListItem to="/SuperAdminDashboard/ListeAdmins">
              <FaUserFriends size="32" />
              <Listp>Listes des Admins </Listp>
            </DashboardListItem>
            <DashboardListItem to="/SuperAdminDashboard/GestionCommande">
              <FaTruckLoading size="32" />
              <Listp>Gestion des commandes </Listp>
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
export default SuperAdminDashboard;
