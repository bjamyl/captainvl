"use client";

import { Twirl as Hamburger } from "hamburger-react";

const Header = () => {
  return (
    <header className="z-10 m-4 top-0 right-0 left-0 fixed">
      <nav>
        <div className="bg-custom-gray rounded-md px-4 py-5 flex justify-between xl:hidden">
          <img src="/assets/logo.png" alt="logo" className="object-contain" />
          <Hamburger className="lg:hidden" />
        </div>
        <div className="hidden xl:block">
          <div className="flex  gap-x-1">
            {/* Logo */}
            <div className="bg-custom-gray rounded-md px-4 py-5 w-fit">
              <img
                src="/assets/logo.png"
                alt="logo"
                className="object-contain"
              />
            </div>
            {/* Links */}
            <div className="bg-custom-gray flex justify-between rounded-md pl-4 py-5 w-full relative">
              <ul className="flex gap-x-[24px] items-center text-sm">
                <li>ABOUT US</li>
                <li> OUR SERVICES</li>
                <li>MOVING TIPS AND TRICKS</li>
                <li>REVIEWS</li>
                <li>LOCATIONS</li>
              </ul>
              <div className="flex gap-x-2 items-center absolute right-1 top-0 bottom-0 ">
                <p className="text-sm">800 - 861 - 1404</p>
                <button className="  bg-custom-blue px-10 py-6 border-custom-gray rounded-md text-white">
                  GET QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
