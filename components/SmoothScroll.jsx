"use client";
import { ReactLenis, useLenis } from "lenis/react";

const SmoothScroll = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
