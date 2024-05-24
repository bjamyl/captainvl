"use client";

import { useNavBarChange } from "@/context/NavbarChange";
import { Twirl as Hamburger } from "hamburger-react";
import { useRef } from "react";

const Header = () => {
  const links = [
    "ABOUT US",
    "OUR SERVICES",
    "MOVING TIPS AND TRICKS",
    "REVIEWS",
    "LOCATIONS",
  ];

  const { isActive } = useNavBarChange();

  return (
    <header className="z-10 m-4 top-0 right-0 left-0 fixed">
      <nav>
        <div
          className={`${
            isActive ? "bg-white" : "bg-custom-gray"
          } rounded-md px-4 py-5 flex justify-between xl:hidden`}
        >
          <img src="/assets/logo.png" alt="logo" className="object-contain" />
          <Hamburger className="lg:hidden" />
        </div>
        <div className="hidden xl:block">
          <div className="flex  gap-x-1">
            {/* Logo */}
            <div
              className={`${
                isActive ? "bg-white" : "bg-custom-gray"
              } rounded-md px-4 py-5 w-fit`}
            >
              <img
                src="/assets/logo.png"
                alt="logo"
                className="object-contain"
              />
            </div>
            {/* Links */}
            <div
              className={`${
                isActive ? "bg-white" : "bg-custom-gray"
              } flex justify-between rounded-md pl-4 py-5 w-full relative`}
            >
              <ul className="flex gap-x-[24px] items-center text-sm">
                {links &&
                  links.map((link, index) => <li key={index}>{link}</li>)}
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
