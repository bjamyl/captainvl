"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { useNavBarChange } from "@/context/NavbarChange";

gsap.registerPlugin(ScrollTrigger);

const MovingSections = () => {
  const text =
    "Captain Van Lines is a leading moving and storage company in USA. We offer a range of reliable and affordable moving services to residential and commercial clients.";
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef();

  const { setIsActive } = useNavBarChange();

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
        onStart: () => setIsActive(false),
        onReverseComplete: () => setIsActive(true),
      });
    });

    return () => ctx.revert();
  }, []);

  const logos = [
    { id: 1, logo: "Digital Journal", imgDir: "logos/jornal.png" },
    { id: 2, logo: "Real Estate Today", imgDir: "logos/realestate.png" },
    { id: 3, logo: "Benzinga", imgDir: "logos/benz.png" },
    { id: 4, logo: "Nexus", imgDir: "logos/nexus.png" },
  ];
  return (
    <section
      ref={triggerRef}
      className="bg-white px-4 lg:px-10 h-[80vh] flex flex-col items-center justify-center"
    >
      <div>
        <h2 className="text-sm mb-2 text-[#06151F] opacity-70">
          #1 moving company
        </h2>
        <p className="text-3xl font-medium md:text-4xl lg:text-5xl max-w-[905px]">
          {text.split("").map((letter, index) => (
            <span key={index} ref={setLettersRef}>
              {letter}
            </span>
          ))}
        </p>
        <div className="mt-10 xl:mt-[200px] lg:flex lg:flex-row-reverse lg:justify-between items-end">
          <p className="text-sm text-[#06151FB2] opacity-70 md:w-3/4 lg:w-[30%] xl:w-[13%]">
            Our mission is to provide the highest level of service and support
            throughout the moving process, while maintaining honesty, integrity,
            and transparency in all our business dealings. We are committed to
            fair pricing and never compromise on the quality of our services.
          </p>
          <div className="grid grid-cols-2 md:gap-x-10 xl:grid-cols-4 mt-10 gap-y-10 xl:gap-y-0  items-top ">
            {logos.map((logo, i) => (
              <img key={i} src={logo.imgDir} alt="logo" className="h-[20px] md:h-8 object-cover" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingSections;
