export default function Info() {
  return (
    <div className="about_info grid gap-6 grid-cols-[8.75rem_8.75rem_8.75rem] gap-x-2 mb-[var(--mb-2)] lg:justify-center md:grid-cols-[1fr_1fr_1fr]">
      <div className="about__box bg-[var(--container-color)] border-[1px] border-[rgba(0,0,0,0.1)] rounded-xl text-center pt-4 pb-4 pl-5 pr-5 lg:pt-3 lg:pb-3 lg:pl-2 lg:pr-2">
        <i className="bx bx-award text-2xl text-[var(--title-color)] mb-[var(--mb-0-5)]"></i>
        <h3 className="about__title text-[length:var(--small-font-size)] font-[var(--font-medium)]">
          Experience
        </h3>
        <span className="about__subtitle text-[length:var(--tiny-font-size)]">
          1+ Year
        </span>
      </div>

      <div className="about__box bg-[var(--container-color)] border-[1px] border-[rgb(0,0,0,0.1)] rounded-xl text-center pt-4 pb-4 pl-5 pr-5 lg:pt-3 lg:pb-3 lg:pl-2 lg:pr-2">
        <i className="bx bx-briefcase-alt text-2xl text-[var(--title-color)] mb-[var(--mb-0-5)]"></i>
        <h3 className="about__title text-[length:var(--small-font-size)] font-[var(--font-medium)]">
          Completed
        </h3>
        <span className="about__subtitle text-[length:var(--tiny-font-size)]">
          10+ Projects
        </span>
      </div>

      <div className="about__box bg-[var(--container-color)] border-[1px] border-[rgb(0,0,0,0.1)] rounded-xl text-center pt-4 pb-4 pl-5 pr-5 lg:pt-3 lg:pb-3 lg:pl-2 lg:pr-2">
        <i className="bx bx-support text-2xl text-[var(--title-color)] mb-[var(--mb-0-5)]"></i>
        <h3 className="about__title text-[length:var(--small-font-size)] font-[var(--font-medium)]">
          Support
        </h3>
        <span className="about__subtitle text-[length:var(--tiny-font-size)]">
          Online 24/7
        </span>
      </div>
    </div>
  );
}
