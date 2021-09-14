import React, { useEffect, useState, useRef } from "react";
import "./Catalogue_style.css";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import {
  StyledFormContainer,
  StyledFormWrapper,
  CatalogueWrapper,
  Form,
  Input,
  ButtonR,
  StyledTitle,
} from "./CatalogueElements.js";
import { Link } from "react-router-dom";
export const Catalogue = (props) => {
  const [Products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  useEffect(() => {
    axios
      .get("https://whispering-bastion-00988.herokuapp.com/api/produits")
      .then((Response) => {
        setProducts(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Products]);
  useEffect(() => {
    if (props.location.nomProduit !== undefined) {
      setInput(props.location.nomProduit);
      setBarOpened(true);
    }
  }, []);

  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(true);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };

  return (
    <div>
      <StyledFormWrapper>
        <CatalogueWrapper>
          <StyledTitle>Nos Produits</StyledTitle>
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
              setBarOpened(false);
            }}
            // On submit, call the onFormSubmit function
            onSubmit={onFormSubmit}
            ref={formRef}
          >
            <ButtonR type="submit" barOpened={barOpened}>
              <BiSearch />
            </ButtonR>
            <Input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              ref={inputFocus}
              value={input}
              barOpened={barOpened}
              placeholder="Rechercher un produit..."
            />
          </Form>
          <StyledFormContainer>
            {Products.filter((product) => {
              if (input === "") {
                return product;
              } else if (
                product.nom.toLowerCase().includes(input.toLowerCase())
              ) {
                return product;
              }
            }).map((product, key) => {
              if (Products === []) return <h1>Aucun produit n'a été trouvé</h1>;
              if (product.archived === false)
                return (
                  <div class="el-wrapper" key={key}>
                    <div class="box-up">
                      <img className="img" src={product.imageurl} alt="" />
                      <div class="img-info">
                        <div class="info-inner">
                          <span class="p-name">{product.nom}</span>
                          <span class="p-company">{product.type}</span>
                        </div>
                        <div class="a-size">
                          <span class="size" maxlength="10">
                            {product.description}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="box-down">
                      <div class="h-bg">
                        <div class="h-bg-inner"></div>
                      </div>

                      <Link
                        class="cart"
                        to={{
                          pathname: `./Catalogue/${product.id}`,
                          param1: product.id,
                        }}
                      >
                        <span class="price">{product.prix}$</span>
                        <span class="add-to-cart">
                          <span class="txt">Accéder au produit</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                );
            })}
          </StyledFormContainer>
        </CatalogueWrapper>
      </StyledFormWrapper>
    </div>
  );
};

export default Catalogue;
