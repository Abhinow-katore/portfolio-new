import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      {/* <a href="https://drive.google.com/file/d/1_yIASC66pMD2H3b_oWlXP9bWwENdJGjh/view?usp=sharing"> */}
      <img src={emoji} alt="" />
      {/* </a> */}
      <span>{heading}</span>
      <span>{detail}</span>
      <a href="https://drive.google.com/file/d/1_yIASC66pMD2H3b_oWlXP9bWwENdJGjh/view?usp=sharing">
      <button className="c-button">LEARN MORE</button>
      </a>
    </div>
  );
};

export default Card;
