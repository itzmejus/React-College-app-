import React from "react";
import Homebanner from "../images/banner.png";
import bannerBlue from "../images/bannerBlue.png";
import bannerAlign2 from "../images/banner-aliment2.png";
import bannerAlign3 from "../images/banner-aliment3.png";
import bannerAlign1 from "../images/banner-aliment.png";
import bannerAlign4 from "../images/banneraliment4.png";
import bannerline from "../images/bannerline.png";
import shape1 from "../images/shape-1.png";
import shape4 from "../images/shape-4.png";
import shape3 from "../images/shape-3.png";
import "../styles/Homepage.css";

function HomePage() {
  return (
    <div className="conatiner-fluid">
      <div className="row" id="hero-section">
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 left-hero-section">
          <div class="small-header-container">
            <img src={shape1} alt="" srcset="" />
            <p class="small-hero-header">WELCOME TO ONLINE COACHING</p>
          </div>
          <h2 class="main-hero-header">
            Get Class From <br />
            Top{" "}
            <span class="hero-ani-text">
              Instructor <img id="para-img" src={bannerline} alt="" srcset="" />
            </span>
          </h2>
          <p class="hero-dis">
            A learning community dedicated to building respectful and
            responsible citizens and empowering all learners.
          </p>
          <div class="hero-btn-container">
            <a href="#" class="hero-btn hero-btn-left">
              EXPLORE COURSES
            </a>
            <a href="#" class="hero-btn hero-btn-right">
              CONTACT US
            </a>
          </div>
          <img src="" alt="" srcset="" />
          <div class="shape-5">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 right-hero-section">
          <img class="banner-background" src={bannerBlue} alt="" srcset="" />
          <img class="girl-img" src={Homebanner} alt="" srcset="" />
          <img
            class="banner-element-icon-1 banner-icon"
            src={bannerAlign1}
            alt=""
            srcset=""
          />
          <img
            class="banner-element-icon-2 banner-icon"
            src={bannerAlign2}
            alt=""
            srcset=""
          />
          <img
            class="banner-element-icon-3 banner-icon"
            src={bannerAlign3}
            alt=""
            srcset=""
          />
          <img
            class="banner-element-icon-4"
            src={bannerAlign4}
            alt=""
            srcset=""
          />
          <img class="banner-element-icon-5" src={shape4} alt="" srcset="" />
          <img class={shape3} src="./img/shape-3.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
