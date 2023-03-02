import React from "react";
import "./Footer.css";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

import englishus from "../../../src/assets/PaymentMethods/englishus.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-payment">
        <div className="footer-main-left-side">
          <p>Payment methods:</p>
          <div className="payment-images">
            <FaCcVisa size={32} />
            <FaCcMastercard size={32} />
            <FaCcDiscover size={32} />
            <FaCcPaypal size={32} />
          </div>
          <p>and 200+ more</p>
        </div>
        <div className="footer-main-right-side">
          <img src={englishus} alt="usd" width={32} />
          <p>EN/USD</p>
        </div>
      </div>
      <hr />
      <div className="footer-address">
        <div className="footer-address-left">
          <p>SIMPLEX.APP Limited </p>
          <p>9 Coventry Road, Valley Grove,wv, 26060 United States</p>
          <p>
            Incorporation number: 23422342x3346534* <br />
            Business registration number: 23422342x3346534*
          </p>
        </div>
        <div className="footer-social-right">
          <BsFacebook size={32} title="SIMPLEX_FACEBOOK" />
          <BsTwitter size={32} title="SIMPLEX_TWITTER" />
          <BsInstagram size={32} title="SIMPLEX_INSTAGRAM" />
          <BsYoutube size={32} title="SIMPLEX_YOUTUBE" />
          <BsDiscord size={32} title="SIMPLEX_DISCORD" />
        </div>
      </div>
      <hr />
      <div className="footer-terms">
        <p>
          Use of this Web site constitutes acceptance of the Terms and
          Conditions and Privacy policy. All copyrights, trade marks, service
          marks belong to the corresponding owners.
        </p>
      </div>
    </div>
  );
};

export default Footer;
