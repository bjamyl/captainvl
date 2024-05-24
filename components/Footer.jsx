import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="px-4 lg:px-10  flex flex-col justify-center py-36">
      <div>
        <div id="upper">
          <h2 className="text-4xl font-medium ">
            See what <br /> our customers <br /> are saying
          </h2>
          <img src="assets/stars.png" alt="stars" className="h-3 mt-6" />
          <p className="font-medium text-sm">4.8 Out Of 5 Stars</p>
          <p className="text-gray-400 text-sm">Based On 147 Reviews</p>
        </div>
        <div id="lower" className="lg:grid lg:grid-cols-8">
          <div className="flex items-center gap-x-5 mt-10 lg:col-span-2 xl:col-span-4">
            <button className=" bg-custom-gray rounded-full p-4">
              <FaArrowLeft />
            </button>
            <p className="text-4xl font-medium">1/4</p>
            <button className=" bg-custom-gray rounded-full p-4">
              <FaArrowRight />
            </button>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-6 xl:col-span-4">
            <p className="text-3xl">
              {" "}
              "We moved from SC to AL and the move was so easy! The movers were
              polite and professional. They were on time and they really took
              good care of our stuff. It was wrapped and packaged so well! This
              was the best company we could have used. We highly recommend.”
            </p>
            <div className="flex items-center gap-x-4 mt-10">
                <img src="assets/profile.png" alt="profile" className="rounded-full h-[68px] w-[68px] object-cover" />
                <div>
                    <p className="text-sm font-semibold">Violet Welter, Alabama Al</p>
                    <p className="text-gray-400 text-sm">March 5, 2024</p>
                </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
