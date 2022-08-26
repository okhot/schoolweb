import React from "react";
import './PracticeCards.css'


function PracticeCards({ image, heading, text, shifted, highlighted }) {
  return (
    <div className={`advice__cards ${shifted? 'advice__cards--shifted': ''} ${highlighted? 'advice__cards--highlighted': ''}`}>
      <div className="advice__text">
        <img src={image} alt="" />
        <h5>{heading}</h5>
        <div className="bar"></div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default PracticeCards;
