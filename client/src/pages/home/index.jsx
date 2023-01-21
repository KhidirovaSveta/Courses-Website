import React from "react";
import Card from "../../components/cards";
import Carousel from "../../components/carousel";
import BgImg from "../../img/h1_hero.png";
import "./index.scss";
const Home = () => {
  return (
    <div id="Home">
      <img src={BgImg} alt="" className="bgimg" />
      <div className="container">
        <div className="main-text">
          <h1 className="learning">
            Online learning <br /> platform
          </h1>
          <p className="build">
            Build skills with courses, certificates, and degrees online from
            world-class universities and companies
          </p>
          <button className="joinFreeBtn">Join For Free</button>
        </div>
        <Card />

        {/* Carousel with our courses */}
        <div className="ourCourses">
          <h2>Our featured courses</h2>
          <Carousel />
        </div>
        
        {/* Carousel with our community */}
        <div className="CommunityExperts">
          <h2>Community experts</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
