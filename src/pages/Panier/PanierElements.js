import styled from "styled-components";
export const PanierWrapper = styled.div`
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
export const PanierContainer = styled.div`
  background-color: #98cff8;
  border-radius: 7%;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 40vw;
  grid-template-columns: 1fr 3fr;
`;
export const ProduitItem = styled.div`
  border-radius: 7%;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
