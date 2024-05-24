import React from "react";
import Marquee from "react-fast-marquee";

const MovingSections = () => {
  const logos = [
    { id: 1, logo: "Digital Journal" },
    { id: 2, logo: "Real Estate Today" },
    { id: 3, logo: "Benzinga" },
    { id: 4, logo: "Nexus" },
  ];
  return (
    <section className="bg-white px-4 lg:px-10 h-[80vh] flex flex-col items-center justify-center">
      <div>
        <h2 className="text-sm mb-2 text-[#06151F] opacity-70">
          #1 moving company
        </h2>
        <p className="text-3xl font-medium md:text-4xl lg:text-5xl max-w-[905px]">
          Captain Van Lines is a leading moving and storage company in USA. We
          offer a range of reliable and affordable moving services to
          residential and commercial clients.
        </p>
        <div className="mt-10 xl:mt-[200px] lg:flex lg:flex-row-reverse lg:justify-between items-end">
          <p className="text-sm text-[#06151FB2] opacity-70 md:w-3/4 lg:w-[30%] xl:w-[13%]">
            Our mission is to provide the highest level of service and support
            throughout the moving process, while maintaining honesty, integrity,
            and transparency in all our business dealings. We are committed to
            fair pricing and never compromise on the quality of our services.
          </p>
          <div className="flex gap-x-4 mt-10">
            {logos.map((logo) => (
              <p className="font-medium text-xl lg:text-3xl">{logo.logo}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingSections;
