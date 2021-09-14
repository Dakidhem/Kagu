import React from "react";
import {
  DashboardContainer,
  Dashboard,
  Listp,
  DashboardPhoto,
  Dashboardinfo,
  StyledTitle,
} from "./ContactUsElements.js";
import ImageContact from "../../assets/Images/ContactUs.png";
const ContactUs = () => {
  return (
    <div>
      <DashboardContainer>
        <Dashboard>
          <DashboardPhoto>
            <img src={ImageContact}></img>
          </DashboardPhoto>
          <Dashboardinfo>
            <StyledTitle>Contactez-nous par :</StyledTitle>
            <Listp>Email : equipe15@esi-sba.dz</Listp>
            <Listp>Téléphone : 0555555555</Listp>
            <Listp>Facebook : Equipe15</Listp>
          </Dashboardinfo>
        </Dashboard>
      </DashboardContainer>
    </div>
  );
};

export default ContactUs;
