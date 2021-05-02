import React, { useState } from "react";
import axios from "axios";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledError,
} from "../../GlobalStyles.js";

const initalState = {
  nom: "",
  prenom: "",
  email: "",
  numtel: "",
  password: "",
  roles: ["user"],
};
export const SignIn = () => {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
    axios
      .post(
        "https://fathomless-coast-11439.herokuapp.com/api/auth/signup",
        state
      )
      .then((response) => {
        setError(response.data.message);
        console.log(error);
      })
      .catch((erreur) => {
        setError(erreur.response.data.message);
        console.log(error);
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
        <StyledForm onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <br />
          <label htmlFor="nom">Nom</label>
          <StyledInput
            type="text"
            name="nom"
            value={state.nom}
            onChange={handleInput}
          />
          <label htmlFor="prenom">Prénom</label>
          <StyledInput
            type="text"
            name="prenom"
            value={state.prenom}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="tel">Numéro de Téléphone</label>
          <StyledInput
            type="tel"
            name="numtel"
            value={state.numtel}
            onChange={handleInput}
          />
          <label htmlFor="password">Password</label>
          <StyledInput
            type="password"
            name="password"
            value={state.password}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">
            S'enregistrer{console.log(state)}
          </StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </div>
  );
};

export default SignIn;
