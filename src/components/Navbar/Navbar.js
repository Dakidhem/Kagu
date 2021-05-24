import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavIcon,
  NavIcons,
  Form,
  ButtonR,
  Input,
  NavIconLink,
} from "./NavbarElement";
import { BiUser, BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../assets/Images/Logo.png";
import { useHistory } from "react-router";
export const Navbar = ({ setAuthorized }) => {
  const [Products, setProducts] = useState([]);
  const [UpdatedProducts, setUpdatedProducts] = useState([]);
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(true);
  const formRef = useRef();
  const inputFocus = useRef();
  const history = useHistory();
  useEffect(() => {
    axios
      .get("https://productsapi1.herokuapp.com/api/produits")
      .then((Response) => {
        setProducts(Response.data);
      })
      .catch((error) => {});
  });
  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(true);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };
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
    setAuthorized(false);
    history.push("/hello");
  };
  const HandleSearch = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setUpdatedProducts(Products);
    } else updateProducts(e.target.value);
  };
  const updateProducts = (value) => {
    setUpdatedProducts([]);

    Products.map((product) => {
      if (product.nom.includes(value)) {
        setUpdatedProducts((prev) => [...prev, product]);
      }
    });
    console.log(UpdatedProducts);
  };
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon src={Logo} />
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Accueil</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Catalogue">Produits</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Contactez-nous</NavLinks>
          </NavItem>
        </NavMenu>
        <Form
          barOpened={barOpened}
          onClick={() => {
            // When form clicked, set state of baropened to true and focus the input
            setBarOpened(true);
            inputFocus.current.focus();
          }}
          // on focus open search bar
          onFocus={() => {
            setBarOpened(true);
            inputFocus.current.focus();
          }}
          // on blur close search bar
          onBlur={() => {
            setBarOpened(true);
          }}
          // On submit, call the onFormSubmit function
          onSubmit={onFormSubmit}
          ref={formRef}
        >
          <ButtonR type="submit" barOpened={barOpened}>
            <BiSearch />
          </ButtonR>
          <Input
            onChange={HandleSearch}
            ref={inputFocus}
            value={input}
            barOpened={barOpened}
            placeholder="Rechercher un produit..."
          />
        </Form>
        <NavIcons>
          <NavItem>
            <NavIconLink to="/VerifyRole">
              <BiUser size="30" />
            </NavIconLink>
          </NavItem>
          <NavItem>
            <NavIconLink>
              <AiOutlineHeart size="30" />
            </NavIconLink>
          </NavItem>
          <NavItem>
            <NavIconLink>
              <AiOutlineShoppingCart size="30" />
            </NavIconLink>
          </NavItem>
          <NavItem>
            <NavIconLink to="/" onClick={handleDisconnect}>
              <FiSettings size="30" />
            </NavIconLink>
          </NavItem>
        </NavIcons>
      </NavbarContainer>
    </Nav>
  );
};
export default Navbar;
