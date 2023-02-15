import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./BannerCarousel.css";
import csgo from "../../../assets/AssetsBannerCarousel/csgo.webp";
import ragnarok from "../../../assets/AssetsBannerCarousel/ragnarok.jpg";
import warzone2 from "../../../assets/AssetsBannerCarousel/warzone2.jpg";
import miles from "../../../assets/AssetsBannerCarousel/miles.jpg";

const BannerCarousel = () => {
  return (
    <div className="banner-carousel">
      <Carousel fade variant="dark" controls={false} interval={1500}>
        <Carousel.Item>
          <img className="d-block w-100" src={miles} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={csgo} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={warzone2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ragnarok} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
