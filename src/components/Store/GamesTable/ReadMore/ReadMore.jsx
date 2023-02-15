import React, { useState } from "react";
import "./ReadMore.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <span className="text">
      {isReadMore ? text.slice(0, 80) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? " ...Read more" : " Show less"}
      </span>
    </span>
  );
};

export default ReadMore;
