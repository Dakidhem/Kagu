import React, { useState } from "react";
import { DashboardContainer, Dashboard, Listp } from "./MonProfileElements.js";
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
          <h1>Mon Profile</h1>
          <Listp>Nom : {state.nom}</Listp>
          <Listp>Prénom : {state.prenom}</Listp>
          <Listp>Email : {state.email}</Listp>
          <Listp>Numéro de téléphone : {state.numtel}</Listp>
          <Listp>Role : {state.role}</Listp>
        </Dashboard>
      </DashboardContainer>
    </div>
  );
};

export default MonProfile;
