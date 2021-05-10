import { Link } from "react-router-dom";
import styled from "styled-components";

export const Item = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 2fr 2fr 1fr;
`;
export const ImgItem = styled.img`
  max-width: 500px;

  grid-column-start: 3;
  grid-column-end: 4;
  @media screen and (max-width: 991px) {
    max-width: 300px;
  }
`;
export const ContentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 3;
`;
export const PItem = styled.p`
  font-size: 4em;
  font-style: bold;
  font-weight: 1000;
  color: #504f4f;
`;
export const ButtonItem = styled(Link)`
  background-color: #98cff8;
  border: 3px solide #98cff8;
  border-radius: 1em;
  padding: 0.3em 1em;
  font-size: 2.5em;
  list-style: none;
  font-style: bold;
  font-weight: 900;
  text-decoration: none;
  display: inline;
  color: white;
`;
export const HeroSlides = styled.div``;
