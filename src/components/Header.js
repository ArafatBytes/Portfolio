import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import "../index.css";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <header className="header w-[100%] fixed top-0 left-0 bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--glass-border)] md:bottom-0 md:top-auto md:border-t md:border-b-0 z-[100] pl-[1rem] pr-[1rem]">
      <nav className="nav container1 h-[calc(var(--header-height)+1.5rem)] flex justify-between items-center gap-x-4 md:h-[var(--header-height)]">
        <a
          href="index.html"
          className="nav_logo text-[var(--title-color)] font-[var(--font-medium)] animate-bounce"
        >
          Arafat
        </a>

        <div
          className={`static w-auto p-0 shadow-none bg-transparent flex rounded-none md:fixed md:bottom-0 md:left-0 md:w-full md:p-8 md:pt-14 md:rounded-t-[2rem] md:shadow-[0_-4px_24px_rgba(0,0,0,0.15)] md:transition-transform md:duration-300 md:bg-[var(--container-color)] md:z-[1000] ${
            !menu ? "md:translate-y-[150%]" : "md:translate-y-0"
          }`}
        >
          <ul className="nav_list flex gap-x-8 md:grid md:grid-cols-3 md:gap-6 md:w-full">
            <li className="nav_item">
              <a
                href="#home"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i className="uil uil-estate hidden md:block md:text-[1.2rem]"></i>{" "}
                Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i className="uil uil-user hidden md:block md:text-[1.2rem]"></i>{" "}
                About
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#skills"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i className="uil uil-file-alt hidden md:block md:text-[1.2rem]"></i>{" "}
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#services"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i className="uil uil-briefcase-alt hidden md:block md:text-[1.2rem]"></i>{" "}
                Services
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#portfolio"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i className="uil uil-scenery hidden md:block md:text-[1.2rem]"></i>{" "}
                Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                className="nav_link flex flex-col items-center text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--small-font-size)] hover:text-[length:var(--normal-font-size)] duration-300 focus:font-[--font-semi-bold]"
              >
                <i className="uil uil-message hidden md:block md:text-[1.2rem]"></i>{" "}
                Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times hidden md:block md:absolute md:right-6 md:top-5 md:text-[1.8rem] md:cursor-pointer text-[var(--title-color)] hover:font-[--font-semi-bold]"
            onClick={handleClick}
          ></i>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-[var(--title-color)] hover:text-[var(--title-color-dark)] transition-colors">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div
            className="text-[var(--title-color)] font-[var(--font-medium)] text-[1.2rem] cursor-pointer hidden md:block hover:font-[--font-semi-bold]"
            onClick={handleClick}
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
