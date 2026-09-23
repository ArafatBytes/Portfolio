import { projectsData } from "./PfData";
import "../App.css";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="portfolio section" 
      id="portfolio"
    >
      <motion.h2 variants={itemVariants} className="section__title font-[var(--font-semi-bold)]">Portfolio</motion.h2>
      <motion.span variants={itemVariants} className="section__subtitle">Most recent work</motion.span>

      <motion.div variants={itemVariants}>
        <Swiper
          className="portfolio__container container1 w-[46.875rem] lg:w-[initial]"
          loop={true}
          grabCursor={true}
          spaceBetween={48}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2, spaceBetween: 48 },
          }}
          modules={[Pagination]}
        >
          {projectsData.map(({ id, image, title, description, link }) => (
            <SwiperSlide
              className="project__card bg-[var(--glass-bg)] shadow-[var(--glass-shadow)] backdrop-blur-md border border-[var(--glass-border)] p-6 rounded-3xl mb-[var(--mb-3)] transition-transform duration-300 hover:-translate-y-2 flex flex-col justify-between h-auto"
              key={id}
            >
              <div>
                <img
                  src={image}
                  alt=""
                  className="w-[20rem] h-48 object-cover rounded-xl mb-[var(--mb-1-5)] lg:w-[initial] lg:h-auto"
                />
                <h3 className="text-[length:var(--normal-font-size)] font-[var(--font-medium)] mb-2">
                  {title}
                </h3>
                <p className="text-[length:var(--small-font-size)] text-[var(--text-color)] mb-4 leading-relaxed">
                  {description}
                </p>
              </div>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-[length:var(--small-font-size)] flex items-center gap-x-1 hover:text-[var(--title-color)] hover:translate-x-2 duration-300 mt-auto"
              >
                Demo / Repo
                <i className="bx bx-right-arrow-alt text-[length:1.2rem]"></i>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}
