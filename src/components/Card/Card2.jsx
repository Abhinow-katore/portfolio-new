import React from "react";
import "./Card2.css";

const Card2 = ({emoji, heading, detail, color}) => {
  return (
    <div className="card2" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />

      <span>{heading}</span>
      <span>{detail}</span>
      {/* <a href="https://drive.google.com/file/d/1_yIASC66pMD2H3b_oWlXP9bWwENdJGjh/view?usp=sharing"> */}
      <button className="c-button">LEARN MORE</button>
      {/* </a> */}
    </div>
  );
};

export default Card2;
