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
  max-width: 1800px;
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
  border-spacing: 80px;
`;
export const TableTh = styled.th`
  padding: 40px 80px;
  border-bottom: solid 1px #e1e1ea;
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
