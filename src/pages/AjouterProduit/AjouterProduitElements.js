import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Button = styled(Link)`
  background-color: white;
  border: solid orange 3px;
  border-radius: 15px;
  margin: 1em;
  font-size: 1.3em;
  text-decoration: none;
  padding: 5px 20px;
  cursor: pointer;
`;
export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 20px 0;
`;
export const Notificationvert = styled(StyledError)`
  color: #00ff80;
`;
export const Notificationrouge = styled(StyledError)`
  color: #ff5050;
`;
export const sharedStyles = css`
  background-color: #ffffff;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #707070;
  margin: 10px 0 20px 0;
  padding: 25px 20px;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 60px;
  background-color: #fff;
  border-radius: 7%;
`;
export const Styledp = styled.p`
  font-size: 0.8rem;
  color: #4b4a4a;
  display: inline;
  font-weight: 900;
  margin-top: 15px;
`;
export const Styledps = styled(Styledp)``;
export const Styleda = styled(Link)`
  font-size: 0.8rem;
  color: #3b84bb;
  font-weight: 900;
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
`;

export const SessionInput = styled.input`
  display: inline;
  margin: 10px;
  margin-top: 0;
`;
export const StyledArea = styled.textarea``;
export const StyledFormContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 7%;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-size: 1em;
  ${sharedStyles}
`;
export const Styledh1 = styled.h1`
  color: #4b4a4a;
  font-weight: 900;
  font-size: 3rem;
`;

export const StyledButton = styled.button`
  display: block;
  background-color: #466277;
  color: #fff;
  font-size: 1.3rem;
  border: 0;
  font-weight: 900;
  border-radius: 15px;
  width: 100%;
  padding: 20px;
  cursor: pointer;
  box-sizing: border-box;
`;
