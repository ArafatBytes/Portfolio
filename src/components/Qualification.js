import { useState } from "react";

/* eslint-disable jsx-a11y/heading-has-content */
export default function Qualification() {
  const [toggle, setToggle] = useState(1);

  const handleClick = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title font-[var(--font-semi-bold)]">
        Qualification
      </h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container1 max-w-[48rem] lg:ml-auto lg:mr-auto">
        <div className="qualification__tabs flex justify-center mb-[var(--mb-2)]">
          <div
            className="qualification__button button--flex text-[length:var(--h3-font-size)] font-[var(--font-medium)] text-[var(--title-color)] ml-[var(--mb-1)] mr-[var(--mb-1)] cursor-pointer hover:text-[var(--title-color-dark)] focus:text-[var(--title-color-dark)]"
            onClick={() => handleClick(1)}
          >
            <i class="uil uil-graduation-cap text-[length:1.8rem] mr-[var(--mb-0-25)]"></i>
            Education
          </div>

          <div
            className="qualification__button button--flex text-[length:var(--h3-font-size)] font-[var(--font-medium)] text-[var(--title-color)] ml-[var(--mb-1)] mr-[var(--mb-1)] cursor-pointer hover:text-[var(--title-color-dark)] focus:text-[var(--title-color-dark)]"
            onClick={() => handleClick(2)}
          >
            <i class="uil uil-briefcase-alt text-[length:1.8rem] mr-[var(--mb-0-25)]"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections grid justify-center grid-cols-[0.5fr] md:grid-cols-[initial]">
          <div
            className={
              toggle === 1
                ? "qualification__content"
                : "qualification__content hidden"
            }
          >
            <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
              <div>
                <h3 className="qualification__title font-[var(--font-medium)] text-[length:var(--normal-font-size)]">
                  MERN Stack
                </h3>
                <span className="qualification__subtitle text-[length:var(--small-font-size)] inline-block mb-[var(--mb-1)]">
                  Online - LWS
                </span>
                <div className="qualification__calender text-[length:var(--small-font-size)]">
                  <i class="uil uil-calendar-alt"></i>2024-present
                </div>
              </div>

              <div>
                <span className="qualification__rounder inline-block h-[0.813rem] w-[0.813rem] bg-[var(--text-color)] rounded-full"></span>
                <span className="qualification__line bg-[var(--text-color)] w-[1px] h-full block translate-x-[0.375rem] translate-y-[-0.438rem]"></span>
              </div>
            </div>

            <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
              <div></div>

              <div>
                <span className="qualification__rounder inline-block h-[0.813rem] w-[0.813rem] bg-[var(--text-color)] rounded-full"></span>
                <span className="qualification__line bg-[var(--text-color)] w-[1px] h-full block translate-x-[0.375rem] translate-y-[-0.438rem]"></span>
              </div>

              <div>
                <h3 className="qualification__title font-[var(--font-medium)] text-[length:var(--normal-font-size)]">
                  Web Development
                </h3>
                <span className="qualification__subtitle text-[length:var(--small-font-size)] inline-block mb-[var(--mb-1)]">
                  Online - LWS
                </span>
                <div className="qualification__calender text-[length:var(--small-font-size)]">
                  <i class="uil uil-calendar-alt"></i>2024-present
                </div>
              </div>
            </div>

            <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
              <div>
                <h3 className="qualification__title font-[var(--font-medium)] text-[length:var(--normal-font-size)]">
                  Web Design
                </h3>
                <span className="qualification__subtitle text-[length:var(--small-font-size)] inline-block mb-[var(--mb-1)]">
                  Online - Odin Com
                </span>
                <div className="qualification__calender text-[length:var(--small-font-size)]">
                  <i class="uil uil-calendar-alt"></i>2023-present
                </div>
              </div>

              <div>
                <span className="qualification__rounder inline-block h-[0.813rem] w-[0.813rem] bg-[var(--text-color)] rounded-full"></span>
                <span className="qualification__line bg-[var(--text-color)] w-[1px] h-full block translate-x-[0.375rem] translate-y-[-0.438rem]"></span>
              </div>
            </div>

            <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
              <div></div>

              <div>
                <span className="qualification__rounder inline-block h-[0.813rem] w-[0.813rem] bg-[var(--text-color)] rounded-full"></span>
                <span className="qualification__line bg-[var(--text-color)] w-[1px] h-full block translate-x-[0.375rem] translate-y-[-0.438rem]"></span>
              </div>

              <div>
                <h3 className="qualification__title font-[var(--font-medium)] text-[length:var(--normal-font-size)]">
                  Computer Science
                </h3>
                <span className="qualification__subtitle text-[length:var(--small-font-size)] inline-block mb-[var(--mb-1)]">
                  Bangladesh - IUT
                </span>
                <div className="qualification__calender text-[length:var(--small-font-size)]">
                  <i class="uil uil-calendar-alt"></i>2023-present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__content"
                : "qualification__content hidden"
            }
          >
            <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
              <div>
                <h3 className="qualification__title font-[var(--font-medium)] text-[length:var(--normal-font-size)]">
                  Web Developer
                </h3>
                <span className="qualification__subtitle text-[length:var(--small-font-size)] inline-block mb-[var(--mb-1)]">
                  Fiverr - Intl Client
                </span>
                <div className="qualification__calender text-[length:var(--small-font-size)]">
                  <i class="uil uil-calendar-alt"></i>2024-present
                </div>
              </div>

              <div>
                <span className="qualification__rounder inline-block h-[0.813rem] w-[0.813rem] bg-[var(--text-color)] rounded-full"></span>
                <span className="qualification__line bg-[var(--text-color)] w-[1px] h-full block translate-x-[0.375rem] translate-y-[-0.438rem]"></span>
              </div>
            </div>

            <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
              <div></div>

              <div>
                <span className="qualification__rounder inline-block h-[0.813rem] w-[0.813rem] bg-[var(--text-color)] rounded-full"></span>
                <span className="qualification__line bg-[var(--text-color)] w-[1px] h-full block translate-x-[0.375rem] translate-y-[-0.438rem]"></span>
              </div>

              <div>
                <h3 className="qualification__title font-[var(--font-medium)] text-[length:var(--normal-font-size)]">
                  UI/UX Designer
                </h3>
                <span className="qualification__subtitle text-[length:var(--small-font-size)] inline-block mb-[var(--mb-1)]">
                  Fiverr - Intl Client
                </span>
                <div className="qualification__calender text-[length:var(--small-font-size)]">
                  <i class="uil uil-calendar-alt"></i>2024-present
                </div>
              </div>
            </div>

            <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
              <div>
                <h3 className="qualification__title font-[var(--font-medium)] text-[length:var(--normal-font-size)]">
                  Web Designer
                </h3>
                <span className="qualification__subtitle text-[length:var(--small-font-size)] inline-block mb-[var(--mb-1)]">
                  Fiverr - Intl Client
                </span>
                <div className="qualification__calender text-[length:var(--small-font-size)]">
                  <i class="uil uil-calendar-alt"></i>2024-present
                </div>
              </div>

              <div>
                <span className="qualification__rounder inline-block h-[0.813rem] w-[0.813rem] bg-[var(--text-color)] rounded-full"></span>
                <span className="qualification__line bg-[var(--text-color)] w-[1px] h-full block translate-x-[0.375rem] translate-y-[-0.438rem]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
