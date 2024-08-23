import React from "react";
import { useState } from "react";

/* eslint-disable jsx-a11y/heading-has-content */
export default function Services() {
  const [show, setShow] = useState(0);

  const showContent = (index) => {
    setShow(index);
  };

  const handleCross = () => {
    setShow(0);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title font-[var(--font-semi-bold)]">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container1 grid gap-6 grid-cols-[repeat(3,16.875rem)] justify-center gap-x-[1.8rem] lg:min-w-[769px]grid-cols-[repeat(3,13.625rem)] md:grid-cols-[max-content]">
        <div className="services__content relative bg-[var(--container-color)] border-[1px] border-[rgba(0,0,0,0.1)] pt-24 pb-8 pl-10 pr-8 rounded-3xl">
          <div>
            <i class="uil uil-web-grid block text-[2rem] text-[var(--title-color)] mb-[var(--mb-1)]"></i>
            <h3 className="services__title font-[var(--font-medium)] text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
              Web Designer
            </h3>
          </div>

          <span
            className="services__button text-[length:var(--small-font-size)] text-[--title-color] inline-flex gap-x-1 items-center cursor-pointer hover:translate-x-1 duration-300"
            onClick={() => showContent(1)}
          >
            View More
            <i class="bx bx-right-arrow-alt text-[1rem]"></i>
          </span>

          <div
            className={
              show === 1
                ? "services__modal fixed top-0 bottom-0 right-0 left-0 z-[var(--z-modal)] visible flex justify-center items-center opacity-100 pt-0 pb-0 pl-4 pr-4 bg-[rgba(0,0,0,0.5)]"
                : "services__modal fixed top-0 bottom-0 right-0 left-0 z-[var(--z-modal)] hidden flex justify-center items-center opacity-100 pt-0 pb-0 pl-4 pr-4 bg-[rgba(0,0,0,0.5)]"
            }
          >
            <div className="services__modal-content w-[31.25rem] relative bg-[var(--container-color)] rounded-3xl pt-[4.5rem] pl-10 pr-10 pb-10 sm:w-80 sm:pl-3 sm:pr-3 sm:pt-10">
              <i
                class="uil uil-times absolute top-6 right-6 text-[var(--title-color)] text-[length:1.5rem] cursor-pointer"
                onClick={handleCross}
              ></i>
              <h3 className="services__modal-title font-[var(--font-medium)] text-center text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
                Web Designer
              </h3>
              <p className="services__modal-description text-center text-[length:var(--small-font-size)] pl-10 pr-10 mb-[var(--mb-2)] sm:p-0">
                With a strong foundation as a web designer built over the past
                year, I specialize in creating visually compelling and
                user-friendly websites tailored to enhance your brand's online
                presence. Committing to delivering high-quality designs that
                ensures your business to stand out in the digital landscape.
              </p>

              <ul className="services__modal-services grid gap-6 gap-y-3">
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I create unique website designs tailored to your brand and
                    business needs.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I ensure your website looks great and functions well on all
                    devices.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I optimize your site for easy navigation and
                    user-friendliness.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I design with SEO in mind to boost your site's search engine
                    visibility.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I provide regular updates and support to keep your website
                    running smoothly.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content relative bg-[var(--container-color)] border-[1px] border-[rgba(0,0,0,0.1)] pt-24 pb-8 pl-10 pr-8 rounded-3xl">
          <div>
            <i class="uil uil-arrow block text-[2rem] text-[var(--title-color)] mb-[var(--mb-1)]"></i>
            <h3 className="services__title font-[var(--font-medium)] text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
              UI/UX Designer
            </h3>
          </div>

          <span
            className="services__button text-[length:var(--small-font-size)] text-[--title-color] inline-flex gap-x-1 items-center cursor-pointer hover:translate-x-1 duration-300"
            onClick={() => showContent(2)}
          >
            View More
            <i class="bx bx-right-arrow-alt text-[1rem]"></i>
          </span>

          <div
            className={
              show === 2
                ? "services__modal fixed top-0 bottom-0 right-0 left-0 z-[var(--z-modal)] visible flex justify-center items-center opacity-100 pt-0 pb-0 pl-4 pr-4 bg-[rgba(0,0,0,0.5)]"
                : "services__modal fixed top-0 bottom-0 right-0 left-0 z-[var(--z-modal)] hidden flex justify-center items-center opacity-100 pt-0 pb-0 pl-4 pr-4 bg-[rgba(0,0,0,0.5)]"
            }
          >
            <div className="services__modal-content w-[31.25rem] relative bg-[var(--container-color)] rounded-3xl pt-[4.5rem] pl-10 pr-10 pb-10 sm:w-80 sm:pl-3 sm:pr-3 sm:pt-10">
              <i
                class="uil uil-times absolute top-6 right-6 text-[var(--title-color)] text-[length:1.5rem] cursor-pointer"
                onClick={handleCross}
              ></i>
              <h3 className="services__modal-title font-[var(--font-medium)] text-center text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
                UI/UX Designer
              </h3>
              <p className="services__modal-description text-center text-[length:var(--small-font-size)] pl-10 pr-10 mb-[var(--mb-2)] sm:p-0">
                As a UI/UX designer with almost a year of experience, I bring a
                deep understanding of user behavior to craft interfaces that are
                not only visually striking but also highly intuitive. My
                approach ensures that your digital products stand out by
                offering a seamless blend of form and function, driving both
                user engagement and business growth.
              </p>

              <ul className="services__modal-services grid gap-6 gap-y-3">
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I design based on in-depth user research to meet your
                    audience's needs.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I create detailed wireframes and prototypes to refine the
                    user journey.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I design visually appealing interfaces that reflect your
                    brand and enhance UX.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I conduct testing to ensure your product is user-friendly
                    and meets expectations.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I craft intuitive interactions that improve the overall user
                    experience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content relative bg-[var(--container-color)] border-[1px] border-[rgba(0,0,0,0.1)] pt-24 pb-8 pl-10 pr-8 rounded-3xl">
          <div>
            <i class="uil uil-browser block text-[2rem] text-[var(--title-color)] mb-[var(--mb-1)]"></i>
            <h3 className="services__title font-[var(--font-medium)] text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
              Web Developer
            </h3>
          </div>

          <span
            className="services__button text-[length:var(--small-font-size)] text-[--title-color] inline-flex gap-x-1 items-center cursor-pointer hover:translate-x-1 duration-300"
            onClick={() => showContent(3)}
          >
            View More
            <i class="bx bx-right-arrow-alt text-[1rem]"></i>
          </span>

          <div
            className={
              show === 3
                ? "services__modal fixed top-0 bottom-0 right-0 left-0 z-[var(--z-modal)] visible flex justify-center items-center opacity-100 pt-0 pb-0 pl-4 pr-4 bg-[rgba(0,0,0,0.5)]"
                : "services__modal fixed top-0 bottom-0 right-0 left-0 z-[var(--z-modal)] hidden flex justify-center items-center opacity-100 pt-0 pb-0 pl-4 pr-4 bg-[rgba(0,0,0,0.5)]"
            }
          >
            <div className="services__modal-content w-[31.25rem] relative bg-[var(--container-color)] rounded-3xl pt-[4.5rem] pl-10 pr-10 pb-10 sm:w-80 sm:pl-3 sm:pr-3 sm:pt-10">
              <i
                class="uil uil-times absolute top-6 right-6 text-[var(--title-color)] text-[length:1.5rem] cursor-pointer"
                onClick={handleCross}
              ></i>
              <h3 className="services__modal-title font-[var(--font-medium)] text-center text-[length:var(--h3-font-size)] mb-[var(--mb-1)]">
                Web Developer
              </h3>
              <p className="services__modal-description text-center text-[length:var(--small-font-size)] pl-10 pr-10 mb-[var(--mb-2)] sm:p-0">
                Being a web developer with nearly a year of experience, I
                specialize in creating robust, high-performance websites that
                are both visually appealing and technically sound. My focus on
                clean, efficient code ensures your website not only looks great
                but also functions seamlessly, driving success for your
                business.
              </p>

              <ul className="services__modal-services grid gap-6 gap-y-3">
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I create websites tailored to your business needs using
                    modern technologies.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I ensure your site works smoothly on all devices.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I optimize your site for fast loading and top performance.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I manage the server-side components for reliability and
                    scalability.
                  </p>
                </li>
                <li className="services__modal-service flex items-center gap-x-2">
                  <i class="uil uil-check-circle text-[length:1.1rem] text-[var(--title-color)]"></i>
                  <p className="services__modal-info text-[length:var(--small-font-size)]">
                    I implement strong security to protect your site from
                    threats.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
