import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import back1 from "../../img/new1.png"
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
          <span>Abhinav Katore</span>
          <span>
            A computer science student passionate about programming
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Abhinow-katore">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/abhinav-katore-a435931b1/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/abhinowkatore/">
            <img src={Instagram} alt="" />
          </a>

        </div>
      </div>
      {/* right image side */}
      <div className="i-right">

        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* </a> */}
        {/* animation */}

        <motion.img
          initial={{ left: "-144%" }}
          whileInView={{ left: "-80%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />




        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "48%" }}
          transition={transition}
          className="floating-div"
        >
          {/* <FloatinDiv img={crown} text1="Web" text2="Developer" /> */}
          <FloatinDiv img={crown} />

        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" /> */}
          <FloatinDiv img={thumbup} />
        </motion.div>

        <div className="blur">
        <img src={back1} alt="" />
        <div className="year1">
          2022
        </div>
        <div className="year2">
          2021
        </div>
        <div className="year3">
          2020
        </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
