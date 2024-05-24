"use client";
import Commitment from "@/components/Commitment";
import Features from "@/components/Features";
import GPS from "@/components/GPS";
import Hero from "@/components/Hero";
import MovingSections from "@/components/MovingSections";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  return (
    <div>
      <Header />
      <Hero />
      <Commitment />
      <Features />
      <MovingSections />
      <GPS />
      <Footer />
    </div>
  );
};

export default Home;
