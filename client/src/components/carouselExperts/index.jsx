import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";

const CarouselExperts = () => {
  const [experts, setExperts] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/experts`)
      .then((data) => setExperts(data.data));
  }, []);

  return (
    <div id="carousel">
      <div className="carousel">
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={35}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {experts?.map((expert) => {
            return (
              <SwiperSlide>
                  <div className="card1">
                    <img src={expert.imgUrl} alt="" className="carouselimg" />
                    <div className="info">
                      <h3 className="expName">{expert.name}</h3>
                      <p className="expdescription">{expert.description}</p>
                    </div>
                  </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselExperts;
