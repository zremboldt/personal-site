import React, { useState } from "react";
import ArrowDown from "../images/arrow-down";
import Quote from "../images/quote";

export default function Strength({ strength, description }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <li
      className="strength"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="strengthLabel">
        <p>{strength}</p>
        <ArrowDown />
      </div>
      {isVisible && (
        <div className="dropdown">
          <Quote />
          <p>{description}</p>
        </div>
      )}
    </li>
  );
}
