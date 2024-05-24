import HeroCard from "./HeroCard";

const GPS = () => {
  return (
    <section className="px-4 lg:px-10">
      <div className="relative">
        <img
          src="/assets/train.png"
          alt=""
          className="w-full h-[70vh] lg:h-[90vh] object-cover flex justify-center items-center rounded-xl brightness-75"
        />
        <div className="w-full h-[70vh] lg:h-[90vh] flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
          <h3 className="text-white text-center font-medium text-3xl  md:text-6xl xl:text-[130px] z-10">
            Latest GPS Tracking <br /> Technology
          </h3>
        </div>
        <div className="absolute bottom-5 right-5">
          <HeroCard />
        </div>
      </div>
    </section>
  );
};

export default GPS;
