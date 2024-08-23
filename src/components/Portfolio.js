import { projectsData } from "./PfData";
import "../App.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title font-[var(--font-semi-bold)]">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <Swiper
        className="portfolio__container container1 w-[46.875rem] lg:w-[initial]"
        loop={true}
        grabCursor={true}
        spaceBetween={48}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {projectsData.map(({ id, image, title, link }) => {
          return (
            <SwiperSlide
              className="project__card bg-[var(--container-color)] border-[1px] border-[rgba(0,0,0,0.1)] p-6 rounded-3xl mb-[var(--mb-3)]"
              key={id}
            >
              <img
                src={image}
                alt=""
                className="w-[20rem] rounded-xl mb-[var(--mb-1-5)] lg:w-[initial]"
              />
              <h3 className="text-[length:var(--normal-font-size)] font-[var(--font-medium)] mb-[var(--mb-0-75)]">
                {title}
              </h3>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-[length:var(--small-font-size)] flex items-center gap-x-1 hover:text-[var(--title-color)] hover:translate-x-2 duration-300"
              >
                Demo
                <i class="bx bx-right-arrow-alt text-[length:1.2rem]"></i>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
