import { Link } from "react-router-dom";
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
  @media screen and (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DashboardList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DashboardListItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 2em;
  margin: 50px;
  width: 22%;
  height: 30%;
  list-style: none;
  font-size: 1.2rem;
  font-style: bold;
  font-weight: 900;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  &:hover {
  }
`;
export const Listp = styled.p`
  margin-left: 5px;
`;
