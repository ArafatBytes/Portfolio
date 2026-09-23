import "../index.css";

export default function Social() {
  return (
    <div className="grid grid-cols-[max-content] gap-y-4 md:flex md:gap-x-6 md:justify-center">
      <a
        href="https://www.instagram.com/keeeep_scrolling/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram text-[1.25rem] text-[color:var(--title-color)] hover:text-[color:var(--title-color-dark)] hover:text-[1.5rem] duration-300 animate-pulse"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/arafat-ullah-17261a2a7/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt text-[1.25rem] text-[color:var(--title-color)] hover:text-[color:var(--title-color-dark)] hover:text-[1.5rem] duration-300 animate-pulse"></i>
      </a>
      <a href="https://github.com/ArafatBytes" target="_blank" rel="noreferrer">
        <i className="uil uil-github-alt text-[1.25rem] text-[color:var(--title-color)] hover:text-[color:var(--title-color-dark)] hover:text-[1.5rem] duration-300 animate-pulse"></i>
      </a>
    </div>
  );
}
