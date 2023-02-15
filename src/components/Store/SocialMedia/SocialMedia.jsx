import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <a title="SIMPLEX - Instagram" href="/" target="_blank">
        <FiInstagram />
      </a>
      <a title="SIMPLEX - Facebook" href="/" target="_blank">
        <FiFacebook />
      </a>
      <a title="SIMPLEX - Twitter" href="/" target="_blank">
        <FiTwitter />
      </a>
      <a title="SIMPLEX - Youtube" href="/" target="_blank">
        <FiYoutube />
      </a>
    </div>
  );
};

export default SocialMedia;
