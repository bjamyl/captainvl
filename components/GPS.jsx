"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";

import HeroCard from "./HeroCard";

const GPS = () => {
  const topheading = useRef();
  const bottomheading = useRef();
  const herocard = useRef();
  const tl = useRef();
  const trigger = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: trigger.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: true,
            markers: false,
          },
        })
        .from(topheading.current, { autoAlpha: 0, y: 70, duration: 0.6 })
        .from(
          bottomheading.current,
          { autoAlpha: 0, y: 70, duration: 0.6 },
          "-=0.20"
        )
        .from(
          herocard.current,
          { autoAlpha: 0, y: 70, duration: 0.6 },
          "-=0.40"
        );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section ref={trigger} className="px-4 lg:px-10">
      <div className="relative">
        <img
          src="/assets/train.png"
          alt=""
          className="w-full h-[70vh] lg:h-[90vh] object-cover flex justify-center items-center rounded-xl brightness-75"
        />
        <div className="w-full h-[70vh] lg:h-[90vh] flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
          <h3 className="text-white text-center font-medium text-3xl  md:text-6xl xl:text-[130px] z-10">
            <p ref={topheading} className="invisible overflow-clip">
              Latest GPS Tracking
            </p>
            <p ref={bottomheading} className="invisible overflow-clip">
              Technology
            </p>
          </h3>
        </div>
        <div ref={herocard} className="absolute bottom-5 right-5 invisible">
          <HeroCard />
        </div>
      </div>
    </section>
  );
};

export default GPS;
