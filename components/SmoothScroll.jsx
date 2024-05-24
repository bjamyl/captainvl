"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { isFirefox } from "react-device-detect";

const SmoothScroll = ({ children }) => {
  const value = isFirefox ? 2 : 10;
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
    mouseMultiplier: value,
    touchMultiplier: value,
  };
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
