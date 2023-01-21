import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";
const Details = () => {
  const [details, setDetails] = useState([]);
  const { _id } = useParams();

//   const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/courses/${_id}`)
      .then((data) => setDetails(data.data));
  }, []);

  return (
    <div id="Details">
      <div className="container">
        <div className="detail">
          <div className="info">
            <p>{details.name}</p>
            <p className="desc">{details.description}</p>
            {/* <span>Price: {details.price}</span>
            <button className="backBtn" onClick={() => navigate("/")}>
              Go Back
            </button>{" "} */}
          </div>
          <img src={details.imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
