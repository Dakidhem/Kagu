import React, { useState } from "react";
import {
  DashboardContainer,
  Dashboard,
  Listp,
  DashboardPhoto,
  Dashboardinfo,
  StyledTitle,
} from "./MonProfileElements.js";
import ImageProfile from "../../../assets/Images/images.png";
export const MonProfile = () => {
  const [state, setState] = useState({
    nom: localStorage.getItem("nom"),
    prenom: localStorage.getItem("prenom"),
    email: localStorage.getItem("email"),
    numtel: localStorage.getItem("numtel"),
    role: localStorage.getItem("roles"),
  });
  return (
    <div>
      <DashboardContainer>
        <Dashboard>
          <DashboardPhoto>
            <img src={ImageProfile}></img>
          </DashboardPhoto>
          <Dashboardinfo>
            <StyledTitle>Mon Profile</StyledTitle>
            <Listp>Nom : {state.nom}</Listp>
            <Listp>Prénom : {state.prenom}</Listp>
            <Listp>Email : {state.email}</Listp>
            <Listp>Numéro de téléphone : {state.numtel}</Listp>
            <Listp>Role : {state.role}</Listp>
          </Dashboardinfo>
        </Dashboard>
      </DashboardContainer>
    </div>
  );
};

export default MonProfile;
