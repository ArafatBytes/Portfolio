import { useState } from "react";
import "../index.css";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <header className="header w-[100%] fixed top-0 left-0 bg-[var(--body-color)] md:bottom-0 md:top-auto z-[100] pl-[1rem] pr-[1rem]">
      <nav className="nav container1 h-[calc(var(--header-height)+1.5rem)] flex justify-between items-center gap-x-4 md:h-[var(--header-height)]">
        <a
          href="index.html"
          className="nav_logo text-[var(--title-color)] font-[var(--font-medium)] animate-bounce"
        >
          Arafat
        </a>

        <div
          className={
            !menu
              ? "md:fixed md:-bottom-96 md:left-0 md:w-full md:p-6 md:pb-16 md:rounded-3xl md:shadow-[0_-1px_4px_rgba(0,0,0,0.20)] md:duration-300 md:bg-[var(--body-color)]"
              : "md:fixed md:left-0 md:w-full md:p-6 md:pb-48 md:rounded-3xl md:shadow-[0_-1px_4px_rgba(0,0,0,0.20)] md:duration-300 md:bg-[var(--body-color)]"
          }
        >
          <ul className="nav_list flex gap-x-8 md:grid md:grid-cols-3 md:gap-y-6 sm:gap-x-0">
            <li className="nav_item">
              <a
                href="#home"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i className="uil uil-estate md:block md:text-[1.2rem] hidden"></i>{" "}
                Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i class="uil uil-user md:block md:text-[1.2rem] hidden"></i>{" "}
                About
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#skills"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i class="uil uil-file-alt md:block md:text-[1.2rem] hidden"></i>{" "}
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#services"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i class="uil uil-briefcase-alt md:block md:text-[1.2rem] hidden"></i>{" "}
                Services
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#portfolio"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i class="uil uil-scenery md:block md:text-[1.2rem] hidden"></i>{" "}
                Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i class="uil uil-message md:block md:text-[1.2rem] hidden"></i>{" "}
                Contact
              </a>
            </li>
          </ul>

          <i
            class={
              !menu
                ? "uil uil-times hidden md:block md:absolute md:right-10 md:bottom-10 md:text-[1.3rem] md:hover:font-[--font-semi-bold] text-[var(--title-color)] font-[var(--font-medium)]"
                : "uil uil-times hidden md:block md:absolute md:right-10 md:bottom-40 md:text-[1.3rem] md:hover:font-[--font-semi-bold] text-[var(--title-color)] font-[var(--font-medium)] cursor-pointer"
            }
            onClick={handleClick}
          ></i>
        </div>
        <div
          className={
            !menu
              ? "text-[var(--title-color)] font-[var(--font-medium)] hidden md:block md:absolute md:right-6 md:text-[1.2rem] md:hover:font-[--font-semi-bold] md:cursor-pointer"
              : "text-[var(--title-color)] font-[var(--font-medium)] hidden md:block md:text-[1.2rem] md:hover:font-[--font-semi-bold] md:cursor-pointer"
          }
          onClick={handleClick}
        >
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
