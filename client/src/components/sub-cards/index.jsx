import React from "react";
import "./index.scss";
import img1 from "../../img/img1.webp";
import img2 from "../../img/img2.webp";
import img3 from "../../img/img3.webp";
import img4 from "../../img/img4.webp";
import img5 from "../../img/img5.webp";
import img6 from "../../img/img6.webp";
import img7 from "../../img/img7.webp";
import img8 from "../../img/img8.webp";

const SubCards = () => {
  return (
    <div id="subCards">
      <div className="container">
        <div className="subjects-section">
          <div className="subcard">
            <img src={img1} alt="" className="sunimg"/>
            <img src={img2} alt="" className="sunimg"/>
            <img src={img3} alt="" className="sunimg"/>
            <img src={img4} alt="" className="sunimg"/>
            <img src={img5} alt="" className="sunimg"/>
            <img src={img6} alt="" className="sunimg"/>
            <img src={img7} alt="" className="sunimg"/>
            <img src={img8} alt="" className="sunimg"/>
          </div>
          <button className="subCardBtn">View More Subjects</button>
        </div>
      </div>
    </div>
  );
};

export default SubCards;
