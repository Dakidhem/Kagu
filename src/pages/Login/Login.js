import React, { useState } from "react";
import axios from "axios";

import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledError,
  Styledh1,
  Notificationvert,
  Notificationrouge,
  StyledFormBlue,
  StyledFormContainer,
  StyledKagu,
  Styledp,
  Styledps,
  StyledMeuble,
  Styleda,
  StyledAddiction,
  SessionInput,
} from "../../GlobalStyles.js";
import Meuble from "../../assets/Images/meuble4.png";
import KaguBlue from "../../assets/Images/KaguBlue.png";

const initalState = {
  email: "",
  password: "",
};
export const LogIn = () => {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");
  const [Notiv, setNotiv] = useState("");
  const [Notir, setNotir] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        if (key === "email") {
          setError("");
          setNotir("");
          setError(`Vous devez saisir votre Email`);
        } else if (key === "password") {
          setError("");
          setNotir("");
          setError(`Vous devez saisir votre mot de passe`);
        }
        return;
      }
    }
    axios
      .post(
        "https://fathomless-coast-11439.herokuapp.com/api/auth/signin",
        state
      )
      .then((response) => {
        setError("");
        setNotir("");
        setNotiv("L'utilisateur s'est connecté avec succès");
        console.log(Notiv);
      })
      .catch((erreur) => {
        setError("");
        setNotiv("");
        setNotir(erreur.response.data.message);
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
          <StyledFormBlue>
            <StyledMeuble src={Meuble} />
          </StyledFormBlue>
          <StyledForm onSubmit={handleSubmit}>
            <center>
              <StyledKagu src={KaguBlue} />
            </center>
            <Styledh1>Bienvenue !</Styledh1>
            <br />

            <label htmlFor="email"></label>
            <StyledInput
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
              placeholder="Email..."
            />
            <label htmlFor="password"></label>
            <StyledInput
              type="password"
              name="password"
              value={state.password}
              onChange={handleInput}
              placeholder="Mot de passe..."
            />
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
            <SessionInput type="checkbox" name="session"></SessionInput>
            <Styledps>Sauvgarder la session</Styledps>
            <StyledButton type="submit">
              Connectez-Vous{console.log(state)}
            </StyledButton>
            <StyledAddiction>
              <Styledp>Vous n'avez pas de compte?</Styledp>
              <Styleda to="/SignUp">Inscrivez-vous</Styleda>
            </StyledAddiction>
          </StyledForm>
        </StyledFormContainer>
      </StyledFormWrapper>
    </div>
  );
};

export default LogIn;
