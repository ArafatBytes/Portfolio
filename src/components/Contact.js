import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_87523kf", "template_cuewaem", form.current, {
      publicKey: "aAUeVfmEREJB5qfwF",
    });
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title font-[var(--font-semi-bold)]">
        Contact Me
      </h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container1 grid gap-6 grid-cols-[repeat(2,max-content)] justify-center gap-x-24 pb-12 md:grid-cols-[1fr] md:gap-y-12">
        <div className="contact__content">
          <h3 className="contact__title text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--h3-font-size)] text-center mb-[var(--mb-1-5)]">
            Talk to me
          </h3>

          <div className="contact__info grid gap-y-4 grid-cols-[18.75rem] md:justify-center">
            <div className="contact__card bg-[var(--container-color)] border-[1px] border-[rgba(0,0,0,0.1)] p-4 text-center rounded-xl">
              <i class="bx bx-mail-send text-[var(--title-color)] text-[length:2rem] mb-[var(--mb-0-25)]"></i>
              <h3 className="contact__card-title text-[var(--title-color)] font-[var(--font-medium text-[length:var(--small-font-size)])]">
                Email
              </h3>
              <span className="contact__card-data text-[length:var(--small-font-size)] block mb-[var(--mb-0-75)]">
                mdarafat1661@gmail.com
              </span>
              <a
                href="mailto:mdarafat1661@gmail.com"
                className="contact__button text-[var(--title-color)] text-[length:var(--small-font-size)] inline-flex justify-center items-center gap-x-1 hover:translate-x-1 duration-300"
                target="_blank"
                rel="noreferrer"
              >
                Write me
                <i class="bx bx-right-arrow-alt text-[length:1rem]"></i>
              </a>
            </div>

            <div className="contact__card bg-[var(--container-color)] border-[1px] border-[rgba(0,0,0,0.1)] p-4 text-center rounded-xl">
              <i class="bx bxl-whatsapp text-[var(--title-color)] text-[length:2rem] mb-[var(--mb-0-25)]"></i>
              <h3 className="contact__card-title text-[var(--title-color)] font-[var(--font-medium text-[length:var(--small-font-size)])]">
                Whatsapp
              </h3>
              <span className="contact__card-data text-[length:var(--small-font-size)] block mb-[var(--mb-0-75)]">
                +880 1818‑902332
              </span>
              <a
                href="https://wa.me/1818902332?text=Hello,%20I'd%20like%20to%20know%20more%20about%20your%20services"
                className="contact__button text-[var(--title-color)] text-[length:var(--small-font-size)] inline-flex justify-center items-center gap-x-1 hover:translate-x-1 duration-300"
                target="_blank"
                rel="noreferrer"
              >
                Write me
                <i class="bx bx-right-arrow-alt text-[length:1rem]"></i>
              </a>
            </div>

            <div className="contact__card bg-[var(--container-color)] border-[1px] border-[rgba(0,0,0,0.1)] p-4 text-center rounded-xl">
              <i class="bx bxl-messenger text-[var(--title-color)] text-[length:2rem] mb-[var(--mb-0-25)]"></i>
              <h3 className="contact__card-title text-[var(--title-color)] font-[var(--font-medium text-[length:var(--small-font-size)])]">
                Messenger
              </h3>
              <span className="contact__card-data text-[length:var(--small-font-size)] block mb-[var(--mb-0-75)]">
                Arafat Ullah
              </span>
              <a
                href="https://m.me/100011769463719"
                className="contact__button text-[var(--title-color)] text-[length:var(--small-font-size)] inline-flex justify-center items-center gap-x-1 hover:translate-x-1 duration-300"
                target="_blank"
                rel="noreferrer"
              >
                Write me
                <i class="bx bx-right-arrow-alt text-[length:1rem]"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title text-[var(--title-color)] font-[var(--font-medium)] text-[length:var(--h3-font-size)] text-center mb-[var(--mb-1-5)]">
            Write me your project
          </h3>

          <form
            className="contact__form w-[22.5rem] md:ml-auto md:mr-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="contact__form-div relative h-16 mb-[var(--mb-2)]">
              <label className="contact__form-tag absolute left-[1.25rem] top-[-0.75rem] text-[length:var(--smaller-font-size)] bg-[var(--body-color)] z-[10] p-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input absolute top-0 left-0 w-full h-full border-[2px] border-[color:rgba(0,0,0,0.3)] bg-none text-[var(--text-color)] outline-[none] rounded-xl p-6 z-[1]"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact__form-div relative h-16 mb-[var(--mb-2)]">
              <label className="contact__form-tag absolute left-[1.25rem] top-[-0.75rem] text-[length:var(--smaller-font-size)] bg-[var(--body-color)] z-[10] p-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input absolute top-0 left-0 w-full h-full border-[2px] border-[color:rgba(0,0,0,0.3)] bg-none text-[var(--text-color)] outline-[none] rounded-xl p-6 z-[1]"
                placeholder="Enter your email"
              />
            </div>

            <div className="contact__form-div relative h-16 mb-[var(--mb-2)]">
              <label className="contact__form-tag absolute left-[1.25rem] top-[-0.75rem] text-[length:var(--smaller-font-size)] bg-[var(--body-color)] z-[10] p-1">
                Project
              </label>
              <textarea
                cols={30}
                rows={10}
                name="project"
                className="contact__form-input absolute top-0 left-0 w-full border-[2px] border-[color:rgba(0,0,0,0.3)] bg-none text-[var(--text-color)] outline-[none] rounded-xl p-6 z-[1] h-[11rem] resize-none"
                placeholder="Write your project"
              ></textarea>
            </div>

            <button className="button button--flex mt-28">
              Send Message
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
