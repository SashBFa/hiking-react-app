import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className="carousel"
    >
      <SwiperSlide>
        <img src="./images/bgSlide1.jpg" alt="page1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/bgSlide2.jpg" alt="page2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/bgSlide3.jpg" alt="page3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
