import "../index.css";
import Data from "./Data";
import Social from "./Social";
import image from "../assets/profile.jpg";
import ScrollDown from "./ScrollDown";

export default function Home() {
  return (
    <section className="home section md:pt-24" id="home">
      <div className="home_container container1 grid gap-y-20">
        <div className="home_content grid grid-cols-[116px_1fr_1fr] pt-24 gap-x-10 items-center lg:gap-x-5 md:grid-cols-[0.5fr_3fr] md:pt-14">
          <Social />
          <div
            className="bg-no-repeat bg-center w-[300px] h-[300px] bg-cover shadow-[inset_0_0_0_9px_rgb(255_255_255/30%)] order-1 justify-self-center animate-profile_animate md:h-52 md:w-52 md:shadow-[inset_0_0_0_6px_rgb(255_255_255/30%)] md:justify-self-center lg:h-64 lg:w-64 md:order-[initial] sm:h-48 sm:w-48"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}
