import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  Styledh1,
  StyledFormContainer,
  StyledArea,
} from "../AjouterProduit/AjouterProduitElements.js";

const ModifierProduit = () => {
  const { id } = useParams();

  const [CurrentState, setCurrentState] = useState({});

  useEffect(() => {
    axios
      .get(`https://productsapi1.herokuapp.com/api/produits/${id}`)
      .then((response) => {
        setCurrentState(response.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://productsapi1.herokuapp.com/api/produits/${id}`,
        CurrentState
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    console.log(inputName);
    const value = e.currentTarget.value;
    console.log(value);
    setCurrentState((prev) => ({ ...prev, [inputName]: value }));
  };
  return (
    <div>
      <StyledFormWrapper>
        <StyledFormContainer>
          <StyledForm onSubmit={handleSubmit}>
            <Styledh1>Modifier le produit</Styledh1>
            <br />
            <label htmlFor="nom"></label>
            <StyledInput
              type="text"
              name="nom"
              value={CurrentState.nom}
              onChange={handleInput}
              placeholder="Nom..."
            />
            <label htmlFor="type"></label>
            <StyledInput
              type="text"
              name="type"
              value={CurrentState.type}
              onChange={handleInput}
              placeholder="Type..."
            />
            <label htmlFor="prix"></label>
            <StyledInput
              type="text"
              name="prix"
              value={CurrentState.prix}
              onChange={handleInput}
              placeholder="Prix..."
            />
            <label htmlFor="quantite"></label>
            <StyledInput
              type="text"
              name="quantite"
              value={CurrentState.quantite}
              onChange={handleInput}
              placeholder="Quantité..."
            />
            <label htmlFor="description"></label>
            <StyledArea
              type="text"
              name="description"
              value={CurrentState.description}
              onChange={handleInput}
              placeholder="description..."
            />
            <label htmlFor="imageurl"></label>
            <StyledInput
              type="url"
              name="imageurl"
              value={CurrentState.imageurl}
              onChange={handleInput}
              placeholder="Url de la photo..."
            />
            <img src={CurrentState.imageurl} width="50px" />
            <StyledButton type="submit">
              Enregistrer les modifications
            </StyledButton>
          </StyledForm>
        </StyledFormContainer>
      </StyledFormWrapper>
    </div>
  );
};

export default ModifierProduit;
