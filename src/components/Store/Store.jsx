import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import BannerCarousel from "./BannerCarousel/BannerCarousel";
import GamesTable from "./GamesTable/GamesTable";
import SocialMedia from "./SocialMedia/SocialMedia";
import "./Store.css";
import StoreFilter from "./StoreFilter/StoreFilter";

const Store = ({ user }) => {
  return (
    <div className="big-store-container">
      <NavigationBar user={user} />
      <div className="container">
        <div className="row col-sm">
          <div className="d-flex flex-column col-lg-3 row-sm-12">
            <StoreFilter />
            <SocialMedia />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center col-lg-9 row-sm-12">
            <BannerCarousel />
            <GamesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
