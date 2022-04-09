import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Card1 from "../Card/Card1";
import Card2 from "../Card/Card2";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import Cloud from "../../img/cloud1.png";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Academic  </span>
        <span>Journey</span>
        <spane>
        {/* I Know That Problem Solving Equivalents To */}
        My Goal is not Winning; But to participate 
        
          <br />
          in all possible races
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "15rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Google Cloud Ready 2021 Facilitator "}
            detail={"◦Selected as one of 200 Facilitator ◦ Facilitated Cloud training program for 3 months."}
            
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card1
            emoji={Glasses}
            heading={"Data & Structure analyst at STES Rocketry"}
            detail={"◦Worked with selected 30 members to make launchable Rocket ◦Spot Award-On the Spot Recognition"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card2
            emoji={Humble}
            heading={"BLANK"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
