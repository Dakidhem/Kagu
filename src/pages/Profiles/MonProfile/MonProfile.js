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
  let data;
  if (sessionStorage.getItem("state")) {
    data = {
      nom: sessionStorage.getItem("nom"),
      prenom: sessionStorage.getItem("prenom"),
      email: sessionStorage.getItem("email"),
      numtel: sessionStorage.getItem("numtel"),
      role: sessionStorage.getItem("roles"),
    };
  } else {
    data = {
      nom: localStorage.getItem("nom"),
      prenom: localStorage.getItem("prenom"),
      email: localStorage.getItem("email"),
      numtel: localStorage.getItem("numtel"),
      role: localStorage.getItem("roles"),
    };
  }
  const [state, setState] = useState(data);

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
