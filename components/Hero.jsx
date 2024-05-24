"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";

import React from "react";
import Play from "./Play";
import HeroCard from "./HeroCard";

const Hero = () => {
  const text =
    "Whether you’re moving across town or across the country, our experienced and professional team of movers is here to help!";
  const subheading = useRef();
  const topHeading = useRef();
  const bottomHeading = useRef();
  const play = useRef();
  const herocard = useRef();
  const [lettersRef, setLettersRef] = useArrayRef();
  const tl = useRef();

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({})
        .from(subheading.current, { autoAlpha: 0, opacity: 0, duration: 0.6 })
        .from(topHeading.current, { autoAlpha: 0, y: 70, duration: 0.6 })
        .from(
          bottomHeading.current,
          { autoAlpha: 0, y: 70, duration: 0.6 },
          "-=0.40"
        )
        .from(lettersRef.current, {
          autoAlpha: 0,
          opacity: 0,
          stagger: 0.01,
          duration: 0.1,
        },"-=0.5")
        .from(play.current, { autoAlpha: 0, y: -70, duration: 0.6 }, "-=0.4")
        .from(
          herocard.current,
          { autoAlpha: 0, y: 70, duration: 0.6 },
          "-=0.40"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[url('/assets/thinkseb-transformed.png')] bg-no-repeat bg-cover h-screen px-4 lg:px-10 pt-40 xl:pt-72">
      <div className="h-full pb-[40px] flex flex-col justify-between">
        <div id="upper" className="">
          <p ref={subheading} className="invisible text-white text-sm">
            A national moving company
          </p>
          <h2 className="text-white font-medium text-5xl md:text-6xl lg:text-7xl xl:text-[110px]">
            <p ref={topHeading} className="invisible  overflow-clip">
              Move Stress-Free
            </p>
            <p ref={bottomHeading} className="invisible  overflow-clip">
              with Captain
            </p>
          </h2>
        </div>
        <div className="md:flex md:justify-between items-end md:h-[70%]">
          <p className="text-white my-10 md:m-0 max-w-[342px]">
            {text.split("").map((letter, index) => (
              <span key={index} ref={setLettersRef} className="invisible">
                {letter}
              </span>
            ))}
          </p>
          <div className="md:flex md:flex-col md:justify-between md:h-full">
            <div ref={play} className="invisible">
              <Play />
            </div>

            <div ref={herocard} className="mt-10 invisible">
              <HeroCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
