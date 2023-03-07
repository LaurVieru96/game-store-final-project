import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import "./Support.css";
const Support = ({ user }) => {
  return (
    <div className="support-main-container">
      <NavigationBar user={user} />
      <div className="support-container">
        <h1>How can we help you ?</h1>
        <div className="faq-section">
          <div className="header-section-support">
            <h3>Popular topics</h3>
          </div>
          <div className="ul-section-support">
            <ul>
              <li>
                I paid, but my transaction is not going through. What should I
                do ?
              </li>
              <li>How to buy?</li>
              <li>How i pay ?</li>
              <li>
                How can i contact the seller if I have a problem with my game ?
              </li>
              <li>My order is processing. What does that mean ?</li>
              <li>I purchased a wrong product. What can i do ?</li>
              <li>What is SIMPLEX ?</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
