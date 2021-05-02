import styled from "styled-components";
import { Button, Container } from "../../GlobalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  position: sticky;
  z-index: 999;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2em;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  height: 60px;
`;
export const BtnLogin = styled(Button)`
  color: orange;
`;
export const BtnSignin = styled(Button)`
  color: white;
  background-color: orange;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
