import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import DetailsHeader from "../../components/details-header";
const Details = () => {
  const [details, setDetails] = useState([]);
  const { _id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/courses/${_id}`)
      .then((data) => setDetails(data.data));
  }, []);

  return (
    <div id="Details">
      <DetailsHeader/>
      <button className="goBack" onClick={() => navigate(-1)}> Go Back</button>
      <div className="container">
        <div className="detail">
          <div className="info">
            <p className="coursesName">{details.name}</p>
            <p className="desc">{details.description}</p>
          </div>
          <img src={details.imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
