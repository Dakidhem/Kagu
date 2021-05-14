import styled from "styled-components";
import { Button, Container } from "../../GlobalStyles";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-router-dom";

export const Nav = styled.nav`
  background-color: transparent;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  padding: 1rem;
  top: 1rem;
  z-index: 999;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  font-weight: 700;
  @media screen and (max-width: 991px) {
    justify-content: center;
  }
  ${Container};
`;
export const NavLogo = styled(LinkR)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2em;
  display: flex;
  align-items: center;
`;
export const NavIcon = styled.img`
  margin-right: 0.5rem;
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
//-------------------NavMenu Styling----------------------------
export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  list-style: none;
  text-align: center;
  flex-direction: row;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    diplay: none;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  color: #848080;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    display: none;
  }
  &.active {
    border-bottom: 3px solid #848080;
  }
`;
//----------------------NavMenu Styling-------------------------
//----------------------NavIcons Styling-------------------------
export const NavIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  @media screen and (max-width: 991px) {
    display: none;
  }
  list-style: none;
`;
export const NavIconLink = styled(LinkS)`
  display: flex;
  align-items: center;
  color: #848080;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #848080;
  }
`;

//----------------------NavIcons Styling-------------------------
//----------------------Recherche bar Styling-------------------------
export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? "30rem" : "2rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: #848080;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #848080;
  }
`;

export const ButtonR = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: #848080; ;
`;
//----------------------NavIcons Styling-------------------------
