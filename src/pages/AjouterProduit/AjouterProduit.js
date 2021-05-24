import axios from "axios";
import React, { useState } from "react";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  Styledh1,
  StyledFormContainer,
  StyledError,
  Notificationvert,
  Notificationrouge,
  StyledArea,
  ImgProduct,
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
  const [error, setError] = useState("");
  const [Notiv, setNotiv] = useState("");
  const [Notir, setNotir] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.quantite < 1) {
      setError("");
      setNotiv("");
      setNotir("Vous devez saisir une quantité supérieure à 0");
      return;
    }
    axios
      .post("https://productsapi1.herokuapp.com/api/produits", state)
      .then((response) => {
        setError("");
        setNotir("");
        setNotiv("Le produit a été ajouté avec succès");
      })
      .catch((error) => {
        setError("");
        setNotiv("");
        setNotir(error.response.data.message);
      });
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
              placeholder="Description..."
            />

            <label htmlFor="imageurl"></label>
            <StyledInput
              type="url"
              name="imageurl"
              value={state.imageurl}
              onChange={handleInput}
              placeholder="Url de la photo..."
            />
            <center>
              <ImgProduct src={state.imageurl} />
            </center>
            {error && (
              <StyledError>
                <p>{error}</p>
              </StyledError>
            )}
            {Notir && (
              <Notificationrouge>
                <span>{Notir}</span>
              </Notificationrouge>
            )}
            {Notiv && (
              <Notificationvert>
                <span>{Notiv}</span>
              </Notificationvert>
            )}
            <StyledButton type="submit">Enregistrer le produits</StyledButton>
          </StyledForm>
        </StyledFormContainer>
      </StyledFormWrapper>
    </div>
  );
};

export default AjouterProduit;
