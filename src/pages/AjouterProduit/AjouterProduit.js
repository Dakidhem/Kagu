import axios from "axios";
import React, { useState } from "react";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  Styledh1,
  StyledFormContainer,
  StyledArea,
} from "./AjouterProduitElements.js";
const initalState = {
  nom: "",
  type: "",
  prix: "",
  quantite: "",
  description: "",
  imageurl: "",
};
const AjouterProduit = () => {
  const [state, setState] = useState(initalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://productsapi1.herokuapp.com/api/produits", state)
      .then((response) => {})
      .catch((error) => {});
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, [inputName]: value }));
  };
  return (
    <div>
      <StyledFormWrapper>
        <StyledFormContainer>
          <StyledForm onSubmit={handleSubmit}>
            <Styledh1>Ajouter un produit!</Styledh1>
            <br />
            <label htmlFor="nom"></label>
            <StyledInput
              type="text"
              name="nom"
              value={state.nom}
              onChange={handleInput}
              placeholder="Nom..."
            />
            <label htmlFor="type"></label>
            <StyledInput
              type="text"
              name="type"
              value={state.type}
              onChange={handleInput}
              placeholder="Type..."
            />
            <label htmlFor="prix"></label>
            <StyledInput
              type="text"
              name="prix"
              value={state.prix}
              onChange={handleInput}
              placeholder="Prix..."
            />
            <label htmlFor="quantite"></label>
            <StyledInput
              type="text"
              name="quantite"
              value={state.quantite}
              onChange={handleInput}
              placeholder="Quantité..."
            />
            <label htmlFor="description"></label>
            <StyledArea
              type="text"
              name="description"
              value={state.description}
              onChange={handleInput}
              placeholder="description..."
            />
            <label htmlFor="imageurl"></label>
            <StyledInput
              type="url"
              name="imageurl"
              value={state.imageurl}
              onChange={handleInput}
              placeholder="Url de la photo..."
            />

            <StyledButton type="submit">Enregistrer le produits</StyledButton>
          </StyledForm>
        </StyledFormContainer>
      </StyledFormWrapper>
    </div>
  );
};

export default AjouterProduit;
