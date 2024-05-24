"use client"
import React from "react";
import MobileCard from "./MobileCard";

const Features = () => {
  return (
    <section className="bg-custom-gray px-4 pb-5">
      <div className="space-y-[18px] lg:hidden">
        <MobileCard />
        <MobileCard />
        <MobileCard />
      </div>
      <div className="hidden lg:grid lg:grid-cols-6 gap-x-2 xl:grid-cols-8 xl:gap-x-4 border">
        <div className="col-span-4 xl:col-span-4">
          <img
            src="assets/real-estate.png"
            alt=""
            className="rounded-bl-[280px] xl:rounded-bl-[450px] w-full rounded-tl-xl rounded-tr-xl rounded-br-xl"
          />
        </div>
        <div className="pt-[48px] bg-white rounded-lg col-span-2 xl:col-span-3 pb-1 px-1">
          <div className="flex flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center">
              <p>
                <span>01</span>/03{" "}
              </p>
              <h2 className="mt-[119px] font-medium text-3xl xl:text-45l">
                Auto Transport
              </h2>
              <p className="text-center mt-10 text-sm lg:w-[331px] xl:w-[500px] xl:text-lg text-gray-400 px-10">
                Whether you're moving across the country or just across town,
                trust our dedicated team to handle your vehicle with the utmost
                care and professionalism.
                <br />Sit back, relax, and let us handle the
                logistics of your auto transport needs.
              </p>
            </div>
            <button className="bg-custom-blue py-5 w-full rounded-lg text-white">
              GET QUOTE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
