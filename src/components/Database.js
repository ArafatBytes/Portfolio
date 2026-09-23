export default function Database() {
  return (
    <div className="skills__content bg-[var(--glass-bg)] shadow-[var(--glass-shadow)] backdrop-blur-md border border-[var(--glass-border)] pt-8 pb-8 pl-16 pr-16 rounded-3xl transition-transform hover:-translate-y-2 duration-300">
      <h3 className="skills__title font-[var(--font-medium)] text-[length:var(--normal-font-size)] mb-[var(--mb-1-5)] text-center">
        Database management
      </h3>

      <div className="skills__box flex justify-center gap-x-10">
        <div className="skills__group grid gap-y-4 items-start">
          <div className="skills__data flex gap-x-2">
            <i class="bx bxs-badge-check text-[1rem] text-[var(--title-color)]"></i>
            <div>
              <h3 className="skills__name font-[var(--font-medium)] text-[length:var(--normal-font-size)] leading-[1.125rem]">
                SQL
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
                MySQL
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
                Firebase
              </h3>
              <span className="skills__level text-[length:var(--tiny-font-size)]">
                Basic
              </span>
            </div>
          </div>

          <div className="skills__data flex gap-x-2">
            <i class="bx bxs-badge-check text-[1rem] text-[var(--title-color)]"></i>
            <div>
              <h3 className="skills__name font-[var(--font-medium)] text-[length:var(--normal-font-size)] leading-[1.125rem]">
                PostgreSQL
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
                MongoDB
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
                Oracle
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
                File system
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
                Prisma ORM
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
