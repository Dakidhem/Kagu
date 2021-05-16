import { Link } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import HeroBG from "./assets/Images/HeroBG.png";
import Montserrat from "./assets/fonts/Montserrat-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family:${Montserrat};
    }
    html,body {
    overflow-x: hidden; //horizontal
}
`;
export const WelcomeHero = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url(${HeroBG});
  background-repeat: no-repeat;
  background-position: right;
  position: relative;
`;
export const Container = styled.div`
  width: 100%;
  z-index: 1;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

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
  grid-column-start: 2;
  grid-column-end: 3;
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
export const StyledMeuble = styled.img`
  width: 100%;
`;
export const SessionInput = styled.input`
  display: inline;
  margin: 10px;
  margin-top: 0;
`;

export const StyledAddiction = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  color: #3b84bb;
  font-weight: 900;
  margin-top: 15px;
`;
export const StyledFormContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 7%;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledFormBlue = styled.div`
  background-color: #d3e9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  width: 100%;
  border-radius: 7% 0 0 7%;
  box-sizing: border-box;
  @media screen and (max-width: 991px) {
    display: none;
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
export const Styledh3 = styled.h3`
  ${Styledh1}
  font-size:1rem;
`;
export const StyledKagu = styled.img`
  margin-bottom: 40px;
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
//Profile and dashboard styling

export default GlobalStyle;
