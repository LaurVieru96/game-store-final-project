import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./BannerCarousel.css";
import csgo from "../../../assets/AssetsBannerCarousel/csgo.webp";
import ragnarok from "../../../assets/AssetsBannerCarousel/ragnarok.jpg";
import warzone2 from "../../../assets/AssetsBannerCarousel/warzone2.jpg";
import miles from "../../../assets/AssetsBannerCarousel/miles.jpg";
import harry from "../../../assets/AssetsBannerCarousel/harry.jpg";
import snow from "../../../assets/AssetsBannerCarousel/snow.png";

const BannerCarousel = () => {
  return (
    <div className="banner-carousel">
      <Carousel fade variant="dark" controls={false} interval={1000}>
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
          <img className="d-block w-100" src={harry} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ragnarok} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={snow} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
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
          <img className="d-block w-100" src={harry} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ragnarok} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={snow} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
