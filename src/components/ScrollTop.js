import { useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(0);
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 560) {
      setShow(1);
    } else {
      setShow(0);
    }
  });

  return (
    <a
      href="#home"
      className={
        show === 1
          ? "scrollup fixed right-[2.5rem] bottom-[3rem] bg-[var(--title-color)] pt-[0.3rem] pb-[0.3rem] pl-[0.5rem] pr-[0.5rem] rounded-lg z-[var(--z-tooltip)] hover:bg-[var(--title-color-dark)] duration-300 opacity-[0.8] md:bottom-[4rem] sm:right-[1rem]"
          : "scrollup fixed right-[2.5rem] bottom-[-20%] bg-[var(--title-color)] pt-[0.3rem] pb-[0.3rem] pl-[0.5rem] pr-[0.5rem] rounded-lg z-[var(--z-tooltip)] hover:bg-[var(--title-color-dark)] duration-300 opacity-[0.8]"
      }
    >
      <i class="uil uil-arrow-up text-[length:1.5rem] text-[var(--container-color)] hover:text-[length:1.6rem] duration-300 sm:text-[length:1.1rem]"></i>
    </a>
  );
}
