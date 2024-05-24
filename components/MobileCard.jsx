import React from "react";

const MobileCard = () => {
  return (
    <div className="flex flex-col items-center pt-10 px-2 pb-2 bg-white rounded-md">
      <h2 className="text-3xl font-medium md:text-5xl">Auto Transport</h2>
      <p className="my-[30px] text-center w-[70%] max-w-[450px] text-gray-400">
        Whether you're moving across the country or just across town, trust our
        dedicated team to handle your vehicle with the utmost care and
        professionalism. Sit back, relax, and let us handle the logistics of
        your auto transport needs.
      </p>
      <div className="relative">
        <img
          src="assets/real-estate.png"
          alt="img"
          className="w-full object-cover rounded-lg"
        />
        <div className="flex justify-center items-center">
          <button className="bg-custom-blue w-[98%] py-4 md:py-6 rounded-md absolute bottom-1 text-white text-sm">
            GET QUOTE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
