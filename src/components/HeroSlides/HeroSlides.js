import React from "react";
import { Carousel } from "react-responsive-carousel";
import meuble1 from "../../assets/Images/meuble1.png";
import meuble2 from "../../assets/Images/meuble2.png";
import meuble3 from "../../assets/Images/meuble3.png";
import meuble4 from "../../assets/Images/meuble4.png";
import {
  Item,
  ImgItem,
  ContentItem,
  PItem,
  ButtonItem,
} from "./HeroSlidesElements.js";
import "react-responsive-carousel/lib/styles/carousel.css";
import "./style.css";

export const HeroSlides = () => {
  return (
    <div className="HeroSlides">
      <Carousel
        autoPlay={true}
        centerMode={true}
        showStatus={false}
        showArrows={false}
        swipeable={false}
        infiniteLoop={true}
        showThumbs={false}
        centerSlidePercentage={100}
      >
        <Item>
          <ContentItem>
            <PItem>Des Chaises</PItem>
            <br />
            <ButtonItem
              to={{
                pathname: "/Catalogue",
                nomProduit: "chaise",
              }}
            >
              Achetez !
            </ButtonItem>
          </ContentItem>
          <ImgItem src={meuble1} />
        </Item>
        <Item>
          <ContentItem>
            <PItem>
              Des Tables
              <br /> De Nuits
            </PItem>
            <br />
            <ButtonItem
              to={{
                pathname: "/Catalogue",
                nomProduit: "table de nuit",
              }}
            >
              Achetez !
            </ButtonItem>
          </ContentItem>
          <ImgItem src={meuble2} />
        </Item>
        <Item>
          <ContentItem>
            <PItem>Des Armoires</PItem>
            <br />
            <ButtonItem
              to={{
                pathname: "/Catalogue",
                nomProduit: "armoire",
              }}
            >
              Achetez !
            </ButtonItem>
          </ContentItem>
          <ImgItem src={meuble3} />
        </Item>
        <Item>
          <ContentItem>
            <PItem>Des Lits</PItem>
            <br />
            <ButtonItem
              to={{
                pathname: "/Catalogue",
                nomProduit: "lit",
              }}
            >
              Achetez !
            </ButtonItem>
          </ContentItem>
          <ImgItem src={meuble4} />
        </Item>
      </Carousel>
    </div>
  );
};

export default HeroSlides;
