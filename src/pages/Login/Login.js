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
} from "../../GlobalStyles.js";

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
        setError(`You must provide the ${key}`);
        return;
      }
    }
    axios
      .post(
        "https://fathomless-coast-11439.herokuapp.com/api/auth/signin",
        state
      )
      .then((response) => {
        setNotir("");
        setNotiv("User Logged in succesfully");
        console.log(Notiv);
      })
      .catch((erreur) => {
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
        <StyledForm onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <br />

          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
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
          <StyledButton type="submit">Login{console.log(state)}</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
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
    </div>
  );
};

export default LogIn;
