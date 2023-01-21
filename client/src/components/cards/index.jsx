import React from "react";
import Books from "../../img/icon1.svg";
import Person from "../../img/icon2.svg";
import Clock from "../../img/icon3.svg";

import "./index.scss";
const Card = () => {
  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <img src={Books} alt="" className="cardimg" />
          <div className="uicours">
            <h3>60+ UX courses</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>

        <div className="card">
          <img src={Person} alt="" className="cardimg" />
          <div className="uicours">
            <h3>Expert instructors</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>

        <div className="card">
          <img src={Clock} alt="" className="cardimg" />
          <div className="uicours">
            <h3>Life time access</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
