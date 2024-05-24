import Commitment from "@/components/Commitment";
import Features from "@/components/Features";
import GPS from "@/components/GPS";
import Hero from "@/components/Hero";
import MovingSections from "@/components/MovingSections";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
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
