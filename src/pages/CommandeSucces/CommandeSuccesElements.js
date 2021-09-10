import styled from "styled-components";
export const Wrapper = styled.div`
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
export const Container = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  min-height: 40vw;
`;

export const ImgSuccess = styled.img`
  width: 10%;
  height: 10%;
  border-radius: 10px;
`;
export const SuccesP = styled.p`
  font-weight: 900;
  color: grey;
`;
