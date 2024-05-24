"use client"

const HeroCard = () => {
  return (
    <div className="backdrop-blur-lg  pt-5 pl-5 pb-[77px] rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-[180px] w-[354px]">
      <p className="mb-[18px] text-xl font-medium">
        <span className="text-white">01</span>
        <span className="text-white opacity-45">/03</span>
      </p>
      <p className="text-white text-sm font-medium">REACH OUT TO CAPTAIN</p>
      <p className="mt-[12px] text-white opacity-45 text-sm">
        Fill in the form, get a call back in 60 <br /> seconds or email response
      </p>
    </div>
  );
};

export default HeroCard;
