import React, { useState } from "react";
import axios from "axios";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledError,
  Notificationvert,
  Notificationrouge,
  Styledh1,
  StyledFormBlue,
  StyledKagu,
  Styledp,
  Styleda,
  StyledAddiction,
  StyledFormContainer,
  StyledMeuble,
} from "../../GlobalStyles.js";
import KaguBlue from "../../assets/Images/KaguBlue.png";
import Meuble from "../../assets/Images/meuble1.png";
import { useHistory } from "react-router";
const initalState = {
  nom: "",
  prenom: "",
  email: "",
  numtel: "",
  password: "",
  roles: "user",
};
export const SignIn = () => {
  const [state, setState] = useState(initalState);
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [Notiv, setNotiv] = useState("");
  const [Notir, setNotir] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        if (key === "nom") {
          setNotiv("");
          setNotir("");
          setError(`Vous devez saisir votre nom`);
        } else if (key === "prenom") {
          setNotiv("");
          setNotir("");
          setError(`Vous devez saisir votre prénom`);
        } else if (key === "email") {
          setNotiv("");
          setNotir("");
          setError(`Vous devez saisir votre Email`);
        } else if (key === "numtel") {
          setNotiv("");
          setNotir("");
          setError(`Vous devez saisir votre numéro de téléphone`);
        } else if (key === "password") {
          setNotiv("");
          setNotir("");
          setError(`Vous devez saisir votre mot de passe`);
        }
        return;
      }
    }
    if (state.numtel.length > 10) {
      setNotiv("");
      setNotir("");
      setError("Entrez un numéro de téléphone de moins de 10 chiffres");
      return;
    } else if (!state.numtel.match(/^[0-9]+$/)) {
      setNotiv("");
      setNotir("");
      setError("Entrez un numéro de téléphone qui contient que des chiffres");
      return;
    }
    if (state.password.length < 8) {
      setNotiv("");
      setNotir("");
      setError("Utiliser un mot de passe qui contient au moins 8 caractère");
      return;
    }
    if (state.password !== confirm) {
      setNotiv("");
      setNotir("");
      setError(
        "Les mots de passe saisis ne sont pas identiques, Veuillez les ressasir"
      );
      return;
    }
    setError("");
    axios
      .post(
        "https://fathomless-coast-11439.herokuapp.com/api/auth/signup",
        state
      )
      .then((response) => {
        setError("");
        setNotir("");
        setNotiv(response.data.message);
        setTimeout(() => {
          history.push("/LogIn");
        }, 3000);
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
    if (inputName === "confirm_password") {
      console.log(value);
      setConfirm(value);
    }
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
            <Styledh1>Inscrivez-Vous !</Styledh1>
            <br />
            <label htmlFor="nom"></label>
            <StyledInput
              type="text"
              name="nom"
              value={state.nom}
              onChange={handleInput}
              placeholder="Nom..."
            />
            <label htmlFor="prenom"></label>
            <StyledInput
              type="text"
              name="prenom"
              value={state.prenom}
              onChange={handleInput}
              placeholder="Prénom..."
            />
            <label htmlFor="email"></label>
            <StyledInput
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
              placeholder="Email..."
            />
            <label htmlFor="tel"></label>
            <StyledInput
              type="tel"
              name="numtel"
              value={state.numtel}
              onChange={handleInput}
              placeholder="Numéro de téléphone..."
            />
            <label htmlFor="password"></label>
            <StyledInput
              type="password"
              name="password"
              value={state.password}
              onChange={handleInput}
              placeholder="Mot de passe..."
            />
            <label htmlFor="confirm_password"></label>
            <StyledInput
              type="password"
              name="confirm_password"
              value={confirm}
              onChange={handleInput}
              placeholder="Confirmez le mot de passe..."
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
            <StyledButton type="submit">
              Inscrivez-vous{console.log(state)}
            </StyledButton>
            <StyledAddiction>
              <Styledp>Vous avez déjà un compte?</Styledp>
              <Styleda to="/LogIn">Connectez-vous</Styleda>
            </StyledAddiction>
          </StyledForm>
        </StyledFormContainer>
      </StyledFormWrapper>
    </div>
  );
};

export default SignIn;
