import React, { useContext } from "react";
import "./Works.css";
import "./SUS.mp3";
import Upwork from "../../img/Upwork.png";
import ann from "../../img/musicapp1.png";
// import rasengan from "../../img/rasengangif.gif";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (

    <div className="works" id="works">
      {/* left side */}

      <div className="w-left">
        <div className="working">

          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills &
          </span>

          <span>Experiences</span>

          <spane>

            Data Structure & Algorithms,
            Git, <br />Unix, Windows, Google Cloud Platform,<br />MySQL<br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* <audio id="audio">
          <source src="SUS.mp3" ></source>
        </audio>
        <button id="playPauseBTN" onclick = "amazon()" >play</button> */}


        {/* right side */}
      </div> 
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >

          <div className="w-secCircle">
            <a href="https://leetcode.com/abhinavkatore/">
              <img src={Upwork} alt="" />
            </a>
          </div>
          <a href="https://auth.geeksforgeeks.org/user/abhinavkatore/practice/">

            <div className="w-secCircle">
              <img src={Fiverr} alt="" />

            </div>
          </a>
          <div className="w-secCircle">

            <img src={Amazon} />




          </div>{" "}
          <div className="w-secCircle">
            <a href="https://codeforces.com/profile/abhinowKatore">
              <img src={Shopify} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle">
          <img src={ann} alt="" />
        </div>
        {/* <div className="w-backCircle yellowCircle">
          <img src={rasengan} alt="" />
        </div> */}
      </div>

    </div>

  );
};

export default Works;
