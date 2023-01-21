import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";

const Carousel = () => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/`).then((data) => setCourses(data.data));
  }, []);

  return (
    <div id="carousel">
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={35}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {courses?.map((course) => {
            console.log(course.price);
            return (
              <SwiperSlide>
                <div className="card1">
                  <img src={course.imgUrl} alt="" className="cardimg" />
                  <div className="info">
                    <p className="title">{course.title}</p>
                    <h3>{course.name}</h3>
                    <p className="description">{course.description}</p>
                  </div>
                  <div className="price">
                    <div className="points">
                      <i className="fa-solid fa-star star"></i>
                      <i className="fa-solid fa-star star"></i>
                      <i className="fa-solid fa-star star"></i>
                      <i className="fa-solid fa-star star"></i>
                      <i className="fa-regular fa-star-half star"></i>
                      <p className="txt"><span>(4.5)</span> based on 120</p>
                    </div>
                    <p className="usd">{course.price}</p>
                  </div>
                    <button className="carouselBtn">Find Out More</button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
