export default function Footer() {
  return (
    <footer className="footer bg-[var(--container-color)] border-t-[1px] border-t-[color:rgba(0,0,0,0.1)]">
      <div className="footer__container container1 pt-8 pb-24">
        <h1 className="footer__title text-[color:var(--title-color)] text-center mb-[var(--mb-2)] font-[var(--font-semi-bold)] text-[length:var(--h1-font-size)]">
          Arafat
        </h1>
        <ul className="footer__list flex justify-center gap-x-6 mb-[var(--mb-2)]">
          <li>
            <a
              href="#about"
              className="footer__link text-[color:var(--title-color)] hover:text-[var(--title-color-dark)]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="footer__link text-[color:var(--title-color)] hover:text-[var(--title-color-dark)]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="footer__link text-[color:var(--title-color)] hover:text-[var(--title-color-dark)]"
            >
              Services
            </a>
          </li>
        </ul>
        <div className="footer__social flex justify-center gap-x-5">
          <a
            href="https://www.facebook.com/profile.php?id=100011769463719&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook bg-[var(--title-color)] text-[var(--container-color)] text-[length:1.125rem] p-[0.4rem] rounded-lg inline-flex hover:bg-[var(--title-color-dark)] hover:scale-110 duration-300"></i>
          </a>

          <a
            href="https://www.instagram.com/keeeep_scrolling?igsh=MTJqNWljb2ZxczJxYw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram bg-[var(--title-color)] text-[var(--container-color)] text-[length:1.125rem] p-[0.4rem] rounded-lg inline-flex hover:bg-[var(--title-color-dark)] hover:scale-110 duration-300"></i>
          </a>

          <a href="https://t.me/arafat_ullah" target="_blank" rel="noreferrer">
            <i class="bx bxl-telegram bg-[var(--title-color)] text-[var(--container-color)] text-[length:1.125rem] p-[0.4rem] rounded-lg inline-flex hover:bg-[var(--title-color-dark)] hover:scale-110 duration-300"></i>
          </a>
        </div>

        <span className="footer__copy block mt-[4.5rem] text-[var(--title-color)] text-center text-[length:var(--smaller-font-size)]">
          &#169; ArafatUllah. All rights reserved
        </span>
      </div>
    </footer>
  );
}
