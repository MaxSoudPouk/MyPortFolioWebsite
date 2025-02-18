﻿import "./testimonial.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Testimonials() {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Strengths</h2>
      <span className="section__subtitle">My personal</span>

      <Swiper className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },

        }}
        modules={[Pagination]}
      >
        {Data.map((item) => {
          return (
            <SwiperSlide className="testimonial__card" key={item.id}>
              <img src={item.image} alt="Imge"
                className="testimonial__img" />

              <h3 className="testimonial__name">{item.title}</h3>
              <p className="testimonial__description">{item.description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
