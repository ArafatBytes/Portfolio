import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [show, setShow] = useState(0);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section className="services section" id="services">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section__title font-[var(--font-semi-bold)]"
      >
        Services
      </motion.h2>
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="section__subtitle"
      >
        What I offer
      </motion.span>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="services__container container1 grid gap-6 grid-cols-[repeat(3,16.875rem)] justify-center gap-x-[1.8rem] md:grid-cols-[18rem] md:gap-y-6 md:px-4"
      >
        {/* Service 1 */}
        <motion.div variants={itemVariants} className="services__content relative bg-[var(--glass-bg)] shadow-[var(--glass-shadow)] backdrop-blur-md border border-[var(--glass-border)] pt-24 pb-8 pl-10 pr-8 rounded-3xl transition-transform hover:-translate-y-2 duration-300">
          <div>
            <i className="uil uil-web-grid block text-[2rem] text-[var(--title-color)] mb-[var(--mb-1)]"></i>
            <h3 className="services__title font-[var(--font-medium)] text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
              Web Designer
            </h3>
          </div>
          <span className="services__button text-[length:var(--small-font-size)] text-[--title-color] inline-flex gap-x-1 items-center cursor-pointer hover:translate-x-1 duration-300" onClick={() => setShow(1)}>
            View More
            <i className="bx bx-right-arrow-alt text-[1rem]"></i>
          </span>
        </motion.div>

        {/* Service 2 */}
        <motion.div variants={itemVariants} className="services__content relative bg-[var(--glass-bg)] shadow-[var(--glass-shadow)] backdrop-blur-md border border-[var(--glass-border)] pt-24 pb-8 pl-10 pr-8 rounded-3xl transition-transform hover:-translate-y-2 duration-300">
          <div>
            <i className="uil uil-arrow block text-[2rem] text-[var(--title-color)] mb-[var(--mb-1)]"></i>
            <h3 className="services__title font-[var(--font-medium)] text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
              UI/UX Designer
            </h3>
          </div>
          <span className="services__button text-[length:var(--small-font-size)] text-[--title-color] inline-flex gap-x-1 items-center cursor-pointer hover:translate-x-1 duration-300" onClick={() => setShow(2)}>
            View More
            <i className="bx bx-right-arrow-alt text-[1rem]"></i>
          </span>
        </motion.div>

        {/* Service 3 */}
        <motion.div variants={itemVariants} className="services__content relative bg-[var(--glass-bg)] shadow-[var(--glass-shadow)] backdrop-blur-md border border-[var(--glass-border)] pt-24 pb-8 pl-10 pr-8 rounded-3xl transition-transform hover:-translate-y-2 duration-300">
          <div>
            <i className="uil uil-browser block text-[2rem] text-[var(--title-color)] mb-[var(--mb-1)]"></i>
            <h3 className="services__title font-[var(--font-medium)] text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
              Web Developer
            </h3>
          </div>
          <span className="services__button text-[length:var(--small-font-size)] text-[--title-color] inline-flex gap-x-1 items-center cursor-pointer hover:translate-x-1 duration-300" onClick={() => setShow(3)}>
            View More
            <i className="bx bx-right-arrow-alt text-[1rem]"></i>
          </span>
        </motion.div>
      </motion.div>

      {/* Modals outside of stacking contexts */}
      <AnimatePresence>
        {show !== 0 && (
          <motion.div 
            variants={modalBackdropVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="services__modal fixed top-0 bottom-0 right-0 left-0 z-[var(--z-modal)] flex justify-center items-center pt-0 pb-0 pl-4 pr-4 bg-[var(--modal-overlay)] backdrop-blur-sm"
            onClick={() => setShow(0)}
          >
            <motion.div 
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
              className="services__modal-content w-[31.25rem] relative bg-[var(--glass-bg)] shadow-[var(--glass-shadow)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl pt-[4.5rem] pl-10 pr-10 pb-10 md:w-[90%] md:p-6 md:pt-12"
            >
              <i className="uil uil-times absolute top-6 right-6 text-[var(--title-color)] text-[length:1.5rem] cursor-pointer" onClick={() => setShow(0)}></i>
              
              {show === 1 && (
                <>
                  <h3 className="services__modal-title font-[var(--font-medium)] text-center text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
                    Web Designer
                  </h3>
                  <p className="services__modal-description text-center text-[length:var(--small-font-size)] pl-10 pr-10 mb-[var(--mb-2)] sm:p-0">
                    I design award-winning, pixel-perfect websites that command attention. Every layout is meticulously crafted to reflect your brand's unique identity while driving user engagement.
                  </p>
                  <ul className="services__modal-services grid gap-6 gap-y-3">
                    {["Bespoke, premium web designs that elevate your brand authority.", "Flawless responsive layouts for mobile, tablet, and desktop.", "Strategic UI architecture optimized for maximum conversion rates.", "Cutting-edge aesthetics, including 3D elements and modern glassmorphism."].map((text, idx) => (
                      <li key={idx} className="services__modal-service flex items-center gap-x-2">
                        <i className="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                        <p className="services__modal-info text-[length:var(--small-font-size)]">{text}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {show === 2 && (
                <>
                  <h3 className="services__modal-title font-[var(--font-medium)] text-center text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
                    UI/UX Designer
                  </h3>
                  <p className="services__modal-description text-center text-[length:var(--small-font-size)] pl-10 pr-10 mb-[var(--mb-2)] sm:p-0">
                    I bridge the gap between human psychology and digital interfaces. By engineering frictionless user journeys, I create intuitive, visually stunning experiences that users love.
                  </p>
                  <ul className="services__modal-services grid gap-6 gap-y-3">
                    {["Deep-dive user research and behavioral analysis.", "High-fidelity wireframing and interactive prototyping.", "Frictionless user flows designed for maximum retention.", "Continuous testing and data-driven UX optimization."].map((text, idx) => (
                      <li key={idx} className="services__modal-service flex items-center gap-x-2">
                        <i className="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                        <p className="services__modal-info text-[length:var(--small-font-size)]">{text}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {show === 3 && (
                <>
                  <h3 className="services__modal-title font-[var(--font-medium)] text-center text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
                    Web Developer
                  </h3>
                  <p className="services__modal-description text-center text-[length:var(--small-font-size)] pl-10 pr-10 mb-[var(--mb-2)] sm:p-0">
                    I architect lightning-fast, scalable web applications using the modern tech stack. Your platform won't just look incredible—it will perform flawlessly under pressure.
                  </p>
                  <ul className="services__modal-services grid gap-6 gap-y-3">
                    {["Custom full-stack development tailored to your exact business logic.", "Lightning-fast page loads optimized for Core Web Vitals.", "Robust, scalable backend architecture and API integrations.", "Enterprise-grade security implementations to protect your data."].map((text, idx) => (
                      <li key={idx} className="services__modal-service flex items-center gap-x-2">
                        <i className="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                        <p className="services__modal-info text-[length:var(--small-font-size)]">{text}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
