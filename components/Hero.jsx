import React from "react";
import Play from "./Play";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section className="bg-[url('/assets/thinkseb-transformed.png')] bg-no-repeat bg-cover h-screen px-4 lg:px-10 pt-40 xl:pt-72">
      <div className="h-full pb-[40px] flex flex-col justify-between">
        <div id="upper" className="">
          <p className=" text-white text-sm">A national moving company</p>
          <h2 className="text-white font-medium text-5xl md:text-6xl lg:text-7xl xl:text-[110px]">
            Move Stress-Free <br className="hidden md:block" /> with Captain
          </h2>
        </div>
        <div className="md:flex md:justify-between items-end md:h-[70%]">
          <p className="text-white my-10 md:m-0 max-w-[342px]">
            Whether you’re moving across town or across the country, our
            experienced and professional team of movers is here to help!
          </p>
          <div className="md:flex md:flex-col md:justify-between md:h-full">
            <Play />

            <div className="mt-10">
              <HeroCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
