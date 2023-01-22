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

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8080/courses/${_id}`);
    navigate("/");
  };

  return (
    <div id="Details">
      <DetailsHeader />
      <button className="goBack" onClick={() => navigate(-1)}>
        {" "}
        Go Back
      </button>
      <div className="container">
        <div className="detail">
          <div className="info">
            <p className="coursesName">{details.name}</p>
            <p className="desc">{details.description}</p>
            <spam className="detailsPrice">Price: {details.price}</spam>
            <br />
            <button onClick={() => handleDelete(details._id)}> Delete </button>
          </div>
          <div className="imgdetails">
            <img src={details.imgUrl} alt="" className="detailImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
