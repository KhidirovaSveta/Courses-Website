import React from "react";
import Card from "../../components/cards";
import Carousel from "../../components/carousel";
import CarouselExperts from "../../components/carouselExperts";
import SubCards from "../../components/sub-cards";
import BgImg from "../../img/h1_hero.png";
import "./index.scss";
const Home = ({ basket, setBasket, count, setCount }) => {

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
          <Carousel basket={basket} setBasket={setBasket} />
        </div>

        {/*Explore our top subjects */}
        <div className="CommunityExperts">
          <h2>Explore top subjects</h2>
          <SubCards />
        </div>

        {/* Carousel with our community */}
        <div className="CommunityExperts">
          <h2>Community experts</h2>
          <CarouselExperts />
        </div>
      </div>
    </div>
  );
};

export default Home;
