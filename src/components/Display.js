import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { hikeData } from "../data/hike";
import CardOne from "./CardOne";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

const Display = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination, Navigation]}
    >
      {hikeData &&
        hikeData.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <CardOne card={card} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Display;
