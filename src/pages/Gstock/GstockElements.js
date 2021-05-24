import styled from "styled-components";
import { Link } from "react-router-dom";

export const Styleda = styled(Link)`
  font-size: 0.8rem;
  color: #3b84bb;
  font-weight: 900;
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
`;

//Styling

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GStockContainer = styled.div`
  width: 100%;
  max-width: 95vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
`;
export const GStockTable = styled.table`
  border-collapse: collapse;
  border-spacing: 60px;
`;
export const TableTh = styled.th`
  padding: 40px 80px;
  border-bottom: solid 1px #e1e1ea;
  @media screen and (max-width: 1600px) {
    padding: 20px 40px;
  }
`;
export const ProductImg = styled.img`
  width: 50px;
  height: 50px;
`;
export const TableTd = styled.td`
  text-align: center;
  padding: 20px;
  border-bottom: solid 1px #e1e1ea;
`;
export const TableLink = styled(Link)``;
export const TableButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
`;
export const BtnAjouterP = styled(Link)`
  margin: 50px 50px 20px 50px;
  color: #466277;
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? "30rem" : "2rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: #848080;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #848080;
  }
`;

export const ButtonR = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: #848080; ;
`;
