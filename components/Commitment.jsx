"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavBarChange } from "@/context/NavbarChange";
gsap.registerPlugin(ScrollTrigger);

const Commitment = () => {
  const text =
    "With our commitment to quality, affordability, and customer satisfaction, you can trust us to handle your move with care and precision";

  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef();
  const textRef = useRef();

  //Get value from context
  const { isActive, setIsActive } = useNavBarChange();

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(lettersRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom 80%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
        onStart: () => setIsActive(true),
        onReverseComplete: () => setIsActive(false),
      });
    });

    console.log(isActive);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      className="bg-custom-gray  px-4 lg:px-10 h-[80vh] flex items-center"
    >
      <div>
        <div className="md:grid md:grid-cols-4">
          <h2 ref={textRef} className="text-sm mb-2 ">
            Our services
          </h2>
          <p className="text-3xl font-medium md:text-4xl lg:text-5xl md:col-span-3 2xl:col-span-2 ">
            {text.split("").map((letter, index) => (
              <span key={index} ref={setLettersRef}>
                {letter}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
