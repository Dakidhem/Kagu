import styled from "styled-components";
export const DashboardContainer = styled.div`
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
export const Dashboard = styled.div`
  background-color: #fff;
  border-radius: 7%;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 40vw;
  grid-template-columns: 1fr 3fr;
  @media screen and (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Listp = styled.p`
  margin-left: 5px;
  font-weight: 700;
  line-height: 50px;
`;
export const DashboardPhoto = styled.div``;
export const Dashboardinfo = styled.div``;
export const StyledTitle = styled.h1`
  color: #01789a;
  font-weight: 900;
`;
