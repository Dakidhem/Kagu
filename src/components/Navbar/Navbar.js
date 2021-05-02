import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  BtnSignin,
  BtnLogin,
  Buttons,
} from "./NavbarElement";
import Logo from "../../assets/g853.png";
export const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon src={Logo} />
        </NavLogo>
        <Buttons>
          <BtnSignin to="/Signin">Sign In</BtnSignin>
          <BtnLogin to="/Login">Log In</BtnLogin>
        </Buttons>
      </NavbarContainer>
    </Nav>
  );
};
export default Navbar;
