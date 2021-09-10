import { Link } from "react-router-dom";
import styled from "styled-components";
export const PanierWrapper = styled.div`
  width: 100%;
  z-index: 1;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
export const PanierContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 50px 0;
`;
export const ProduitItem = styled.div`
  border-radius: 10px;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  background-color: #fff;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;
export const ImgPanier = styled.img`
  min-width: 150px;
  min-height: 150px;
  max-width: 150px;
  max-height: 150px;
  border-radius: 10px;
`;
export const ProduitContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 1rem;
`;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: space-between;
  margin-bottom: 50px;
  height: 100%;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
export const LeftSideInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  height: 100%;
  gap: 2rem;
  width: 100%;
`;
export const RightSide = styled.div`
  display: flex;
  width: 35%;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  align-self: flex-start;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const Nomp = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  text-decoration: none solid rgb(79, 79, 79);
`;
export const NombreItem = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 20px;
`;
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100%;
`;
export const RemoveProduit = styled.button`
  color: #fff;
  background-color: #ff6666;
  border: none;
  cursor: pointer;
  width: fit-content;
  font-weight: 900;
  font-size: 0.9rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 5px 20px;
`;
export const ModifierQty = styled.button`
  color: #fff;
  background-color: green;
  border: none;
  cursor: pointer;
  width: fit-content;
  font-weight: 900;
  font-size: 0.9rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 5px 20px;
`;
export const HrReact = styled.div`
  height: 1px;
  border-top: 2px solid #e5e5e5;
  width: 90%;
`;
export const Remove_Prix = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const PanierHeader = styled.div`
  width: 90%;
  height: fit-content;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const PanierContenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
  height: 100%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
export const Styledh4 = styled.h4`
  color: #5b5b5b;
  font-weight: 500;
`;
export const Styledh3 = styled.h3`
  color: #000;
  font-size: 1.5rem;
  font-weight: 900;
`;
export const OrderBtn = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  background-color: #2a76f2;
  border: none;
  cursor: pointer;
  padding: 20px;
  width: 100%;
  font-weight: 900;
  font-size: 1rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
export const StyledPrix = styled.p`
  font-weight: 700;
`;
export const RemovePanier = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  border: none;
  cursor: pointer;
  padding: 20px;
  font-weight: 900;
  font-size: 0.8rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
