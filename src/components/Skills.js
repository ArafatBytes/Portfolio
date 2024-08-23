import Backend from "./Backend";
import Frontend from "./Frontend";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title font-[var(--font-semi-bold)]">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container1 grid gap-6 grid-cols-[23.5rem_23.5rem] gap-x-12 justify-center lg:grid-cols-[max-content] lg:gap-y-8">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}
