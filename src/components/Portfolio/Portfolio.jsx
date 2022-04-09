import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.gif";
import blender from "../../img/blend.png";
import gitlogo from "../../img/gitlogo.png";
import eye from "../../img/eye.png";
import Ecommerce from "../../img/ecommerce.gif";
import HOC from "../../img/hoc.gif";
import MusicApp from "../../img/musicapp.gif";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img className="image__img" src={Sidebar} alt="Bricks" />
          <div className="image__overlay image__overlay--blur">
            <a className="templogo" href="https://www.linkedin.com/posts/abhinav-katore-a435931b1_google-micorsoft-amazon-activity-6848255114231316480-mDWT?utm_source=linkedin_share&utm_medium=member_desktop_web">
              <img src={eye} alt="" />
            </a>
            
            <div className="image__title">
              {/* Github */}
            </div>
            <p className="image__description">
              {/* <a  href="https://github.com/Abhinow-katore/2D-Video_to_3D-Animation"> */}
              2D Video to 3D Animation
              <br/>
              
              &nbsp;&nbsp;Tool: Blender & Mocap 
              {/* </a> */}
              {/* <br/>
              <button onclick = "myfunction()">button</button> */}
              
            </p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <img className="image__img"src={Ecommerce} alt="" />
          <div className="image__overlay image__overlay--blur">
            <a className="templogo" href="https://github.com/Abhinow-katore/Arduino-Voice-Controlled-Robot-">
              <img src={gitlogo} alt="" />
            </a>
            <div className="image__title">
              
            </div>
            <p className="image__description">
            Arduino Voice Controlled Robot
            </p>
          </div>
          
          {/* <div className="group"> CS/EE  Group project, (Advisor: Prof. Vilas Alagdeve, Senior: Aditya warkad)
          </div> */}
        </SwiperSlide>








        <SwiperSlide>
          <img className="image__img" src={MusicApp} alt="" />
          <div className="image__overlay image__overlay--blur">
            <a className="templogo" href="https://github.com/Abhinow-katore/Hand-Gesture-Virtual-Car-Control">
              <img src={gitlogo} alt="" />
            </a>
            <div className="image__title">
              
            </div>
            <p className="image__description">
            Hand Gesture Virtual Car Control
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="image__img" src={HOC} alt="" />
          <div className="image__overlay image__overlay--blur">
            <a className="templogo" href="https://leetcode.com/abhinavkatore/">
              <img src={gitlogo} alt="" />
            </a>
            <div className="image__title">
              
            </div>
            <p className="image__description">
              Here we have brick wall.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
