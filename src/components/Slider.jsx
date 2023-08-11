import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "./Logo";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="home__slider1">
            <div className="home__content">
              <Logo />
              <h3>delicious royate</h3>
              <h1>gift voucher</h1>
              <p>give away your beloved customers</p>
              <a href="#menu" className="btn">
                order now
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home__slider2">
            <div className="home__content">
              <Logo />
              <h3>sale of 10% this dish</h3>
              <h1>the fresh</h1>
              <p>food restaurant</p>
              <a href="#menu" className="btn">
                order now
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home__slider3">
            <div className="home__content">
              <Logo />
              <h3>we are open</h3>
              <h1>fresh fruits</h1>
              <p>you will love it</p>
              <a href="#menu" className="btn">
                order now
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
