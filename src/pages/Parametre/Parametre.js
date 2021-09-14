import React from "react";
import { Redirect } from "react-router-dom";

import {
  DashboardContainer,
  Dashboard,
  DashboardList,
  DashboardListItem,
  Listp,
} from "../Profiles/AdminDashboard/AdminDashboardElements.js";
import { RiLogoutCircleRLine } from "react-icons/ri";

export const Parametre = ({ authorized, setAuthorized }) => {
  if (authorized === false) {
    alert("vous devez être connecté pour accéder à cette page");
    return <Redirect to="/LogIn" />;
  }
  const handleDisconnect = () => {
    localStorage.removeItem("state");
    localStorage.removeItem("nom");
    localStorage.removeItem("prenom");
    localStorage.removeItem("id");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("roles");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("numtel");
    sessionStorage.removeItem("state");
    sessionStorage.removeItem("nom");
    sessionStorage.removeItem("prenom");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("roles");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("numtel");
    setAuthorized(false);
    setTimeout(alert("vous avez été déconnecté avec succès"), 1500);
  };
  return (
    <div>
      <DashboardContainer>
        <Dashboard>
          <DashboardList>
            <DashboardListItem to="/" onClick={handleDisconnect}>
              <RiLogoutCircleRLine size="32" />
              <Listp>Déconnexion </Listp>
            </DashboardListItem>
          </DashboardList>
        </Dashboard>
      </DashboardContainer>
    </div>
  );
};
export default Parametre;
