export default function Frontend() {
  return (
    <div className="skills__content bg-[var(--container-color)] border-[1px] border-[rgba(0,0,0,0.1)] pt-8 pb-8 pl-16 pr-16 rounded-3xl">
      <h3 className="skills__title font-[var(--font-medium)] text-[length:var(--normal-font-size)] mb-[var(--mb-1-5)] text-center">
        Frontend developer
      </h3>

      <div className="skills__box flex justify-center gap-x-10">
        <div className="skills__group grid gap-y-4 items-start">
          <div className="skills__data flex gap-x-2">
            <i class="bx bxs-badge-check text-[1rem] text-[var(--title-color)]"></i>
            <div>
              <h3 className="skills__name font-[var(--font-medium)] text-[length:var(--normal-font-size)] leading-[1.125rem]">
                HTML
              </h3>
              <span className="skills__level text-[length:var(--tiny-font-size)]">
                Advanced
              </span>
            </div>
          </div>

          <div className="skills__data flex gap-x-2">
            <i class="bx bxs-badge-check text-[1rem] text-[var(--title-color)]"></i>
            <div>
              <h3 className="skills__name font-[var(--font-medium)] text-[length:var(--normal-font-size)] leading-[1.125rem]">
                CSS
              </h3>
              <span className="skills__level text-[length:var(--tiny-font-size)]">
                Advanced
              </span>
            </div>
          </div>

          <div className="skills__data flex gap-x-2">
            <i class="bx bxs-badge-check text-[1rem] text-[var(--title-color)]"></i>
            <div>
              <h3 className="skills__name font-[var(--font-medium)] text-[length:var(--normal-font-size)] leading-[1.125rem]">
                JavaScript
              </h3>
              <span className="skills__level text-[length:var(--tiny-font-size)]">
                Intermediate
              </span>
            </div>
          </div>
        </div>

        <div className="skills__group grid gap-y-4 items-start">
          <div className="skills__data flex gap-x-2">
            <i class="bx bxs-badge-check text-[1rem] text-[var(--title-color)]"></i>
            <div>
              <h3 className="skills__name font-[var(--font-medium)] text-[length:var(--normal-font-size)] leading-[1.125rem]">
                Tailwind
              </h3>
              <span className="skills__level text-[length:var(--tiny-font-size)]">
                Advanced
              </span>
            </div>
          </div>

          <div className="skills__data flex gap-x-2">
            <i class="bx bxs-badge-check text-[1rem] text-[var(--title-color)]"></i>
            <div>
              <h3 className="skills__name font-[var(--font-medium)] text-[length:var(--normal-font-size)] leading-[1.125rem]">
                React JS
              </h3>
              <span className="skills__level text-[length:var(--tiny-font-size)]">
                Intermediate
              </span>
            </div>
          </div>

          <div className="skills__data flex gap-x-2">
            <i class="bx bxs-badge-check text-[1rem] text-[var(--title-color)]"></i>
            <div>
              <h3 className="skills__name font-[var(--font-medium)] text-[length:var(--normal-font-size)] leading-[1.125rem]">
                Next JS
              </h3>
              <span className="skills__level text-[length:var(--tiny-font-size)]">
                Intermediate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
