import styled from "styled-components";
export const ProduitWrapper = styled.div`
  width: 100%;
  z-index: 1;
  max-width: 1500px;
  margin-left: auto;
  margin-top: 40px;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
export const ProduitContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 40vw;
`;
export const ImgProduit = styled.img`
  width: 30%;
  height: 50%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
export const InfoProduitContainer = styled.div`
  width: 30%;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;
